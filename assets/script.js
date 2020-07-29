//questions/answers array set
var questions = [
    {
        question: "When I was a young (_____)",
        answers: ["girl", "kitty", "man", "boy"],
        correctAnswer: "boy"
    },
    {
        question: "My father took me into (_________)",
        answers: ["the ocean", "the city", "the summer", "the fire"],
        correctAnswer: "the city"
    }, {
        question: "To see a marching (_____)",
        answers: ["band", "army", "dog", "hand"],
        correctAnswer: "band"
    }, {
        question: "He said, \'Son when you (_____)",
        answers: ["throw up", "glow up", "grow up", "die"],
        correctAnswer: "grow up"
    },
    {
        question: "Would you be the savior of the (________), the beaten and the damned?'",
        answers: ["token", "broken", "killjoys", "kitties"],
        correctAnswer: "broken"
    }
    , {
        question: "He said 'Will you (_____)",
        answers: ["beat them", "eat them", "treat them", "defeat them"],
        correctAnswer: "defeat them"
    }, {
        question: "Your demons, and all the (_____), the plans that they have made",
        answers: ["non-believers", "emo kids", "angels", "fans"],
        correctAnswer: "non-believers"
    }, {
        question: "Because one day, I'll leave you a phantom, to lead you in the (_____)",
        answers: ["winter", "summer", "spring", "fall"],
        correctAnswer: "summer"
    }, {
        question: "to join the (_____)",
        answers: ["white walkers", "killjoys", "army", "Black Parade"],
        correctAnswer: "Black Parade"
    }
]

// variables created for buttons, score, timer
var startButton = document.getElementById("start-btn");
var retryButton = document.getElementById("retry-btn");
var startRow = document.getElementById("starting");
var questionContainerElement = document.getElementById("question-container");
var scoreTimer = document.getElementById("score-timer-container")
var questionElement = document.getElementById("question");
var answerDiv = document.getElementById("answer-buttons");
var finalScores = document.getElementById("final-scores")
var questionIndex = 0;
var score = 0;
var sec = 60;
var intervalId;

//function to get questions to appear/end game
function showQuestion() {
    if (questionIndex < questions.length) {
        var currentQuestion = questions[questionIndex];
        answerDiv.innerHTML = ""
        questionElement.innerText = currentQuestion.question
        console.log(currentQuestion.question)
        currentQuestion.answers.forEach(function (answer) {
            var button = document.createElement("button");
            button.innerText = answer;
            button.classList.add("btn");
            button.setAttribute("value", answer);
            button.addEventListener("click", selectAnswer);
            answerDiv.appendChild(button);

        });
    } else {
        endGame();
    };

};

//when game is done, show the score & link to video
function endGame() {
    if (score < 4) {
        alert("Wow... You got " + score + " out of 9! I would recommend listening before attempting again!")
    }
    if (score >= 4 && score <= 6) {
        alert("OK...You got " + score + " out of 9! Maybe you should listen to the song before giving this another go!")
    }
    if (score >= 7 && score < 9) {
        alert("Not too shabby! You got " + score + " out of 9! Enjoy the song!")
    }
    if (score === 9) {
        alert("KILLJOYS! Make some noise!! Perfect score! 9/9!! Go sing your heart out!")
    }
    questionContainerElement.classList.add("hide");
    scoreTimer.classList.add("hide");
    finalScores.classList.remove("hide");
    retryButton.classList.remove("hide");
    stop();
};
//function on what to do when the user makes their choice
function selectAnswer() {
    console.log(this.value)
    if (this.value === questions[questionIndex].correctAnswer) {
        score++;
        console.log(score);
        questionIndex++;
        alert("Correct! Are you an emo kid or what?!")
        showQuestion()
    } else {
        questionIndex++;
        sec -= 5;
        alert("Incorrect. Come on friend, this is an anthem. Do you need to apply to Emo University?")
        showQuestion()
    };
};
//start quiz function
function startQuiz() {
    console.log("started");
    startButton.classList.add("hide");
    startRow.classList.add("hide");
    questionContainerElement.classList.remove("hide");
    start();
    myTimer();
    showQuestion();
};
    //timer inserted 
    function myTimer() {
        document.getElementById('timer').innerHTML = sec + "sec left";
        sec--;
        if (sec <= 0) {
            stop();
            alert("Time is up. How does one not know this song?!");
        }
    };
    function start() {
        clearInterval(intervalId)
        intervalId = setInterval(myTimer, 1000);
    };
    function stop() {
        clearInterval(intervalId)
    };

// start & next button set up
$("#start-btn").on("click", function () {
    console.log("my button works")
    startQuiz();

    nextButton.addEventListener("click", () => {
        currentQuestionIndex++;
        setNextQuestion()
    });
});
