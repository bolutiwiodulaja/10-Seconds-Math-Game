var equation = document.getElementById('equation');
var playerInput = document.getElementById('answer');
var tally = document.getElementById('tally');
var submit = document.getElementById('submit');
var timerSpan = document.getElementById('timer');
var start = document.getElementById('start');
var restart = document.getElementById('restart');
var p = document.getElementsByTagName('p');

  var runMathGame = function() { 
  
  var answer;
  var seconds = 10;
  var score = 0;

   var equationGenerator = function () { 
   var arr = [];
   var randomNum1 = Math.floor(Math.random() * 10);
   var randomNum2 = Math.floor(Math.random() * 10);

   arr.push(randomNum1, randomNum2);
   answer = arr[0] + arr[1];

   var p = document.createElement("p"); 
   var askEquation = randomNum1 + ' + ' + randomNum2;
   p.textContent = askEquation;
   equation.appendChild(p);
   return equation;
   }

   var scoreUpdate = function() {
     score++;
     tally.innerHTML = score;
   }

   var playGame = function(){
      start.addEventListener('click', function() {
        equationGenerator();
        var startTimer = setInterval(function () {
          timerSpan.innerHTML = --seconds;
          if(seconds === 0){
            clearInterval(startTimer);
            seconds = 10;
            score = 0;
            tally.innerHTML = 0;
            equation.innerHTML = '';
          }
        }, 1000);
      });
      
      submit.addEventListener('click', function() {
        while (seconds > 0){
          if (playerInput.value == answer) {
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
      });

   }
   playGame();   
  }

  
  runMathGame ();
  
