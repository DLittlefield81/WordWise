function saveHighScore(score, highScores) {
    const name = prompt('You got a highscore! Enter name:');
    const newScore = {
        score,
        name
    };

    // 1. Add to list
    highScores.push(newScore);

    // 2. Sort the list
    highScores.sort((a, b) => b.score - a.score);

    // 3. Select new list
    highScores.splice(NO_OF_HIGH_SCORES);

    // 4. Save to local storage
    localStorage.setItem(HIGH_SCORES, JSON.stringify(highScores));
    //localStorage.setItem("playerRanks", JSON.stringify(ranks));
};
function showHighScores() {
    const highScores = JSON.parse(localStorage.getItem(HIGH_SCORES)) ? ? [];
    const highScoreList = document.getElementById(HIGH_SCORES);

    highScoreList.innerHTML = highScores
        .map((score) => `<li>${score.score} ${score.name}`)
        .join('');
}

showHighScores()