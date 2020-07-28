// variables created for buttons, score, timer
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var score = 0;
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

startButton.addEventListener("click", startQuiz)
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    setNextQuestion()
});

function startQuiz() {
    console.log("started");
    startButton.classList.add("hide");
    questionContainerElement.classList.remove("hide");
    showQuestion()
}

// function setNextQuestion() {
//     resetState ()
// }

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


// function resetState() {
//     nextButton.classList.add("hide");
//     while (answerDiv.firstChild) {answerDiv.removeChild(answerDiv.firstChild)};
// }

    function selectAnswer() {
        //this.value
        console.log(this.value)
        if (this.value === questions[questionIndex].correctAnswer) {
            score++;
            console.log(score);
            questionIndex++;
            alert("Correct! Are you an emo kid or what?!")
            showQuestion()
        } else {
            questionIndex++;
            alert("Incorrect. Do you need to apply to Emo University?")
            showQuestion()
        }
    
    
    }


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
        answers: ["white walkers", "killjoys", "army", "black parade"],
        correctAnswer: "Black Parade"
    }
]