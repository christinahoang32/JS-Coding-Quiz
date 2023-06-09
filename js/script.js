var startButton = document.querySelector('#start-button');
var timerInterval = document.querySelector(".time-left");
var highScore = document.querySelector("#score-block");
var saveBttn = document.querySelector("#saveBttn");
var question = document.querySelector('#h1')
var choice1 = document.querySelector('#choice1')
var choice2 = document.querySelector('#choice2')
var choice3 = document.querySelector('#choice3')
var choice4 = document.querySelector('#choice4')
var allscores = JSON.parse(localStorage.getItem("entries")) || [];
var score = 0;
var scoreListEl = document.getElementById("score-list");
var finalscore = document.querySelector(".finalscore")

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
        question: "What is an array?",
        choices: ["an arrow used in js", "multiple values stored in a single variable", "a single variable", "a type of integar"],
        answer: "multiple values stored in a single variable"
    },
    {
        question: "What is DOM?",
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
    if (e.target.textContent == quizquestions[questioncounter].answer) {
        alert("Correct Answer!")
        score += 1;
    }
    else { alert("incorrect answer") }
    questioncounter++
    if (questioncounter === 4) {
        quizEnd();
    } else {
        nextquestion()
    }
})
choice2.addEventListener("click", function (e) {
    console.log(e.target.textContent)
    if (e.target.textContent == quizquestions[questioncounter].answer) {
        alert("Correct Answer!")
        score += 1;
    }
    else { alert("incorrect answer") }
    questioncounter++
    if (questioncounter === 4) {
        quizEnd();
    } else {
        nextquestion()
    }
})
choice3.addEventListener("click", function (e) {
    console.log(e.target.textContent)
    if (e.target.textContent == quizquestions[questioncounter].answer) {
        alert("Correct Answer!")
        score += 1;
    }
    else { alert("incorrect answer") }
    questioncounter++
    if (questioncounter === 4) {
        quizEnd();
    } else {
        nextquestion()
    }
})
choice4.addEventListener("click", function (e) {
    console.log(e.target.textContent)
    if (e.target.textContent == quizquestions[questioncounter].answer) {
        alert("Correct Answer!")
        score += 1;
    }
    else{ 
        alert("incorrect answer") 
    }
    questioncounter++
    if (questioncounter === 4) {
        quizEnd();
    } else {
        nextquestion()
    }

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
    event.preventDefault();
    var initialsInput = document.querySelector("#initials");
    var initials = initialsInput.value.trim();
    console.log("end score", score);
    // finalscore.textContent = score;
    var userScore = {
        score: score,
        initials: initials,
    };
    if (initials === "") {
        alert("Must input initials to save score.")
        return;
    }
    allscores.push(userScore);
    storeEntries();
    location.reload();
});

// display score

// end the quiz
function quizEnd() {
    finalscore.textContent = score;
    console.log("Quiz IS OVER");
    highScore.classList.remove("hide");
}
