var startBtn = $("#start-button")
var question
var answer
var a
var b
var c
var d
var isTrue
var isFalse


function runQuiz() {
    console.log("The button is clicked!")
    var counter = 3
    var countDown = setInterval(function() {
        counter--
        console.log("Time remaining: " + counter);
        if (counter === 0) {
            console.log("Time's up!")
            clearInterval(countDown)
            endQuiz()
        }
    }, 60000)
        // TODO after click, 
    //! run loop equal to number of questions and then run endQuiz function
    // get length of questions and pass to loop  
    // insert loop here
    // display questions and answers and styles
    //! each time, check if user clicked the correct answer
    //! if correct, run function isCorrect
    //! if incorrect, run function isNotCorrect
    // endQuiz() when runTime equals zero
}

function isCorrect() {
    console.log("Correct answer!")
    userScore += 10
    return userScore
}

function isNotCorrect() {
    console.log("Wrong answer! Try again!")
}

function endQuiz() {
    return console.log("This game is over!");
    //showScore and registerUser
}

// When button is clicked, runQuiz
startBtn.on("click", function() {
    runQuiz()
})