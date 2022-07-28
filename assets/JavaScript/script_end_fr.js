const recentScore = localStorage.getItem('recentScore');
const finalScoreText = document.querySelector('.final-score-text');

if (recentScore == 10) {
    finalScoreText.innerText = `Exceptionnel! 🎉😍💯 Votre score : ${recentScore}`
}
else if (recentScore <= 9 && recentScore >= 6) {
    finalScoreText.innerText = `Bravo! 🥳 Votre score : ${recentScore}`
}
else if (recentScore <= 5 && recentScore >= 3) {
    finalScoreText.innerText = `Allez, continue! 💪 Votre score : ${recentScore}`
}
else {
    finalScoreText.innerText = `N'abandonnez jamais et essayez! 🙏 Votre score : ${recentScore}`
}
