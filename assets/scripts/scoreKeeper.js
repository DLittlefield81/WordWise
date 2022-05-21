//if win set to application memory

// The init() function fires when the page is loaded 
function init() {
    // Get stored todos from localStorage
    var storedPlayerScores = JSON.parse(localStorage.getItem("playerScores"));

    // If todos were retrieved from localStorage, update the todos array to it
    if (storedPlayerScores !== null) {
        playerScores = storedPlayerScores;
    }

    // This is a helper function that will render todos to the DOM
    renderPlayerScores();
}

