const question = document.querySelector(".question");
const choice = Array.from(document.querySelectorAll('.choice-text'));
const timer = document.querySelector(".timer");
const qCounterText = document.querySelector(".total-questions-counter");
const scoreText = document.getElementById('score');

let currentQs = {};
let availableQs = [];
let timeSecond = 61;
let interval = 0;
let score = 0;

let countDown = function () {
    if (timeSecond === 0) {
        timer.classList.remove('hurryup');
        timer.innerText = "C'est l'heure, désolé!😢"
        clearInterval(interval);
        setTimeout(function () {
            return window.location.assign('end_fr.html')
        }, 2500);
    } else {
        timeSecond--;
        timer.innerText = `Vous avez ${timeSecond} seconds pour finir`;
    }
    if (timeSecond <= 10 && timeSecond >= 1) {
        timer.classList.add('hurryup');
        timer.innerText = `DÉPÊCHEZ-VOUS! ${timeSecond} seconds!`;
    }
};

let allQs = [
    {
        question: "Quelle est la capitale de l'Australie 🇦🇺?",
        choice1: 'Sydney',
        choice2: 'Melbourne',
        choice3: 'Canberra',
        choice4: 'Adélaïde',
        answer: 3
    },
    {
        question: "Quels sont les États américains 🇺🇸 qui n'observent pas l'heure d'été?",
        choice1: 'Californie et Nevada',
        choice2: 'Arizona et Hawaï',
        choice3: 'Alaska et Floride',
        choice4: 'Louisiane et Texas ',
        answer: 2
    },
    {
        question: "Qui a créé le langage JavaScript",
        choice1: 'John Resig',
        choice2: 'Guido van Rossum',
        choice3: 'James Gosling',
        choice4: 'Brendan Eich',
        answer: 4
    },
    {
        question: "Quel est le troisième signe du zodiaque 👨‍💻?",
        choice1: 'Bélier ♈',
        choice2: 'Lion ♌',
        choice3: 'Cancer ♋',
        choice4: 'Gémeaux ♊',
        answer: 4
    },
    {
        question: 'Combien la pieuvre 🐙 a-t-elle de cœurs?',
        choice1: '1',
        choice2: '2',
        choice3: '3',
        choice4: '4',
        answer: 3
    },
    {
        question: "Quelle planète 🪐 a le plus de gravité?",
        choice1: 'Jupiter',
        choice2: 'Terre 🌎',
        choice3: 'Soleil 🌞',
        choice4: 'Mars',
        answer: 1
    },
    {
        question: "Quelle société automobile possède Lamborghini, Audi et Porsche?",
        choice1: 'Audi',
        choice2: 'Mercedes-Benz',
        choice3: 'Volkswagen',
        choice4: 'Ferrari',
        answer: 3
    },
    {
        question: "Quel pays a quatre langues officielles? (l'allemand, le français, l'italien et le romanche)",
        choice1: 'Canada 🇨🇦',
        choice2: 'Suisse 🇨🇭',
        choice3: 'Belgique 🇧🇪',
        choice4: 'Luxembourg 🇱🇺',
        answer: 2
    },
    {
        question: "Quelles sont les trois couleurs primaires?",
        choice1: 'rouge, vert, bleu',
        choice2: 'rouge, noir, blanc',
        choice3: 'vert, rose, violet',
        choice4: 'rouge, jaune, bleu',
        answer: 4
    },
    {
        question: "Laquelle des îles françaises suivantes se trouve près de Terre-Neuve-et-Labrador?",
        choice1: 'Martinique',
        choice2: 'Polynésie française',
        choice3: 'Saint-Pierre-et-Miquelon',
        choice4: 'Saint-Barthélemy',
        answer: 3
    }
];

const maxQ = 10;
let qCounter = 0;

function startQuiz() {
    availableQs = [...allQs];
    getNewQ();
    interval = setInterval(countDown, 1000);
};

function getNewQ() {
    if (availableQs.length === 0 || qCounter >= maxQ) {
        localStorage.setItem('recentScore', score);
        return window.location.assign('end_fr.html');
    }
    qCounter++;
    qCounterText.innerHTML = `Question : ${qCounter} / ${maxQ}`
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
            scoreText.innerText = `Votre score : ${score} 👏`
        }
        e.target.parentElement.classList.add(addNewClass);
        setTimeout(function () {
            e.target.parentElement.classList.remove(addNewClass);
            getNewQ()
        }, 1000)
    });
});

startQuiz();



