'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Start guessing'

// document.querySelector('.number').textContent = '34';
// document.querySelector('.score').textContent = '23';

// document.querySelector('.guess').value = 34;
// console.log(document.querySelector('.guess').value);
const message = document.querySelector('.message');

let starterScore = localStorage.getItem('highScore') || 0;
document.querySelector('.highscore').textContent = starterScore;

// RESET
document.querySelector('.again').addEventListener('click', function () {
  // window.location.reload();

  // reset high score
  localStorage.setItem('highScore', 0);
  document.querySelector('.highscore').textContent = 0;
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //reset UI
  message.textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style[`width`] = `15rem`;
});

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = localStorage.getItem('highScore') || 0;
document.querySelector('.score').textContent = score;

const decreaseScore = () => {
  if (score > 0) {
    document.querySelector('.score').textContent = score;
    score--;
  } else {
    document.querySelector('.score').textContent = score;
    message.textContent = 'You lost the game.';
  }
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    message.textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    // ? player wins
    message.textContent = 'Correct!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style[`width`] = `30rem`;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;

      localStorage.setItem('highScore', highScore);
      console.log(localStorage.getItem('highScore'));
    }
  } else if (guess > secretNumber) {
    message.textContent = 'Too high!';
    decreaseScore();
  } else if (guess < secretNumber) {
    message.textContent = 'Too low';
    decreaseScore();
  }
});
