var startButton = document.querySelector('#start-button');
var timerInterval = document.querySelector(".time-left");
var highScore = document.querySelector("#score-block");
var mainEl = document.querySelector("main");
var head = document.getElementsByTagName("header");
var saveBttn = document.querySelector("#saveBttn");
var question = document.querySelector('#h1')
var choice1 = document.querySelector('#choice1')
var choice2 = document.querySelector('#choice2')
var choice3 = document.querySelector('#choice3')
var choice4 = document.querySelector('#choice4')


// variable for the questions and answers
var quizquestions = [
    {
        question: "Who wrote Javascript?",
        choices: ["Brendan Eich", "Elon Musk", "Guido Rossum", "Steve Jobs"],
        answer: "Guido Rossum"
    },
    {
        question: "Are the operators == and === the same?",
        choices: ["yes", "no", "maybe", "always"],
        answer: "false"
    },
    {
        question: "What is an array",
        choices: ["an arrow used in js", "multiple values stored in a single variable", "a single variable", "a type of integar"],
        answer: "multiple values stored in a single variable"
    },
    { question: "What is DOM",
        choices: ["document object model", "document one model", "champagne", "days on market"],
        answer: "document object model"
     }
];



// start button and timer
var secondsLeft = 60;
var questioncounter = 0;
startButton.addEventListener("click", function () {
    document.querySelector('#start-block').setAttribute("class", "hide");
    document.querySelector('#quiz-block').setAttribute("class", "");
    question.textContent = quizquestions[questioncounter].question
    choice1.textContent = quizquestions[questioncounter].choices[0]
    choice2.textContent = quizquestions[questioncounter].choices[1]
    choice3.textContent = quizquestions[questioncounter].choices[2]
    choice4.textContent = quizquestions[questioncounter].choices[3]
    var time = setInterval(function () {
        secondsLeft--;
        timerInterval.textContent = secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(time)
            timeOut()
        }
    }, 1000);
})

// next question 
function nextquestion() {
    question.textContent = quizquestions[questioncounter].question
    choice1.textContent = quizquestions[questioncounter].choices[0]
    choice2.textContent = quizquestions[questioncounter].choices[1]
    choice3.textContent = quizquestions[questioncounter].choices[2]
    choice4.textContent = quizquestions[questioncounter].choices[3]
}

// event listener for choices
choice1.addEventListener("click", function (e) {
    console.log(e.target.textContent)
    if (e.target.textContent == quizquestions[questioncounter].answer) { alert("Correct Answer!") }
    else { alert("incorrect answer") }
    questioncounter++
    nextquestion()
})
choice2.addEventListener("click", function (e) {
    console.log(e.target.textContent)
    if (e.target.textContent == quizquestions[questioncounter].answer) { alert("Correct Answer!") }
    else { alert("incorrect answer") }
    questioncounter++
    nextquestion()
})
choice3.addEventListener("click", function (e) {
    console.log(e.target.textContent)
    if (e.target.textContent == quizquestions[questioncounter].answer) { alert("Correct Answer!") }
    else { alert("incorrect answer") }
    questioncounter++
    nextquestion()
})
choice4.addEventListener("click", function (e) {
    console.log(e.target.textContent)
    if (e.target.textContent == quizquestions[questioncounter].answer) { alert("Correct Answer!") }
    else { alert("incorrect answer") }
    questioncounter++
    nextquestion()
})


// clears timer when out of time
// alerts user
function timeOut() {
    timerInterval.textContent = "---";
    // clearInterval(time);
   confirm("You ran out of time. Better luck next time.");
    if (confirm) {
        location.reload();
    };
};

// stores updated score list in localstorage
function storeEntries() {
    localStorage.setItem("entries", JSON.stringify(allscores));
}

// saves score/initial 
saveBttn.addEventListener("click", function (event) {
    event.preventDefault;
    var initialsInput = input.value.trim();
    var userScore = initialsInput + " " + score;
    if (initialsInput === "") {
        alert("Must input initials to save score.")
        return;
    }
    allscores.push(userScore);
    storeEntries();
    location.reload();
});

