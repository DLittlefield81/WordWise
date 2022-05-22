let ranksPlayerName = document.getElementById("ranks-playerName");
var ranksSavedName = document.getElementById("rank-saved-name");
let ranksPlayerScore = document.getElementById("ranks-score");
let ranksSaveButton = document.getElementById("ranks-save");

function savePlayerRank() {
    // Save related form data as an object
    let ranksScoreChart = {
        ranksPlayerName: ranksPlayerName.value,
        //ranksPlayerScore: ranksPlayerScore.valuetrim()    //SET SCORE HERE
    };
    // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
    localStorage.setItem("ranksScoreChart", JSON.stringify(ranksScoreChart));
}

function renderLastRank() {
    // Use JSON.parse() to convert text to JavaScript object
    var lastRank = JSON.parse(localStorage.getItem("ranksScoreChart"));
    // Check if data is returned, if not exit out of the function
    if (lastRank !== null) {
        document.getElementById("ranks-playerName").innerHTML = lastRank.ranksPlayerName;
        // document.getElementById("##CHANGE TO COUNT##").innerHTML = lastRank.ranksPlayerScore;  //RETRIEVE SCORE
    } else {
        return;
    }
}

ranksSaveButton.addEventListener("click", function (event) {
    event.preventDefault();
    savePlayerRank();
    renderLastRank();
});

function init() {
    renderLastRank();
}
init();