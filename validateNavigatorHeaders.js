function validateNavigatorHeaders() {
    ss = SpreadsheetApp.openByUrl('#');
    var cellsToValidate = [
      ['A2', 'Student ID Number'], ['B2', 'Student Last Name'], ['C2', 'Student First Name'],
      ['BE2', 'MAP Reading RIT 1'], ['BG2', 'MAP Reading Pctl 1'], ['BH2', 'MAP Math RIT 1'], ['BI2', 'MAP Math Pctl 1'],
      ['BK2', 'MAP Reading RIT 2'], ['BM2', 'MAP Reading Pctl 2'], ['BN2', 'MAP Math RIT 2'], ['BO2', 'MAP Math Pctl 2'],
      ['DI2', 'EOG Gd 5 Reading Test'], ['DJ2', 'EOG Gd 5 Reading Scale Score'], ['DK2', 'EOG Gd 5 Reading Ach Level'], ['DL2', 'EOG Gd 5 Reading Pctl'],
      ['DZ2', 'EOG Gd 6 Reading Test'], ['EA2', 'EOG Gd 6 Reading Scale Score'], ['EB2', 'EOG Gd 6 Reading Ach Level'], ['EC2', 'EOG Gd 6 Reading Pctl'],
      ['EL2', 'EOG Gd 7 Reading Test'], ['EM2', 'EOG Gd 7 Reading Scale Score'], ['EN2', 'EOG Gd 7 Reading Ach Level'], ['EO2', 'EOG Gd 7 Reading Pctl'],
      ['DO2', 'EOG Gd 5 Math Test'], ['DP2', 'EOG Gd 5 Math Scale Score'], ['DQ2', 'EOG Gd 5 Math Ach Level'], ['DR2', 'EOG Gd 5 Math Pctl'],
      ['EF2', 'EOG Gd 6 Math Test'], ['EG2', 'EOG Gd 6 Math Scale Score'], ['EH2', 'EOG Gd 6 Math Ach Level'], ['EI2', 'EOG Gd 6 Math Pctl'],
      ['ER2', 'EOG Gd 7 Math Test'], ['ES2', 'EOG Gd 7 Math Scale Score'], ['ET2', 'EOG Gd 7 Math Ach Level'], ['EU2', 'EOG Gd 7 Math Pctl'],
      ['FO2', 'EOC Math I Test'], ['FP2', 'EOC Math I Scale Score'], ['FQ2', 'EOC Math I Ach Level'], ['FR2', 'EOC Math I Pctl'],
      ['FU2', 'EOC Math III Test'], ['FV2', 'EOC Math III Scale Score'], ['FW2', 'EOC Math III Ach Level'], ['FX2', 'EOC Math III Pctl']
    ];
  
    for (i=0; i < cellsToValidate.length; i++) {
      if (ss.getRange(cellsToValidate[i][0]).getValue() == cellsToValidate[i][1]) {
        console.log(cellsToValidate[i], "Headers match.");
      } else {
        console.error(cellsToValidate[i], 'Headers do not match!');
        return;
      };
    };
    console.log("All Headers Validated")
  };