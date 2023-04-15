var startButton = document.querySelector('#start-button');
var timerInterval = document.querySelector(".time-left");
var highScore = document.querySelector("#score-block");
var mainEl = document.querySelector("main");
var head = document.getElementsByTagName("header")

// variable for the questions and answers
var quizquestions = [
    "Who wrote Javascript?",
    "Are the operators == and === the same?",
    "What is an array"
];

var answers = [
    "Brendan Eich", "Elon Musk", "Guido Rossum", "Steve Jobs",
    "true", "false",
    "an arrow used in js", "multiple values storedin a single variable", "a single variable", "a type of integar"
];

// start button and timer
var secondsLeft = 60;
startButton.addEventListener("click", function () {
    document.querySelector('#start-block').setAttribute("class", "hide");
    document.querySelector('#quiz-block').setAttribute("class", "");
    var time = setInterval(function () {
        secondsLeft--;
        timerInterval.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(time)
        }
    }, 1000);
})

