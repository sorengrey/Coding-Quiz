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
  "A very useful tool during development and debugging for printing content to the debugger is:",
];

// answers
var buttonAnswers = [
  ["strings", "booleans", "alerts", "numbers"],
  ["quotes", "parenthesis", "curly brackets", "square brackets"],
  ["numbers and strings", "arrays", "booleans", "all of the above"],
  ["commas", "curly brackets", "quotes", "parenthesis"],
  ["JavaScript", "terminal/bash", "for loops", "console log"],
];

// correct answers
var correctAnswers = [
  "alerts",
  "parenthesis",
  "all of the above",
  "quotes",
  "console log",
];

// starts the timer at 75
function setTimer() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    time.innerHTML = "Time: " + secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      alert(`Time's up!`);
      location.href = "./Assets/highscores.html";
    }
  }, 1000);
}

// saves the highscores to local storage
function saveHighscore(userScore) {
  var ins = document.getElementById("inits").value.trim();
  if (ins !== "") {
    var hScores = JSON.parse(window.localStorage.getItem("hScores") || []);

    var newScore = {
      score: userScore,
      ins: ins,
    };
    hScores.push(newScore);
    window.localStorage.setItem("hScores", JSON.stringify(hScores));
    window.location.href = "./Assets/highscores.html";
  }
}

function startQuestions(q_num, userScore) {
  var ques = document.getElementById("questions");
  var btn1 = document.getElementById("btn1");
  var btn2 = document.getElementById("btn2");
  var btn3 = document.getElementById("btn3");
  var btn4 = document.getElementById("btn4");

  if (q_num === 5) {
    localStorage.setItem("userScore",userScore);
    // testTimer
    // saveHighscore(userScore)
    endQuiz();
  } else {
    // sets inner html of the buttons to the question based on index
    btn1.innerHTML = buttonAnswers[q_num][0];
    btn2.innerHTML = buttonAnswers[q_num][1];
    btn3.innerHTML = buttonAnswers[q_num][2];
    btn4.innerHTML = buttonAnswers[q_num][3];
    ques.innerHTML = questionArray[q_num];
  }

  // these add to the userScore if correct
  btn1.onclick = function () {
    var correct = checkAnswer(q_num, btn1.innerHTML);
    userScore = userScore + correct;
    document.getElementById("mydiv").style.display = "block";
    fadeOut(document.getElementById("mydiv"));
    startQuestions(q_num + 1, userScore);
  };

  btn2.onclick = function () {
    var correct = checkAnswer(q_num, btn2.innerHTML);
    userScore = userScore + correct;
    document.getElementById("mydiv").style.display = "block";
    fadeOut(document.getElementById("mydiv"));
    startQuestions(q_num + 1, userScore);
  };

  btn3.onclick = function () {
    var correct = checkAnswer(q_num, btn3.innerHTML);
    userScore = userScore + correct;
    document.getElementById("mydiv").style.display = "block";
    fadeOut(document.getElementById("mydiv"));
    startQuestions(q_num + 1, userScore);
  };

  btn4.onclick = function () {
    var correct = checkAnswer(q_num, btn4.innerHTML);
    userScore = userScore + correct;
    document.getElementById("mydiv").style.display = "block";
    fadeOut(document.getElementById("mydiv"));
    startQuestions(q_num + 1, userScore);
  };

  // takes the user's guess and checks to see if it's correct, returning 1 for correct, 0 for incorrect
  function checkAnswer(q_num, guess) {
    if (guess === correctAnswers[q_num]) {
      document.getElementById("mydiv").innerHTML = "Right";
      return 1;
    } else {
      secondsLeft = secondsLeft - 10;
      document.getElementById("mydiv").innerHTML = "Wrong";
      return 0;
    }
  }

  // ends the quiz and loads the highscores page
  function endQuiz() {
    window.location.href = "./Assets/highscores.html";
  }
}

// submit button function
submitButton.addEventListener("click", function () {
  var hScores = JSON.parse(window.localStorage.getItem("hScores")) || [];
  var ins = document.getElementById("inits").value.trim();
  var newScore = {
    userScore: localStorage.getItem("userScore"),
    ins: ins,
  };
  hScores.push(newScore);
  window.localStorage.setItem("hScores", JSON.stringify(hScores));

  var printScores = JSON.parse(window.localStorage.getItem("hScores")) || [];
  printScores.forEach(function (score) {
    // create li tag for each high score
    var aScore = document.createElement("li");
    aScore.textContent = score.ins + " - " + score.userScore;

    // display on page
    var order = document.getElementById("namelist");
    order.appendChild(aScore);
  });
  //hides and displays buttons and elements
  document.getElementById("twobuttons").style.display = "block";
  document.getElementById("submit-form").style.display = "none";
  document.getElementById("highscore-title").style.display = "block";
  document.getElementById("done").style.display = "none";
});

// clear button function
clearButton.addEventListener("click", function () {
  document.getElementById("namelist").innerHTML = "";
  window.localStorage.removeItem("hScores")
});

// makes right and wrong text under buttons disappear
function fadeOut(x) {
  setTimeout(function () {
      x.style.display = "none";
  }, 1000);
};
