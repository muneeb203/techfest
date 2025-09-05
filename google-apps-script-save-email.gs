function doPost(e) {
  try {
    var sheet = SpreadsheetApp.openById('1qIRW_dvAPThoF6fbF_XBhqbSUqM1NRNXREQFFXH2VhY').getSheetByName('Sheet1'); // Change 'Sheet1' if your sheet name is different
    var data = JSON.parse(e.postData.contents);
    var email = data.email;

    if (!email) {
      return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'message': 'Email is required' })).setMimeType(ContentService.MimeType.JSON);
    }

    // Append email to the sheet in the first empty row under column "Email"
    sheet.appendRow([email]);

    return ContentService.createTextOutput(JSON.stringify({ 'result': 'success', 'message': 'Email saved successfully' })).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ 'result': 'error', 'message': error.message })).setMimeType(ContentService.MimeType.JSON);
  }
}
