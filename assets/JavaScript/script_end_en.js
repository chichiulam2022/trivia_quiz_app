const recentScore = localStorage.getItem('recentScore');
const finalScoreText = document.querySelector('.final-score-text');


// finalScoreText.innerText = recentScore;
if (recentScore == 10) {
    finalScoreText.innerText = `Excellent! 🎉😍💯 Your score: ${recentScore}`
}
else if (recentScore <= 9 && recentScore >= 6) {
    finalScoreText.innerText = `Bravo! 🥳 Your score: ${recentScore}`
}
else if (recentScore <= 5 && recentScore >= 3) {
    finalScoreText.innerText = `Keep going! 💪 Your score: ${recentScore}`
}
else {
    finalScoreText.innerText = `Never give up and keep trying! 🙏 Your score: ${recentScore}`
}
