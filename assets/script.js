// variables created for buttons, score, timer
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var score = 0;
var sec = 60;
var time = setInterval(myTimer, 1000);
//timer inserted 
function myTimer() {
    document.getElementById('timer').innerHTML = sec + "sec left";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("Time is up. How does one not know this song?!");
    }
}
// var timer = 90;
// var interval = setInterval(function(){
//   document.getElementById('timer').innerHTML=count;
//   count--;
//   if (timer === 0){
//     clearInterval(interval);
//     document.getElementById('score-timer-container').innerHTML='Done';
//     // or...
//     window.location.href = "./highscore.html";
//   }
// }, 1000);

var questionContainerElement = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerDiv = document.getElementById("answer-buttons");
var questionIndex = 0;


// start & next button set up
startButton.addEventListener("click", startQuiz)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion()
});

//start quiz function
function startQuiz() {
    console.log("started");
    startButton.classList.add("hide");
    questionContainerElement.classList.remove("hide");
    showQuestion()
}


//function to get question 
function showQuestion() {
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
    }

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
            alert("Incorrect. Come on friend, this is an anthem. Do you need to apply to Emo University?")
            showQuestion()
        }
    
    
    }

    //when game is done, show the score & link to video
    //if score is 0-3/9: "wow... i recommend listening before attempting again!""

    //if score 4-6/9 "ok...maybe you should listen to the song before giving this another go!""

    //if score 7-8/9 "not too shabby! enjoy the song!"

    //if 9/9 "killjoys! Make some noise!! perfect score! click play & sing your heart out"


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
        question: "Because one day, I'll leave you a phanton, to lead you in (_____)",
        answers: ["winter", "summer", "spring", "fall"],
        correctAnswer: "summer"
    }, {
        question: "to join the (_____)",
        answers: ["white walkers", "killjoys", "army", "Black Parade"],
        correctAnswer: "Black Parade"
    }
]