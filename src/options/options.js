function save_options() {
  var colourBlindMode = document.getElementById('colourBlindMode').checked;
  var hideAOM = document.getElementById('hideAOM').checked;
  var enableRetroCalculator = document.getElementById('enableRetroCalculator').checked;

  chrome.storage.sync.set({
    colourBlindMode: colourBlindMode,
    hideAOM: hideAOM,
    enableRetroCalculator: enableRetroCalculator
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';

    setTimeout(function() {
      status.textContent = '';
    }, 1000);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {

  chrome.storage.sync.get({
    colourBlindMode: false,
    hideAOM: false,
    enableRetroCalculator: true
  }, function(items) {
    document.getElementById('colourBlindMode').checked = items.colourBlindMode;
    document.getElementById('hideAOM').checked = items.hideAOM;
    document.getElementById('enableRetroCalculator').checked = items.enableRetroCalculator;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
