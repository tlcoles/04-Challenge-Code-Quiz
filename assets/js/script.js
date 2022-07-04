// Create global variables
const startBtn = document.getElementById("start-button");
const startSection = document.getElementById("start-section");
var quizTimer;
var i=0;

// ! Hold on to these variables for later use
/*
var isTrue;
var isFalse;
*/

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

//! On button click, start the quiz
startBtn.onclick = function() {
    runQuiz();
}

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
    console.log("The timer is now running!");
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

//! Create the display area for questions and answers
function createQASpace() {
    document.getElementById("qa-section").classList.remove("hide")
    var qaDiv = document.getElementById("qa-section");
    qaDiv.classList.add("text-center");
    var questionDiv = document.createElement("div");
    questionDiv.setAttribute("id", "question")
    qaDiv.appendChild(questionDiv);
    var answerOL = document.createElement("ol")
    qaDiv.appendChild(answerOL);
    answerOL.setAttribute("id", "answers")
    var answerElement = document.getElementById("answers")
    return
}

//! Create the display area for the right/wrong result statement
function createRightWrongSpace () {
    var isRightWrongDiv = document.createElement("div")
    isRightWrongDiv.setAttribute("id", "right-wrong")
    isRightWrongDiv.classList.add("right-wrong")
    answerOL.after(isRightWrongDiv) 
}

// ! Draw questions and answers from the array
function askQuestion() {
    // Ask question from array
            var question = questions[i].question;
            var d = document.getElementById("question") 
            d.innerHTML = question
            var li = document.getElementById("answers");
            li.innerHTML = ""; //clear previous answers before loop
    // Show possible answers from array in created buttons    
            for (var j=0; j < questions[i].choices.length; j++) { 
                var choice = questions[i].choices[j];
                li.innerHTML
                += ("<li><button class=\"btn btn-primary btn-lg btn-grid\">" 
                + choice 
                + "</button></li>");
        } 
    
     // Increment i and proceed to next question
        return i++
}

// ! End the quiz and show the results

function endQuiz() {
    document.getElementById("qa-section").classList.add("hide")
    return console.log("This game is over!");
    //showScore and registerUser
}



// ! Hold these functions for later development
function isCorrect() {
    console.log("Correct answer!")
    userScore += 10
    return userScore
}

function isNotCorrect() {
    console.log("Wrong answer! Move on!")
}