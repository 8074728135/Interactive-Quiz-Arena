const questions = [

{
question:"Which language is used for web page structure?",
answers:[
{text:"HTML",correct:true},
{text:"CSS",correct:false},
{text:"Python",correct:false},
{text:"Java",correct:false}
]
},

{
question:"Which CSS property changes text color?",
answers:[
{text:"font-style",correct:false},
{text:"background",correct:false},
{text:"color",correct:true},
{text:"border",correct:false}
]
},

{
question:"Which keyword declares a variable in JavaScript?",
answers:[
{text:"int",correct:false},
{text:"var",correct:true},
{text:"define",correct:false},
{text:"data",correct:false}
]
},

{
question:"What does CSS stand for?",
answers:[
{text:"Creative Style Sheets",correct:false},
{text:"Computer Style Sheets",correct:false},
{text:"Cascading Style Sheets",correct:true},
{text:"Colorful Style Sheets",correct:false}
]
},

{
question:"Which company developed JavaScript?",
answers:[
{text:"Microsoft",correct:false},
{text:"Netscape",correct:true},
{text:"Google",correct:false},
{text:"IBM",correct:false}
]
}

];

const questionElement =
document.getElementById("question");

const answerButtons =
document.getElementById("answer-buttons");

const nextButton =
document.getElementById("next-btn");

const questionNumber =
document.getElementById("question-number");

let currentQuestionIndex = 0;
let score = 0;

startQuiz();

function startQuiz(){

currentQuestionIndex = 0;
score = 0;

nextButton.innerHTML = "Next Question";

showQuestion();
}

function showQuestion(){

resetState();

let currentQuestion =
questions[currentQuestionIndex];

questionNumber.innerHTML =
`Question ${currentQuestionIndex+1}
of ${questions.length}`;

questionElement.innerHTML =
currentQuestion.question;

currentQuestion.answers.forEach(answer=>{

const button =
document.createElement("button");

button.innerHTML = answer.text;

button.classList.add("btn");

answerButtons.appendChild(button);

if(answer.correct){
button.dataset.correct =
answer.correct;
}

button.addEventListener(
"click",
selectAnswer
);

});

}

function resetState(){

nextButton.style.display="none";

while(answerButtons.firstChild){
answerButtons.removeChild(
answerButtons.firstChild
);
}

}

function selectAnswer(e){

const selectedBtn = e.target;

const isCorrect =
selectedBtn.dataset.correct==="true";

if(isCorrect){
score++;
selectedBtn.classList.add(
"correct"
);
}
else{
selectedBtn.classList.add(
"wrong"
);
}

Array.from(answerButtons.children)
.forEach(button=>{

if(button.dataset.correct==="true"){
button.classList.add(
"correct"
);
}

button.disabled=true;

});

nextButton.style.display="block";
}

nextButton.addEventListener(
"click",
()=>{

currentQuestionIndex++;

if(currentQuestionIndex <
questions.length){

showQuestion();

}
else{

showScore();

}

}
);

function showScore(){

document.getElementById("quiz")
.classList.add("hide");

document.getElementById("result")
.classList.remove("hide");

document.getElementById("score")
.innerHTML =
`${score} / ${questions.length}`;
}

function restartQuiz(){

document.getElementById("quiz")
.classList.remove("hide");

document.getElementById("result")
.classList.add("hide");

startQuiz();
}