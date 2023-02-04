//selecting all the part of html element we will be needing and giving them name
'use strict';
let btnAgain = document.querySelector('.again');
let actualNumber = document.querySelector('.number');
let message = document.querySelector('.message');
let btnCheck = document.querySelector('.check');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highscore');
let body = document.querySelector('body');

let currentScore = 20;
let currenthighScore = 0;
//generating random number between 1 and 20
const number = Math.trunc(Math.random() * 20) + 1;
//adding event Listener to the btnAagain

btnAgain.addEventListener('click', function () {});

////adding event listener to the button check

btnCheck.addEventListener('click', function () {
  const userGuess = Number(document.querySelector('.guess').value);
  if (!userGuess) {
    message.textContent = '⛔️ No number';
  } else if (userGuess === number) {
    message.textContent = '🎉 Correct Numbers';
    body.style.backgroundColor = '#60b347';
    actualNumber.textContent = number;
    actualNumber.style.width = '30rem';
    if (currenthighScore < currentScore) {
      currenthighScore = currentScore;
      highScore.textContent = currenthighScore;
    }
  } else if (userGuess != number) {
    if (currentScore == 1) {
      currentScore--;
      score.textContent = currentScore;
      message.textContent = '💥 You lost the game!';
    }
    if (userGuess < number) {
      message.textContent = '📉 Too low!';
      currentScore--;
      score.textContent = currentScore;
    } else {
      message.textContent = '📈 Too high!';
      currentScore--;
      score.textContent = currentScore;
    }
  }
});
btnAgain.addEventListener('click', function () {
  currentScore = 20;
  document.querySelector('.guess').value = '';
  score.textContent = currentScore;
  actualNumber.style.width = '15rem';
  body.style.backgroundColor = '#222';
  message.textContent = 'Start guessing...';
});
