document.querySelectorAll("button").forEach((btn, i) => {
  btn.addEventListener("click", () => {
    const userNumber = i + 1;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const tabId = tabs[0].id;
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: (num) => {
          localStorage.setItem("currentUser", num-1);
        },
        args: [userNumber] 
      });

      chrome.scripting.executeScript({
        target: { tabId: tabId },
        func: () => location.reload()
      });
    });
  });
});


function setPageLocalStorage(key, value) {
  chrome.scripting.executeScript({
    target: { tabId: chrome.tabs.TAB_ID_HERE || undefined, allFrames: false },
    func: (k, v) => {
      localStorage.setItem(k, v); 
    },
    args: [key, value]
  });
}