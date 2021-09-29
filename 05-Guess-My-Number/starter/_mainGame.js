'use strict';

// DOM
const centerNumber = document.querySelector('.number');
const displayedScore = document.querySelector('.score');
const inputGuess = document.querySelector('.guess');
const buttonCheck = document.querySelector('.check');
const msg = document.querySelector('.message');
const btnAgain = document.querySelector('.again');
const hScoreLabel = document.querySelector('.highscore');

// State
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
displayedScore.textContent = score;

const wrongGuessHandler = type => {
  if (score > 0) {
    msg.textContent = `Too ${type}!`;
    score--;
    displayedScore.textContent = score;
  } else {
    msg.textContent = `You lost the game`;
  }
};

buttonCheck.addEventListener('click', () => {
  const value = Number(inputGuess.value);
  if (!value) {
    // none
    displayedScore.textContent = `no guessed number!`;
  } else if (value === secretNumber) {
    // win
    msg.textContent = `Correct guess!`;
    centerNumber.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    centerNumber.style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      hScoreLabel.textContent = highScore;
    }
  } /*else if (value > secretNumber) {
	// lose >
	wrongGuessHandler('high');
  } else if (value < secretNumber) {
	// lose <
	wrongGuessHandler('low');
  }
  */ else if (value !== secretNumber) {
    wrongGuessHandler(value > secretNumber ? `high` : `low`);
  }
});

btnAgain.addEventListener('click', () => {
  inputGuess.value = '';
  score = 20;
  displayedScore.textContent = score;
  msg.textContent = `Start guessing...`;
  centerNumber.textContent = `?`;
  document.querySelector('body').style.backgroundColor = '#222';
  centerNumber.style.width = '15rem';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   hScoreLabel.textContent = 0;
  //   highScore = 0;
});
