// timer
var time = document.getElementById("timer");

// start button
var startButton = document.querySelector("#startbutton");

// time set to 75 seconds
var secondsLeft = 5;

// user score initially set to 0
var userScore = 0;

// questions container
var questions = document.getElementById("questions");

// questions
var questionArray = [
  "Commonly used data types DO NOT include:", 
  "The condition in an if/else statement is enclosed within ___:", 
  "Arrays in JavaScript can be used to store ___.", 
  "String values must be enclosed within ___ when being assigned to variables.", 
  "A very useful tool during development and debugging for printing content to the debugger is:"
];

var buttonAnswers = [
  [
    "strings",
    "booleans",
    "alerts",
    "numbers"
  ],
  [ "quotes",
    "parenthesis",
    "curly brackets",
    "square brackets",
],
  [ "numbers and strings",
    "arrays",
    "booleans",
    "all of the above"
],
  [ "commas",
    "curly brackets",
    "quotes",
    "parenthesis"
  ],
  [
    "JavaScript",
    "terminal/bash",
    "for loops",
    "console log"
  ]
];




// starts the timer at 75 and decrements by one every second, stopping at 0
function setTimer() {
  var timerInterval = setInterval(function() {
  secondsLeft--;
  time.innerHTML = "Time: " + secondsLeft;
  if(secondsLeft === 0){
    clearInterval(timerInterval);
    window.location.href = 'https://sorengrey.github.io/code-quiz/Assets/highscores.html';}
}, 1000);
}

/* use this logic later
function take10() {
  secondsLeft - 10;
}

// use this logic later
als1.addEventListener("click", function(){
    userScore++;
    console.log(userScore);
  }); */

// event listener and quiz start function, hides elements once quiz starts
startButton.addEventListener("click", function(){
    document.getElementById('quiz-title').style.display = 'none';
    document.getElementById('intro').style.display = 'none';
    document.getElementById('startbutton').style.display = 'none';
   // document.getElementById('question1').style.display = 'block';
    setTimer();
    // the loop
    for(i = 0; i < questionArray.length; i++){
      var answer = startQuestions(i);
}
});


/*

 //the questions and answers array
 var questionArray = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: {
      a: "strings",
      b: "booleans",
      c: "alerts",
      d: "numbers",
    },
    correctAnswer: "c"
  },
  {
    question: "The condition in an if/else statement is enclosed within ___.",
    answers: {
      a: "quotes",
      b: "parenthesis",
      c: "curly brackets",
      d: "square brackets",
    },
    correctAnswer: "c"
  },
  {
    question: "Arrays in JavaScript can be used to store ___.",
    answers: {
      a: "numbers and strings",
      b: "other arrays",
      c: "booleans",
      d: "all of the above",
  },
    correctAnswer: "d"
  },
  {
    question: "String values must be enclosed within ___ when being assigned to variables.",
    answers: {
      a: "commas",
      b: "curly brackets",
      c: "quotes",
      d: "parenthesis",
    },
    correctAnswer: "c"
  },
  {
    question: "A very useful tool during development and debugging for printing content to the debugger is:",
    answers: {
      a: "JavaScript",
      b: "terminal/bash",
      c: "for loops",
      d: "console log",
    },
    correctAnswer: "d"
  }
]


* a timer function that stops the quiz when it runs out
* a function that awards points for a correct answer (might need one for each question)
* a clear high scores button
* a submit textarea and button for user initials
* an event listener for when the user clicks the answers
* an event listener for when the user submits their initials
* 'correct' or 'incorrect' text that is printed under the quiz answers
* The questions and answers as buttons */