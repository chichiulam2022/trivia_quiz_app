const question = document.querySelector('.question');
const choice = Array.from(document.querySelectorAll('.choice-text'));
const timer = document.querySelector('.timer');
const qCounterText = document.querySelector('.total-questions-counter');
const scoreText = document.getElementById('score');


let currentQs = {};
let availableQs = [];
let timeSecond = 61;
let interval = 0;
let score = 0;

let countDown = function () {
    if (timeSecond === 0) {
        timer.classList.remove('hurryup');
        timer.innerText = "Time's up, sorry!😢";
        clearInterval(interval);
        setTimeout(function () {
            return window.location.assign('end_en.html')
        }, 2500);
    } else {
        timeSecond--;
        timer.innerText = `You have ${timeSecond} seconds to finish`;
    }
    if (timeSecond <= 10 && timeSecond >= 1) {
        timer.classList.add('hurryup');
        timer.innerText = `HURRY UP! ${timeSecond} seconds left!`;
    }
};

let allQs = [
    {
        question: 'What is the capital city of Australia?',
        choice1: 'Sydney',
        choice2: 'Melbourne',
        choice3: 'Canberra',
        choice4: 'Adelaide',
        answer: 3
    },
    {
        question: 'Which two U.S. state do not observe Daylight Saving Time?',
        choice1: 'California and Nevada',
        choice2: 'Arizona and Hawaii',
        choice3: 'Alaska and Florida',
        choice4: 'Louisiana and Texas ',
        answer: 2
    },
    {
        question: 'Who created JavaScript?',
        choice1: 'John Resig',
        choice2: 'Guido van Rossum',
        choice3: 'James Gosling',
        choice4: 'Brendan Eich',
        answer: 4
    },
    {
        question: 'What is the third sign of the zodiac?',
        choice1: 'Aries',
        choice2: 'Leo',
        choice3: 'Cancer',
        choice4: 'Gemini',
        answer: 4
    },
    {
        question: 'How many hearts does an octopus have?',
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        answer: 3
    },
    {
        question: 'What planet has the most gravity?',
        choice1: 'Jupiter',
        choice2: 'Earth',
        choice3: 'Sun',
        choice4: 'Mars',
        answer: 1
    },
    {
        question: 'What company owns Lamborghini, Audi, and Porsche?',
        choice1: 'Audi',
        choice2: 'Mercedes-Benz',
        choice3: 'Volkswagen',
        choice4: 'Ferrari',
        answer: 3
    },
    {
        question: 'What country has four official languages (German, French, Italian, and Romansh)?',
        choice1: 'Canada',
        choice2: 'Switzerland',
        choice3: 'Belgium',
        choice4: 'Luxembourg',
        answer: 2
    },
    {
        question: 'What are the three primary colours?',
        choice1: 'red, green, blue',
        choice2: 'red, black, white',
        choice3: 'green, pink, purple',
        choice4: 'red, yellow, blue',
        answer: 4
    },
    {
        question: 'Which of the following French islands is close to Newfoundland and Labrador?',
        choice1: 'Martinique',
        choice2: 'French Polynesia',
        choice3: 'Saint Pierre and Miquelon',
        choice4: 'Saint Barthélemy',
        answer: 3
    }
];

const maxQ = 10;

function startQuiz() {
    qCounter = 0;
    score = 0;
    availableQs = [...allQs];
    getNewQ();
    interval = setInterval(countDown, 1000);
};

function getNewQ() {
    if (availableQs.length === 0 || qCounter >= maxQ) {
        localStorage.setItem('recentScore', score);
        return window.location.assign('end_en.html');
    }
    qCounter++;
    qCounterText.innerHTML = `Question: ${qCounter} / ${maxQ}`
    let index = 0;
    currentQs = availableQs[index];
    question.innerText = currentQs.question;
    choice.forEach(function (choice) {
        const number = choice.dataset['number'];
        choice.innerText = currentQs[`choice${number}`]
    })
    availableQs.splice(index, 1);
};

choice.forEach(function (choice) {
    choice.addEventListener('click', function (e) {
        const selectedAns = e.target.dataset['number'];
        let addNewClass = 'incorrect';
        if (selectedAns == currentQs.answer) {
            addNewClass = 'correct';
        } else {
            addNewClass = 'incorrect'
        }
        if (addNewClass === 'correct') {
            score += 1;
            scoreText.innerText = `Your Score: ${score} 👏`
        }
        e.target.parentElement.classList.add(addNewClass);
        setTimeout(function () {
            e.target.parentElement.classList.remove(addNewClass);
            getNewQ()
        }, 1000)
    });
});

startQuiz();



