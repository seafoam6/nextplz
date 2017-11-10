chrome.runtime.onMessage.addListener(
  function(request) {
    if( request.message === "clicked_browser_action" ) {
      var nextButton = document.querySelector(".next-button > a");
      location.replace(nextButton.getAttribute("href"));
    }
  }
);