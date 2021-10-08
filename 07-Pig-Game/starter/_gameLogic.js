'use strict';

const score0 = document.getElementById('score--0');
const score1 = document.querySelector('#score--1');
const currScore0 = document.querySelector('#current--0');
const currScore1 = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore, scores, currentPlayer, playing;

const init = () => {
  dice.classList.add('hidden');
  score0.textContent = 0;
  score1.textContent = 0;
  currScore0.textContent = 0;
  currScore1.textContent = 0;
  currentScore = 0;
  scores = [0, 0];
  currentPlayer = 0;
  playing = true;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
init();

btnRoll.addEventListener('click', () => {
  if (playing) {
    let diceNum = Math.trunc(Math.random() * 6) + 1;
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNum}.png`;

    if (diceNum !== 1) {
      currentScore += diceNum;
      document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', () => {
  scores[currentPlayer] += currentScore;
  document.getElementById(`score--${currentPlayer}`).textContent = scores[currentPlayer];

  if (scores.some(el => el >= 10)) {
    document.querySelector('.player--active').classList.add('player--winner');
    playing = false;
    dice.style.display = 'none';
    return;
  }

  switchPlayer();
});

btnNew.addEventListener('click', init);

const switchPlayer = () => {
  document.querySelector(`.player--${currentPlayer}`).classList.toggle('player--active');
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 1 ? 0 : 1;
  document.querySelector(`.player--${currentPlayer}`).classList.toggle('player--active');
};
