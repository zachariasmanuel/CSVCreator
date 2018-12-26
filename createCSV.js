var fileName = 'output.csv';
var folderName = 'EmailCSV';
var column = 0;
var startingRow = 0;

function createCSV() {
  deleteFolder();
  //var sss = SpreadsheetApp.openById('17KItHQiT1urUwovcTZ9EsHhEfINycugWmfT_oQ');
  //var ss = sss.getSheetByName('data');
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();

  var range = ss.getDataRange();
  var data = range.getValues();

  var finalData = "";
  for(i = startingRow; i < data.length; i++){
    if(finalData == ""){
      finalData = data[i][column];
    }
    else{
      finalData = finalData + "," +data[i][column];
    }
  }
  writeFile(finalData);
}

function writeFile(data){
  Logger.log(data);
  var folder = DriveApp.createFolder(folderName);
  var file = folder.createFile(fileName, data, MimeType.PLAIN_TEXT); 
}

function deleteFolder(){
  var folder=DriveApp.getFoldersByName(folderName).next();
  if(folder){
    DriveApp.removeFolder(folder);
  }
}