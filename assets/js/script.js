//* Create global variables
const startBtn = document.getElementById("start-button");
const startSection = document.getElementById("start-section");
var i=0; // use this to iterate between questions
var quizTimer = 60; // set the start of the timer in seconds


//* Create array of questions, choices, and correct answers 
//! Use natural numbers not index numbers
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
    answer: 3
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
    answer: 2
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
    answer: 2
    },
    {
    question: "There are THREE ways to insert a style sheet: external CSS, internal CSS, and inline CSS.",
    choices: 
        [
        "True",
        "False",
        ],
    answer: 1
    },
    {
    question: "Using document.querySelector( \"demo \").innerHTML =  \"Hello, JavaScript! \" will find an element with id=demo and change its content to say Hello, JavaScript!",
    choices: 
        [
        "True", 
        "False",
        ],
    answer: 2
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
    answer: 2
    }
];

//* Create the display area for questions and answers
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

//* Create the display area for the timer
function showTimer() {
    var remainingTime = document.createElement("div")
    remainingTime.setAttribute("id", "time-remaining")
    document.getElementById("qa-section").appendChild(remainingTime);
}

//* On button click, start the quiz
startBtn.onclick = function() {
    runQuiz();
}

//* Start a timer and run a loop with the quiz questions
function runQuiz() {    
    console.log("The button is clicked!");
    // Remove start section and replace with section for question
    document.getElementById("start-section").classList.add("hide");
    createQASpace();

    // Ask the first question
    askQuestion(0); 

    // Start the timer
    runTimer();
}

//* Start the timer at 60 seconds and show remaining time on screen
function runTimer() {
    showTimer();
    console.log("The timer is now running!");
    var countDown = setInterval(function() {
        if (quizTimer <= 0) {
            console.log("Time's up!");
            clearInterval(countDown);
            endQuiz();
        } else {
            document.getElementById("time-remaining").innerHTML = "<h2>Seconds remaining: " + quizTimer + "</h2>"
        }
        quizTimer--
    }, 1000);
}

// * Draw questions and answers from the array, display answers as buttons with corresponding id numbers
function askQuestion() {
    // Ask question from array
        var question = questions[i].question;
        var d = document.getElementById("question") 
        d.innerHTML = question
        var li = document.getElementById("answers");

    // Clear previous answers before loop repeats
        li.innerHTML = "";     

    // Loop through possible answers from array and create buttons    
        for (var j=0; j < questions[i].choices.length; j++) { 
            var choice = questions[i].choices[j];
            li.innerHTML
            //create buttons, make ids equal to index+1, and create onclick
            += (`<li id="${j + 1}" onclick="isCorrect(this.id);"><button class="btn btn-primary btn-lg btn-grid">` //! note formatting
            + choice 
            + `</button></li>`);
    }
}

//* On click, record the id of the selected choice and check against answer
// Function is called in the HTML with onclick
function isCorrect(id) {
   
    if ( id == questions[i].answer ) {
    alert("Hurrah! Right choice!") // Use an alert to freeze timer proceeding to next question
    }
    else {
    alert("Bummer! Better luck with the next one!")
    quizTimer = quizTimer - 10; // Deduct from the timer with every incorrect answer
    }

//* Within isCorrect, progress to the next question but make sure there are questions remaining. If not, endQuiz
    i++
    if (i < questions.length) {
        askQuestion()
        }
        else {
            endQuiz()
        }
}

//* End the quiz, create a space for and show score
function endQuiz() {
    document.getElementById("qa-section").classList.add("hide")
    document.getElementById("final-results-section").classList.remove("hide")
    document.getElementById("times-up").innerHTML = "<h2>Game over!</h2><br><p>Your score is: " + quizTimer + " .</p>"
}

// TODO Have user enter their name and save their score
//! Uncalled function! Create the display area for the right/wrong result statement
function createRightWrongSpace() {
    var isRightWrongDiv = document.createElement("div")
    isRightWrongDiv.setAttribute("id", "right-wrong")
    isRightWrongDiv.classList.add("right-wrong")
    document.getElementById("qa-section").appendChild(isRightWrongDiv);
}