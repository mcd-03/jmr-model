// Runs updates for ELA/Math and Sci/SS
function transformNames() {
    transformELAandMathLongWithShortName();
    transformSSandScienceLongWithShortName();
  };
  
  
  // Replaces default teacher name (long) in PWS with a shortened teacher name
  // Uses the fullToShortNameMapping
  // Run anytime the Automatic Rosters spreadsheet is updated
  
  function transformELAandMathLongWithShortName() {
    var ss = SpreadsheetApp.openByUrl('#');
  
    var fullToShortNameMapping = {
      "Bleiweis, Brett M": "Bleiweis", 
      "Lucero, Theresa": "Lucero", 
      "Johnson, Leslie R": "Johnson", 
      "Renfro, Tracey L": "Renfro", 
      "Vanderhill, Bryan A": "Vanderhill", 
      "Stevens, Constance L": "Stevens", 
      "Ball, Amanda R": "Ball", 
      "Jackson, Carol M": "Jackson", 
      "Kasberg, Jacqueline E": "Kasberg",
      "Clark, Brandi Franklin": "Clark", 
      "Travis, Michael A": "Travis", 
      "Navarro-Templeton, Allison": "Navarro", 
      "Musick, Lorna Leigh": "Musick", 
      "McCheyne, Jenelle King": "McCheyne", 
      "Mattes, Melissa H": "Mattes", 
      "Castillo, Janet S": "Castillo", 
      "Stroud, Tia T": "Stroud", 
      "Winters, Danielle J": "Winters", 
      "Rowe, Allison Sumner": "Rowe", 
      "Kemp, Emily": "Kemp", 
      "Bellissimo, Shauna Gale": "Bellissimo", 
      "Brunton, Natasha N": "Brunton", 
      "Reckerd, Geoffrey S": "Reckerd", 
      "Krause, Marissa B": "Krause", 
      "Jellis, Rachel": "Jellis", 
      "Hill, Sandra T": "Hill", 
      "Roberts, Allison T": "Roberts", 
      "Eversole, Stacy M": "Eversole", 
      "Lampert, Jason M": "Lampert", 
      "Arnold, Brooke": "Arnold", 
      "Meekey, Angela H": "Meekey", 
      "Buzzee, Mark R": "Buzzee", 
      "Pait, Jennifer B": "Pait",
      "Van Der Hill, Kelsey J": "KVanderhill",
      "Cohen, Sari J": "Cohen",
      };
  
    for (const [findString, replaceString] of Object.entries(fullToShortNameMapping)) {
      console.log("Replacing " + findString + " with " + replaceString);
      findAndReplace(findString, replaceString);
    };
  
    function findAndReplace(findString, replaceString) {
      ss.getSheetByName('Sheet1')
      .createTextFinder(findString)
      .replaceAllWith(replaceString);
    };
  };
  
  
  // Replaces default teacher name (long) in PWS with a shortened teacher name
  // Uses the fullToShortNameMapping
  // Run anytime the Automatic Rosters spreadsheet is updated
  
  function transformSSandScienceLongWithShortName() {
    var ss = SpreadsheetApp.openByUrl('#');
  
    var fullToShortNameMapping = {
      "Cox, Elisa M": "Cox",
      "Dodds, Karisa S": "Dodds",
      "Musa, Rebecca W": "Musa",
      "Buchalski, Amanda T": "Buchalski",
      "Shaw, Gregory L": "Shaw",
      "Young, Bernadette M": "Young",
      "Crawley, Keisa L": "Crawley",
      "Recker, Amanda K": "Recker",
      "Jenner, Brandy W": "Jenner",
      "Runkel, William": "Runkel",
      "Pearce, Susan B": "Pearce",
      "Lonon, Cynthia A": "Lonon",
      "Layton, Heather": "Layton",
      "Renfro, Tracey L": "Renfro",
      "Bleiweis, Brett M": "Bleiweis",
      "Meekey, Angela H": "Meekey",
      "Lampert, Jason M": "Lampert",
      };
  
    for (const [findString, replaceString] of Object.entries(fullToShortNameMapping)) {
      console.log("Replacing " + findString + " with " + replaceString);
      findAndReplace(findString, replaceString);
    };
  
    function findAndReplace(findString, replaceString) {
      ss.getSheetByName('sheet2')
      .createTextFinder(findString)
      .replaceAllWith(replaceString);
    };
  };