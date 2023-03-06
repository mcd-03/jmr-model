// templateUrl is the url of the sheet that contains the template for the 'Conferencing Tab'
var templateUrl = '#';
// importUrl is the url of the sheet that contains the raw data for every JMR student
var importUrl = '#';

// class and method definitions
class Teacher {
  constructor(name, dataUrl, blocks, grade, subject) {
    this.name = name;
    // dataUrl is the url of the spreadsheet that contains the teacher's data
    this.dataUrl = dataUrl;
    this.blocks = blocks;
    this.grade = grade;
    this.subject = subject; // now depreciated as the subject is determed by the arrays inside the blocks array
  };
  
  // driver method to handle the entire update (update both data and conferencing tab)
  update() {
    // gets and actives spreadsheet
    var ss = SpreadsheetApp.openByUrl(this.dataUrl);
    SpreadsheetApp.setActiveSpreadsheet(ss);

    console.log('updating tabs for ' + this.name);
    this.updateTabs();

    console.log('updating conference sheet for ' + this.name);
    this.updateConferencingSheet();

    console.log('update complete for ' + this.name);
  };

  // driver method to update the data on a teacher's spreadsheet
  updateTabs() {
    for (var block in this.blocks) {
      console.log('processing block: ', this.blocks[block]);
      var tab = 'Block ' + this.blocks[block][0];
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var sheet = ss.getSheetByName(tab);

      if (sheet != null) {
        sheet.activate();
        var name = ss.getName().split(" ")[0]; // provides the teacher's name to importNewData()
        var subject = this.blocks[block][1];
        var block = this.blocks[block][0];
        this.clearOldData();
        this.importNewData(name, block, subject);
        this.formatNewData();
      };
    };
  };

  // removes all data from the active sheet
  clearOldData() {
    // gets active spreadsheet and sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns()).clear()
    .setBorder(false, false, false, false, false, false)
    .setBackground(null);

    // log succesful clear
    console.log('old data cleared');
  };

  // imports the new data into the active sheet
  importNewData(name, block, subject) {
    // gets active spreadsheet and sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Block ' + block).activate(); 

    // adds query to import new data
    // update the url below with the sheet that houses the current schoolwide data
    // then update the query with the appropriate columns
    // the tab to query is referenced based on the subject the teacher teaches
    var name_string = "'" + name + "'";
    var block_string = "'" + block + "'";
    var rangeString = '"' + subject + '!A:AI"';
    var formula = '=QUERY(importrange(' + '"'+ importUrl + '"' + ', ' + rangeString + '), "select Col1, Col2, Col3, Col8, Col9, Col11, Col12, Col13, Col15, Col16, Col17, Col19, Col20, Col21, Col23, Col24, Col25, Col26, Col27, Col30, Col31, Col32, Col33, Col34, Col35 where Col4 = ' + name_string + ' and Col5 = ' + block_string + '")';
    ss.getRange('A2').setFormula(formula);
   
    // setting summary formulas on top row
    ss.getRange('D1').setFormula('=iferror(average(D3:D))')
    .autoFill(ss.getRange('D1:Y1'), SpreadsheetApp.AutoFillSeries.DEFAULT_SERIES); 

    // log sucessful import
    console.log('new data imported');
  };

  // formats the newly imported data
  formatNewData() {
    // gets active spreadsheet and sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();

    // sets column widths
    sheet.setColumnWidths(1, 26, 100).setColumnWidths(4, 21, 75);

    // sets font styles
    sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns())
    .setFontFamily('Arial')
    .setFontSize(10)
    .setFontStyle('normal')
    .setHorizontalAlignment('center');

    // sets column colors to help break up data
    ss.getRangeList(['A:C', 'F:H', 'L:N','T:U', 'W:Y']).setBackground('#f3f3f3');
    ss.getRangeList(['V:V']).setBackground('#FFFDC3');
    
    // formats the data headers
    ss.getRange('1:1').setNumberFormat("0.0");
    ss.getRange('2:2').setWrapStrategy(SpreadsheetApp.WrapStrategy.WRAP)
    .setVerticalAlignment('middle')
    .setHorizontalAlignment('center');
    ss.setFrozenRows(2);

    // hard-codes the data imported with the query function
    var last = sheet.getMaxRows();
    var range = ss.getRange('A2:Z' + last.toString());
    range.copyTo(range,SpreadsheetApp.CopyPasteType.PASTE_VALUES, false);

    // log sucessful format
    console.log('new data formatted');
  };

  // driver method to call three submethods necessary to update the active sheet
  updateConferencingSheet() {
    this.deleteConferencingTab();
    this.addConferencingTab();
    this.renameConferencingTab();
  };

  deleteConferencingTab() {
    console.log('deleting old conferencing sheet');
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Conferencing Sheet');
    if (sheet != null) {
      sheet.activate();
      SpreadsheetApp.getActiveSpreadsheet().deleteActiveSheet();
    };
  };

  addConferencingTab() {
    console.log('importing new conferencing sheet');
    var ss = SpreadsheetApp.openByUrl(templateUrl);
    var sourceSheet = ss.getSheetByName('Conferencing Sheet');
    var destination = SpreadsheetApp.openByUrl(this.dataUrl);
    sourceSheet.copyTo(destination);
  };

  renameConferencingTab() {
    console.log('renaming new conferencing sheet');
    SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Copy of Conferencing Sheet').setName('Conferencing Sheet');
  };
};

class PLC {
  constructor(teachers, plcName) {
    this.teachers = teachers;
    this.plcName = plcName;
  };
  
  update() {
    console.log('updating ' + this.plcName);
    var end = this.teachers.length;
    for (var i = 0; i < end; i++) {
      this.teachers[i].update();
    };
    console.log('update complete for ' + this.plcName);
  };
};

class Grade {
  constructor(plcs, gradeName) {
    this.plcs = plcs;
    this.gradeName = gradeName;
  };

  update() {
    console.log('updating ' + this.gradeName)
    var end = this.plcs.length;
    for (var i = 0; i < end; i++) {
      this.plcs[i].update();
    };
    console.log('update complete for ' + this.gradeName);
  };
};

class Department {
  constructor(plcs, departmentName) {
    this.plcs = plcs;
    this.departmentName = departmentName;
  };
  
  update() {
    console.log('updating ' + this.departmentName)
    var end = this.plcs.length;
    for (var i = 0; i < end; i++) {
      this.plcs[i].update();
    };
    console.log('update complete for ' + this.departmentName);
  };
};

class School {
  constructor(departments) {
    this.departments = departments;
  };
  
  update() {
    var end = this.departments.length;
    for (var i = 0; i < end; i++) {
      this.departments[i].update();
    };
    console.log('school wide update complete');
  };
};
