let username = document.getElementById("username");
let saveScoreBtn = document.getElementById("saveScoreBtn");
let finalScore = document.getElementById("finalScore");
let mostRecentScore = localStorage.getItem("mostRecentScore");
let highScore = JSON.parse(localStorage.getItem("highScores")) || [];
let MAX_HIGH_SCORES = 5;

function saveHighScore() {

    finalScore.innerText = mostRecentScore;

    username.addEventListener("keyup", () => {
        saveScoreBtn.disabled = !username.value;
    });

    saveHighScore = e => {
        console.log("Clicked Save Button")
        e.preventDefault();
        console.log(scoreCount + "current Score");
        let score = {
            score: Math.floor(Math.random() * 100), //<------------------------generates fake find score - replace with variable.
            name: username.value
        };
        highScore.push(score);
        highScore.sort((a, b) => b.score - a.score);
        highScore.splice(5);

        localStorage.setItem("highScores", JSON.stringify(highScores));
    }
};

function getHighScore() {
    let highScoresList = document.getElementById("highScoresList");
    let highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScoresList.innerHTML = highScores
        .map(score => {
            return `<li class="high-score">${score.name}-${score.score}</li>`;
        }).join("");
};





// Renders items into <li>
function renderRanks() {
    // Clear ranks and update rank count
    rankList.innerHTML = "";
    rankCountSpan.textContent = ranks.length; //<----------------------------------------Comment out to see
    // Render a new li for each player entry
    for (let i = 0; i < ranks.length; i++) {
        let rank = ranks[i];
        let li = document.createElement("li");
        li.textContent = rank;
        li.setAttribute("data-index", i);
        rankList.appendChild(li);
        startButton.classList.remove('hide')
        scoreRank.classList.add("hide")
    };
}

function scoreboardInit() {
    // Get stored ranks from localStorage
    let storedRanks = JSON.parse(localStorage.getItem("playerRanks"));
    // If ranks were retrieved from localStorage, update the ranks array to it
    if (storedRanks !== null) {
        // ranks = storedRanks;
    }
    // This is a helper function that will render ranks to the DOM
    renderRanks();

}

function storeRanks() {
    // Stringify and set key in localStorage to todos array
    localStorage.setItem("playerRanks", JSON.stringify(ranks));
    console.log('Line 88')
}

// Add submit event to form
rankForm.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log(count + "Current Count Line94")
    //let rankText = "Player: " + rankInput.value.trim() + " Score:" + count.value.trim();
    //localStorage.setItem("playerRanks", JSON.stringify());
    // if rankText is empty string exit function
    if (rankText === "") {
        return;
    }

    // Add new todoText to todos array, clear the input
    ranks.push(rankText);
    rankInput.value = "";

    // Store updated todos in localStorage, re-render the list
    console.log('Line 107')
    storeRanks();
    renderRanks();
});
