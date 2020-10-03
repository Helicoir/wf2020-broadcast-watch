const getData = function(sheetName: string) {
  const sheet = SpreadsheetApp.getActive().getSheetByName(sheetName)
  if (!sheet) {
    return null
  }
  const rows = sheet.getDataRange().getValues()
  return rows.map((row, index) => {
    row[0] = row[0].replace('https://www.youtube.com/watch?v=', '')
    return {
      name: row[1],
      id: index,
      url: row[0],
      day: row[2]
    }
  }).slice(1)
}

export const doGet = function() {
  return ContentService.createTextOutput(JSON.stringify(getData('data'), null, 2)).setMimeType(ContentService.MimeType.JSON)
}