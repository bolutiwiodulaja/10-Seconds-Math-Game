var equation = document.getElementById('equation');
var playerInput = document.getElementById('answer');
var tally = document.getElementById('tally');
var submit = document.getElementById('submit');
var timerSpan = document.getElementById('timer');
var start = document.getElementById('start');
var restart = document.getElementById('restart');
var addition = document.getElementById('addition');
var multiplication = document.getElementById('multiplication');
var subtraction = document.getElementById('subtraction');
var division = document.getElementById('division');
var slider = document.getElementById('slider');
var sliderTally = document.getElementById('sliderTally');
var highScore = document.getElementById('highScore');

  var runMathGame = function() { 
  
  var answer;
  var seconds = 10;
  var score = 0;
  var currentHighScore = 0;

  var updateSliderInput = function() {
    sliderTally.innerHTML = slider.value;
  }
  slider.addEventListener('input', updateSliderInput);
  updateSliderInput();

  var equationGenerator = function () { 
    var arr = [];
    var randomNum1 = Math.floor(Math.random() * slider.value);
    var randomNum2 = Math.floor(Math.random() * slider.value);

    arr.push(randomNum1, randomNum2);
    var p = document.createElement("p");

    if(addition.checked === true) {
      answer = arr[0] + arr[1];
      var askEquation = randomNum1 + ' + ' + randomNum2;
      p.textContent = askEquation;
      equation.appendChild(p);
      }
      

    if(multiplication.checked === true) {
      answer = arr[0] * arr[1];
      var askEquation = randomNum1 + ' * ' + randomNum2;
      p.textContent = askEquation;
      equation.appendChild(p);
    }

    if(subtraction.checked === true) {
      if(arr[0] > arr[1]){
        answer = arr[0] - arr[1];
        var askEquation = randomNum1 + ' - ' + randomNum2;
      } else {
        answer = arr[1] - arr[0];
        var askEquation = randomNum2 + ' - ' + randomNum1;
      }
      p.textContent = askEquation;
      equation.appendChild(p);
    }
    
    if(division.checked === true) {
      if(arr[1] !== 0 && arr[0] > arr[1] && (arr[0] % arr[1]) === 0){
        answer = arr[0] / arr[1];
        var askEquation = randomNum1 + ' / ' + randomNum2;
      } else if (arr[0] !== 0 && arr[1] > arr[0] && (arr[1] % arr[0]) === 0){
        answer = arr[1] / arr[0];
        var askEquation = randomNum2 + ' / ' + randomNum1;
      } else if (arr[0] === 0) {
        answer = arr[0] / arr[1];
        var askEquation = randomNum1 + ' / ' + randomNum2;
      } else if (arr[1] === 0) {
        answer = arr[1] / arr[0];
        var askEquation = randomNum2 + ' / ' + randomNum1;
      } else {
        equationGenerator ();
      }
      p.textContent = askEquation;
      equation.appendChild(p);
    }
    return equation;
  }

   var scoreUpdate = function() {
     score++;
     tally.innerHTML = score;
   }

   var input = function () {
    while (seconds > 0){
      if (playerInput.value == Math.abs(Math.round(answer))) {
        equation.innerHTML = '';
        playerInput.value = '';
        scoreUpdate();
        equationGenerator();
        seconds++;  
        break;
      } else {
        break;
      }
    }
   }
         
      submit.addEventListener('click', function() {
        input();
      });

      window.addEventListener('keyup', function(e) {
        if(e.key === 'Enter') {
          input();
        }
      })

   var playGame = function(){
      start.addEventListener('click', function() {
        equationGenerator();
        var startTimer = setInterval(function () {
          timerSpan.innerHTML = --seconds;
          if(seconds === 0){
            clearInterval(startTimer);
            seconds = 10;
            tally.innerHTML = 0;
            equation.innerHTML = '';
            if(currentHighScore < score) {
              currentHighScore = score;
              highScore.innerHTML = currentHighScore;
            }
          }
        }, 1000);
      });
   }
   playGame(); 
  }

  
  runMathGame ();
  
