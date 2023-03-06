// Updates all NPs with 2s on the Navigator Main and EVAAS Proj Main Sheets
function transformNPs() {
    transformNavigatorMainNPs();
    transformEVAASProjNPs();
  };
  
  
  // Replaces NP with 2 for each EOG/EOC Lvl column on the Navigator Main sheet
  // Run anytime the Navigator Main spreadsheet is updated
  function transformNavigatorMainNPs() {
    var ss = SpreadsheetApp.openByUrl('#');
    var columnHeaders = ["DK:DK", "DQ:DQ", "EB:EB", "EH:EH", "EN:EN", "ET:ET"];
  
    for (i=0; i < columnHeaders.length; i++) {
      findAndReplace("NP", 2, columnHeaders[i]);
    };
  
    function findAndReplace(findString, replaceString, range) {
      console.log("Replacing Range " + range);
      ss.setActiveSelection(range)
      .createTextFinder(findString)
      .replaceAllWith(replaceString);
    };
  };
  
  
  // Replaced NP with 2 for each EOG/EOC Lvl projection on the EVAAS Proj Main sheet
  // Run anytime the EVAAS Proj Main spreadsheet is updated
  function transformEVAASProjNPs() {
    var ss = SpreadsheetApp.openByUrl('#');
    var columnHeaders = ["S:S"];
    var sheets = ['Math', 'ELA', 'Science']
  
    for (s=0; s < sheets.length; s++) {
      for (i=0; i < columnHeaders.length; i++) {
        findAndReplace("NP", 2, columnHeaders[i], sheets[s]);
      };
    };
  
    function findAndReplace(findString, replaceString, range, sheet) {
      console.log("Replacing Range " + range);
      ss.getSheetByName(sheet)
      .createTextFinder(findString)
      .replaceAllWith(replaceString);
    };
  };
  
  // Replaced NA with '' for each EOG/EOC Lvl projection on the EVAAS Proj Main sheet
  // Run anytime the EVAAS Proj Main spreadsheet is updated
  function transformEVAASProjNAs() {
    var ss = SpreadsheetApp.openByUrl('#');
    var columnHeaders = ["S:S"];
    var sheets = ['Math', 'ELA', 'Science']
  
    for (s=0; s < sheets.length; s++) {
      for (i=0; i < columnHeaders.length; i++) {
        findAndReplace("NA", "", columnHeaders[i], sheets[s]);
      };
    };
  
    function findAndReplace(findString, replaceString, range, sheet) {
      console.log("Replacing Range " + range);
      ss.getSheetByName(sheet)
      .createTextFinder(findString)
      .replaceAllWith(replaceString);
    };
  };
  