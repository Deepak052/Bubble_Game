var timer = 60;
var score = 0;
var hitNumber = 0; 

// Function to create bubbles
function makeBubble() {
  var bubbleContainer = document.querySelector("#pbtm"); 
  var clutter = "";
  for (var i = 1; i <= 119; i++) {
    var randomNum = Math.floor(Math.random() * 10); 
    clutter += `<div class="bubble">${randomNum}</div>`;
  }
  bubbleContainer.innerHTML = clutter;
}

// Function to increase score
function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

// Function to generate new hit number
function getNewHit() {
  hitNumber = Math.floor(Math.random() * 10); 
  document.querySelector("#hitval").textContent = hitNumber;
}

// Function to run timer
function runTimer() {
  var timerInterval = setInterval(function() {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerInterval);
      document.querySelector("#pbtm").innerHTML = "<h1>Game Over</h1>";
    }
  }, 1000);
}

// Event listener for clicking bubbles
document.querySelector("#pbtm").addEventListener('click', function(event) {
  var clickedNum = Number(event.target.textContent);
  if (clickedNum === hitNumber) {
    increaseScore();
    makeBubble();
    getNewHit();
  }
});

// Run game logic
runTimer();
makeBubble();
getNewHit();
