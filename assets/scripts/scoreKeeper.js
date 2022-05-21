//Save Score to localStorage
export function onGameOver() {
    


}





// The init() function fires when the page is loaded 
export function init() {
    // Get stored scores on page load from localStorage
    var storedPlayerScores = JSON.parse(localStorage.getItem("playerScores"));

    // If todos were retrieved from localStorage, update the todos array to it
    if (storedPlayerScores !== null) {
        playerScores = storedPlayerScores;
    }

    // This is a helper function that will render todos to the DOM
    renderPlayerScores();
}
// Runs on load
//init(); //TURN THIS FUNCTION ON WHEN READY