// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var secondsLeft = 120000;

export function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " Remaining.";

        if (secondsLeft === 0) {
//what should happen when done
            //ask to rerun game or end
        }

    }, 1000);
}

// Function to create and append colorsplosion image
// function sendMessage() {
//     timeEl.textContent = " ";
//     var imgEl = document.createElement("img");
//     imgEl.setAttribute("src", "images/image_1.jpg");
//     mainEl.appendChild(imgEl);

// }

setTime();

//if answer is wrong remove time
