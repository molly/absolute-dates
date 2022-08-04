var runScript = function(details) {
  chrome.tabs.executeScript(details.tabId, {
      file: 'background-replace-dates.js'
  });
};

chrome.webNavigation.onHistoryStateUpdated.addListener(runScript);
chrome.webNavigation.onCompleted.addListener(runScript);