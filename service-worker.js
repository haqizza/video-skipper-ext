function endVideo() {
  const firstVideoElement = document.getElementsByTagName('video')[0]
  firstVideoElement.currentTime = firstVideoElement.duration - 0.2 //set current time to last 0.2 second
}

chrome.commands.onCommand.addListener(async (command) => {
  if (command === "setVideoToEnd") {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true }) // get active tab

    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      func: endVideo,
    });
  }
});

chrome.runtime.onMessage.addListener(async (message) => {
  if (message.action === "set-video-to-end") {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true })

    chrome.scripting.executeScript({
      target: {tabId: tab.id},
      func: endVideo,
    });
  }
})