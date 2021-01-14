
// timer
var time = document.getElementById("timer");

// submit button
var submitButton = document.getElementById("submit-button");

// clear highscores button
var clearButton = document.querySelector("#clearbutton");

// time set to 75 seconds
var secondsLeft = 75;

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

// answers
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

// correct answers
var correctAnswers = [
  "alerts",
  "parenthesis",
  "all of the above",
  "quotes",
  "console log"
]

// starts the timer at 75
function setTimer() {
  var timerInterval = setInterval(function() {
  secondsLeft--;
  time.innerHTML = "Time: " + secondsLeft;
  if(secondsLeft === 0){
    clearInterval(timerInterval);
    alert(`Time's up!`);
    location.href = '/Assets/highscores.html';}
}, 1000);
}

function saveHighscore(userScore) {
  var ins = document.getElementById('inits').value.trim();
  if(ins !== ''){
    var hScores = JSON.parse(window.localStorage.getItem('hScores') || [] )

    var newScore = {
      score: userScore,
      ins: ins
    }
    hScores.push(newScore);
    window.localStorage.setItem('hScores', JSON.stringify(hScores))
    window.location.href  = 'Assets/highscores.html';
  }

}

function startQuestions(q_num, userScore){
  var ques = document.getElementById("questions");
  var btn1 = document.getElementById('btn1');
  var btn2 = document.getElementById('btn2');
  var btn3 = document.getElementById('btn3');
  var btn4 = document.getElementById('btn4');
  if(q_num === 5){
    console.log(userScore);
  //  saveHighscore(userScore)
    endQuiz(userScore)
  }  
  else {
     //sets inner html of the buttons to the question based on index
    btn1.innerHTML = buttonAnswers[q_num][0];
    btn2.innerHTML = buttonAnswers[q_num][1];
    btn3.innerHTML = buttonAnswers[q_num][2];
    btn4.innerHTML = buttonAnswers[q_num][3];
    ques.innerHTML = questionArray[q_num];
  }
    
  //adds to the userScore if correct
  btn1.onclick = function(){
    var correct = checkAnswer(q_num, btn1.innerHTML);
    userScore = userScore + correct;
    startQuestions(q_num + 1, userScore);
}

  btn2.onclick = function(){
    var correct = checkAnswer(q_num, btn2.innerHTML);
    userScore = userScore + correct;
    startQuestions(q_num + 1, userScore);
  }

  btn3.onclick = function(){
    var correct = checkAnswer(q_num, btn3.innerHTML);
    userScore = userScore + correct;
    startQuestions(q_num + 1, userScore);
  }

  btn4.onclick = function(){
    var correct = checkAnswer(q_num, btn4.innerHTML);
    userScore = userScore + correct;
    startQuestions(q_num + 1, userScore);
  }

  // takes the user's guess and checks to see if it's correct, returning 1 for correct, 0 for incorrect
  function checkAnswer(q_num, guess) {
    if(guess === correctAnswers[q_num]){
      return 1;
    }
    else {
      secondsLeft = secondsLeft - 10;
      return 0;
    }
  }

  // not working properly -- errors -- userScore disappears after moving to highscore page
  function endQuiz(userScore){
    window.location.href  = 'Assets/highscores.html';
    window.addEventListener('DOMContentLoaded', function(){
      document.querySelector("#userScore").innerHTML = userScore;
      console.log("final userScore " + userScore);
      var ins = document.getElementById('inits').value.trim();
      console.log(ins);
      if(ins !== ''){
         var hScores = JSON.parse(window.localStorage.getItem('hScores') || [] )

         var newScore = {
         score: userScore,
         ins: ins
        }
        hScores.push(newScore);
        window.localStorage.setItem('hScores', JSON.stringify(hScores))
        window.location.href  = 'Assets/highscores.html';
       }
    })
  }
}

// submit button function
 submitButton.addEventListener("click", function(){
   var list = document.getElementById('namelist');
   var initials = document.getElementById('inits').value + " " + userScore;
   var entry = document.createElement('li');
   entry.appendChild(document.createTextNode(initials));
   list.appendChild(entry);
   document.getElementById('twobuttons').style.display = 'block';
   document.getElementById('submit-form').style.display = 'none';
   document.getElementById('highscore-title').style.display = 'block';
   document.getElementById('done').style.display = 'none';
   //document.getElementById('final-score').style.display = 'none';
 }); 

// clear button function
clearButton.addEventListener("click", function(){
 document.getElementById('namelist').innerHTML = '';
});


/*  This needs --
* for the userScore to stop disappearing when we load the highscore page
* 'correct' or 'incorrect' text that is printed under the quiz answers */