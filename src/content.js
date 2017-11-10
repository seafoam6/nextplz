function moveLeft(){
  var nextButton = document.querySelector(".prev-button > a");
  if (nextButton) {
    location.replace(nextButton.getAttribute("href"));        
  }
}

function moveRight(){
  var nextButton = document.querySelector(".next-button > a");
  if (nextButton) {
    location.replace(nextButton.getAttribute("href"));        
  }
}

document.addEventListener('keydown', (event) => {
  if (event.key == 'ArrowRight'){
    moveRight();
  }
  if (event.key == 'ArrowLeft'){
    moveLeft();
  }
});