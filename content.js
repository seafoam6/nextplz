chrome.runtime.onMessage.addListener(
  function(request) {
    if( request.message === "clicked_browser_action" ) {
      var nextButton = $(".next-button > a").attr("href");
      location.replace(nextButton);
    }
  }
);