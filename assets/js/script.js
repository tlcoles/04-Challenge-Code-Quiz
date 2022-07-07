//* Create global variables
const startBtn = document.getElementById("start-button");
const startSection = document.getElementById("start-section");
var quizTimer;
var i=0;

// ! Hold on to these variables for later use
/*
var isTrue;
var isFalse;
*/

//* Create array of questions, choices, and correct answers //! not index number
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
    remainingTime.innerHTML = "<h2>Seconds remaining" +quizTimer +"</h2>"
    document.getElementById("qa-section").appendChild(remainingTime);
}

//* On button click, start the quiz
startBtn.onclick = function() {
    runQuiz();
}

//! Start a timer and run a loop with the quiz questions
function runQuiz() {    
    console.log("The button is clicked!");
    // Remove start section and replace with section for question
    document.getElementById("start-section").classList.add("hide");
    createQASpace();

    // Ask the question
    askQuestion(0); //! I think this is a problem because it is just the first question

    // Start the timer
    runTimer();
}

//* Start the timer at 60 seconds and show remaining time on screen
function runTimer() {
    var quizTimer = 60;
    showTimer();
    var quizTimerEnd = 0;
    console.log("The timer is now running!");
    var countDown = setInterval(function() {
        quizTimer--
        if (quizTimer === 0) {
            console.log("Time's up!");
            clearInterval(countDown);
            endQuiz();
        } else {
            document.getElementById("time-remaining").innerHTML = "<h2>Seconds remaining: " + quizTimer + "</h2>"
        }
    }, 1000);
}


//! Create the display area for the right/wrong result statement <<---- haven't yet tested this
function createRightWrongSpace() {
    var isRightWrongDiv = document.createElement("div")
    isRightWrongDiv.setAttribute("id", "right-wrong")
    isRightWrongDiv.classList.add("right-wrong")
    document.getElementById("qa-section").appendChild(isRightWrongDiv);
}

// ! Draw questions and answers from the array, display answers as buttons with corresponding id numbers
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
                //create buttons, make ids equal to index+1, and create onclick
                += (`<li id="${j + 1}" onclick="recordID(this.id);"><button class="btn btn-primary btn-lg btn-grid">` //! note formatting
                + choice 
                + `</button></li>`);
        }
}

// ! On click, record the id of the selected choice and check against answer
function recordID(id) {
    var answerID = id;
    console.log(answerID);
    isCorrect()
    return answerID;

        function isCorrect() {
            // the purpose of the function is to evaluate whether the input is the same as the answer 
            console.log(answerID, "inside isCorrect function");
            var userScore = 0;
                if ( answerID == questions[i].answer ) {
                console.log("Hurrah! Right choice!")
                userScore =+ 10
                console.log(userScore)
                }
                else {
                console.log("Bummer! Better luck with the next one!")
                userScore =- 10
                console.log(userScore)
                }
                return userScore
        }
}

//! Create function to tally score

//* End the quiz, create a space for and show results

function endQuiz() {
    document.getElementById("qa-section").classList.add("hide")
    document.getElementById("final-results-section").classList.remove("hide")
    document.getElementById("times-up").innerHTML = "<h2>Time's up!</h2><br><p>Let's review your results.</p>"
        return console.log("This game is over!");
    //showScore and registerUser
}