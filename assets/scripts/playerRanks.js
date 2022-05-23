let rankInput = document.querySelector("#rank-text");
let rankForm = document.querySelector("#rank-form");
let rankList = document.querySelector("#rank-list");
let rankCountSpan = document.querySelector("#rank-count");
var clearScores = document.querySelector("#clear-Scores");
let ranks = [];

// The following function renders items in a todo list as <li> elements
function renderRanks() {
    // Clear todoList element and update todoCountSpan
    rankList.innerHTML = "";
    rankCountSpan.textContent = ranks.length;

    // Render a new li for each todo
    for (let i = 0; i < ranks.length; i++) {
        let rank = ranks[i];

        let li = document.createElement("li");
        li.textContent = rank;
        li.setAttribute("data-index", i);
        rankList.appendChild(li); 
        
    };
  

}

// This function is being called below and will run when the page loads.
function scoreboardInit() {
    // Get stored todos from localStorage
    let storedRanks = JSON.parse(localStorage.getItem("playerRanks"));

    // If todos were retrieved from localStorage, update the todos array to it
    if (storedRanks !== null) {
        ranks = storedRanks;
    }

    // This is a helper function that will render todos to the DOM
    renderRanks();
    
}

function storeRanks() {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem("playerRanks", JSON.stringify(ranks));
}

// Add submit event to form
rankForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let rankText = rankInput.value.trim();

    // Return from function early if submitted todoText is blank
    if (rankText === "") {
        return;
    }

    // Add new todoText to todos array, clear the input
    ranks.push(rankText);
    rankInput.value = "";

    // Store updated todos in localStorage, re-render the list
    storeRanks();
    renderRanks();
});

// Calls init to retrieve data and render it to the page on load
init()