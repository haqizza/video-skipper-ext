skipButtonElement = document.getElementById("skipButton")
  
skipButtonElement.addEventListener("click", () => {
  chrome.runtime.sendMessage({
    action: "set-video-to-end",
  })
}
);