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
        timer.innerText = "Time's up, sorry!π’";
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
        question: 'What is the capital city of Australia π¦πΊ?',
        choice1: 'Sydney',
        choice2: 'Melbourne',
        choice3: 'Canberra',
        choice4: 'Adelaide',
        answer: 3
    },
    {
        question: 'Which two U.S. πΊπΈ state do not observe Daylight Saving Time?',
        choice1: 'California and Nevada',
        choice2: 'Arizona and Hawaii',
        choice3: 'Alaska and Florida',
        choice4: 'Louisiana and Texas ',
        answer: 2
    },
    {
        question: 'Who created JavaScript π¨βπ»?',
        choice1: 'John Resig',
        choice2: 'Guido van Rossum',
        choice3: 'James Gosling',
        choice4: 'Brendan Eich',
        answer: 4
    },
    {
        question: 'What is the third sign of the zodiac?',
        choice1: 'Aries β',
        choice2: 'Leo β',
        choice3: 'Cancer β',
        choice4: 'Gemini β',
        answer: 4
    },
    {
        question: 'How many hearts does an octopus π have?',
        choice1: '1 β€οΈ',
        choice2: '2 β€οΈβ€οΈ',
        choice3: '3 β€οΈβ€οΈβ€οΈ',
        choice4: '4 β€οΈβ€οΈβ€οΈβ€οΈ',
        answer: 3
    },
    {
        question: 'What planet πͺ has the most gravity?',
        choice1: 'Jupiter',
        choice2: 'Earth π',
        choice3: 'Sun π',
        choice4: 'Mars',
        answer: 1
    },
    {
        question: 'What company owns Lamborghini, Audi, and Porsche π?',
        choice1: 'Audi',
        choice2: 'Mercedes-Benz',
        choice3: 'Volkswagen',
        choice4: 'Ferrari',
        answer: 3
    },
    {
        question: 'What country has four official languages (German, French, Italian, and Romansh)?',
        choice1: 'Canada π¨π¦',
        choice2: 'Switzerland π¨π­',
        choice3: 'Belgium π§πͺ',
        choice4: 'Luxembourg π±πΊ',
        answer: 2
    },
    {
        question: 'What are the three primary colours?',
        choice1: 'red π₯, green π©, blue π¦ ',
        choice2: 'red π₯, black β¬, white β¬',
        choice3: 'green π©, orange π§, purple πͺ',
        choice4: 'red π₯, yellow π¨, blue π¦',
        answer: 4
    },
    {
        question: 'Which of the following French islands π«π· is close to Newfoundland and Labrador?',
        choice1: 'Martinique',
        choice2: 'French Polynesia',
        choice3: 'Saint Pierre and Miquelon',
        choice4: 'Saint BarthΓ©lemy',
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
            scoreText.innerText = `Your Score: ${score} π`
        }
        e.target.parentElement.classList.add(addNewClass);
        setTimeout(function () {
            e.target.parentElement.classList.remove(addNewClass);
            getNewQ()
        }, 1000)
    });
});

startQuiz();



