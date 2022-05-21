// Selects element by class
var timeEl = document.querySelector(".countdownTimer");

// Selects element by id
var mainEl = document.getElementById("main");
//Sets game timer length
var secondsLeft = 10;

export function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Time:" + secondsLeft;

        if (secondsLeft === 0) {
            //Time Expired Action
            clearInterval(timerInterval);
            gameOver()
        }

    }, 1000);
}

// Function to run at end of game
function gameOver() {
    timeEl.textContent = "Time's Up";


}

setTime();