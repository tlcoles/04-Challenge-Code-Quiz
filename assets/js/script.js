
const startBtn = document.getElementById("start-button");
const startSection = document.getElementById("start-section");
var quizTimer;
var a;
var b;
var c;
var d;
var isTrue;
var isFalse;
var i=0;

//! Create array of questions, choices, and correct answers
var questions = 
[
    {
    question: "Which of these is an incorrect terminal command?",
    choices: 
        [
        "ls", 
        "cd", 
        "dir", 
        "pwd"        
        ],
    answer: 2
    },
    {
    question: "To fetch changes from a Github repo to merge with your local directory, use...",
    choices: 
        [
        "git commit", 
        "git pull",
        "git push", 
        "git add", 
        ],
    answer: 1
    },
    {
    question: "Which is invalid CSS?",
    choices: 
        [
        "&lt;div class= definition&gt;&lt;/div&gt;", 
        "&lt;div class= definition high&gt;&lt;/div&gt;",
        "&lt;div class= \"definition\"&gt;&lt;/div&gt;", 
        "&lt;div class= \"definition high\"&gt;&lt;/div&gt;", 
        ],
    answer: 1
    },
    {
    question: "There are THREE ways to insert a style sheet: external CSS, internal CSS, and inline CSS.",
    choices: 
        [
        "True",
        "False",
        ],
    answer: 0
    },
    {
    question: "Using document.querySelector( \"demo \").innerHTML =  \"Hello, JavaScript! \" will find an element with id=demo and change its content to say Hello, JavaScript!",
    choices: 
        [
        "True", 
        "False",
        ],
    answer: 1
    },
    {
    question: "Select the correct Bootstrap class to set your element's background color to white.",
    choices: 
        [
        ".background-white", 
        ".bg-white",
        ".color-white",
        ".bg-primary",
        ],
    answer: 1
    }
];

//! Start a timer and run a loop with the quiz questions
function runQuiz() {    
    console.log("The button is clicked!");
    document.getElementById("start-section").classList.add("hide")
    // Create container for question
    createQASpace();
    askQuestion(0);
    var quizTimer = 3;
    // ! show timer countdown in seconds
    var quizTimerEnd = 0;
    var countDown = setInterval(function() {
        quizTimer--
        console.log("Time remaining: " + quizTimer);
        if (quizTimer === 0) {
            console.log("Time's up!");
            clearInterval(countDown);
            endQuiz();
        } else {
            console.log("This timer is still running!")
        }
    }, 60000);
}

function createQASpace() {
    document.getElementById("qa-section").classList.remove("hide")
    var qaDiv = document.getElementById("qa-section");
    var questionDiv = document.createElement("div");
    questionDiv.setAttribute("id", "question")
    qaDiv.appendChild(questionDiv);
    var answerOL = document.createElement("ol")
    qaDiv.appendChild(answerOL);
    answerOL.setAttribute("id", "answers")
    var answerElement = document.getElementById("answers")
    return
}

function createRightWrongSpace () {
    var isRightWrongDiv = document.createElement("div")
    isRightWrongDiv.setAttribute("id", "right-wrong")
    isRightWrongDiv.classList.add("right-wrong")
    answerOL.after(isRightWrongDiv) 
}

// ! Create and display a question drawing from the array of questions and answers
function askQuestion() {
    // Ask question with answers
            var question = questions[i].question;
            var d = document.getElementById("question") 
            d.innerHTML += question
            console.log("You made it to questions!");
            for (var j=0; j < questions[i].choices.length; j++) { 
                var choice = questions[i].choices[j];
                var li = document.getElementById("answers")
                li.innerHTML
                += ("<li><button class=\"btn btn-primary btn-lg\">" 
                + choice 
                + "</button></li>");
        }   console.log("You made it to answers!");
        // increment i and proceed to next question
        i++
}
 
function isCorrect() {
    console.log("Correct answer!")
    userScore += 10
    return userScore
}

function isNotCorrect() {
    console.log("Wrong answer! Move on!")
}

function endQuiz() {
    document.getElementById("qa-section").classList.add("hide")
    return console.log("This game is over!");
    //showScore and registerUser
}

// When button is clicked, runQuiz
startBtn.onclick = function() {
    runQuiz();
}