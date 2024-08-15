// This script is for Zoom cloud recording transcripts only.

// Menu
function onOpen() {
  DocumentApp.getUi().createMenu('Clean Transcript')
    .addItem('Anonymize speakers', 'anonymizeSpeakers')
    .addItem('Combine chunks', 'combineChunks')
    .addToUi();
}

// Main functions
function anonymizeSpeakers() {
  var ui = DocumentApp.getUi();

  // Prompt the user to enter the text to find
  var findResponse = ui.prompt('Anonymize speakers', 'Enter speaker name:', ui.ButtonSet.OK_CANCEL);
  if (findResponse.getSelectedButton() == ui.Button.CANCEL) {
    ui.alert('Operation canceled.');
    return;
  }
  
  var speaker = findResponse.getResponseText();
  if (!speaker) {
    ui.alert('You must enter text to find.');
    return;
  }

  // Prompt the user to enter the replacement text
  var replaceResponse = ui.prompt('Anonymize speakers', 'Enter replacement text:', ui.ButtonSet.OK_CANCEL);
  if (replaceResponse.getSelectedButton() == ui.Button.CANCEL) {
    ui.alert('Operation canceled.');
    return;
  }
  
  var replacement = replaceResponse.getResponseText();

  // Perform the find and replace
  var body = DocumentApp.getActiveDocument().getBody();
  body.replaceText(speaker, replacement);

  ui.alert('Replaced "' + speaker + '" with "' + replacement + '" in the document.');
}

function combineChunks() {
  var body = DocumentApp.getActiveDocument().getBody();
  var text = body.getText();

  // Get chunks of texts
  var chunk = text.match(/\d{2}:\d{2}:\d{2}\.\d{3} --> \d{2}:\d{2}:\d{2}\.\d{3}\s.*:\s.*/gm);
  var ithChunk = [];
  var timestamp = [];
  var speaker = [];
  var content = [];

  for (var i = 0; i < chunk.length; i++) {
    // Match sub-groups of each chunk
    ithChunk = chunk[i].match(/(\d{2}:\d{2}:\d{2}\.\d{3} --> \d{2}:\d{2}:\d{2}\.\d{3})\s(.*):\s(.*)/);
    timestamp[i]= ithChunk[1];
    speaker[i] = ithChunk[2];
    content[i] = ithChunk[3];
  }

  var scr = timestamp[0] + '\n' + speaker[0] + ': ' + content[0];
  
  for (var j = 0; j < chunk.length - 1; j++) {
    if (speaker[j] === speaker[j+1]) {
      // Attach content if speaker is the same
      scr = scr + ' ' + content[j+1];
    } else {
      // Attach entire chunk if speaker is different 
      scr = scr + '\n\n' + timestamp[j+1] + '\n' + speaker[j+1] + ': ' + content[j+1];
    }
  }
  
  body.setText(scr);

  DocumentApp.getUi().alert('Chunks combined successfully. Please wait for the script to finish running.');
}
