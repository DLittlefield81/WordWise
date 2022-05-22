let todoInput = document.querySelector("#todo-text");
let todoForm = document.querySelector("#todo-form");
let todoList = document.querySelector("#todo-list");
let todoCountSpan = document.querySelector("#todo-count");





//Save Score to localStorage
export function onGameOver() {}

function renderPlayerScores() {
    // Clear todoList element and update todoCountSpan
    playerList.innerHTML = "";
    todoCountSpan.textContent = todos.length;

    // Render a new li for each todo
    for (var i = 0; i < todos.length; i++) {
        var todo = todos[i];

        var li = document.createElement("li");
        li.textContent = todo;
        li.setAttribute("data-index", i);

        var button = document.createElement("button");
        button.textContent = "Complete ✔️";

        li.appendChild(button);
        playerList.appendChild(li);
    }
}





// The init() function fires when the page is loaded 
export function init() {
    // Get stored scores on page load from localStorage
    let storedPlayerScores = JSON.parse(localStorage.getItem("playerScores"));

    // If todos were retrieved from localStorage, update the todos array to it
    if (storedPlayerScores !== null) {
        playerScores = storedPlayerScores;
    }

    // This is a helper function that will render todos to the DOM
    renderPlayerScores();
}
// Runs on load
init(); //TURN THIS FUNCTION ON WHEN READY