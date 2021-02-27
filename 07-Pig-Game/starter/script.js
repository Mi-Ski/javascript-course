'use strict';

// Selecting elements
const score0Element = document.getElementById('score--0');
const score1Element = document.querySelector('#score--1');
const currScore0 = document.querySelector('#current--0');
const currScore1 = document.querySelector('#current--1');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

const dice = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  currScore0.textContent = 0;
  currScore1.textContent = 0;

  dice.classList.add('hidden');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
}
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  if(playing) {
    // 1. Generating a random dice roll
    const diceNumber = Math.trunc(Math.random() * 6 + 1);
    console.log(diceNumber);
  
    // 2. Display the dice
    dice.classList.remove('hidden');
    dice.src = `dice-${diceNumber}.png`;
  
    //3. Check for number 1
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

// HODL
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. add current score to active player's score
    scores[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    currentScore = 0;
    // 2. Check if player's score is >=100
    // finish the game
    if (scores[activePlayer] >= 10) {
      playing = false;
      dice.classList.add('hidden');

      document.querySelector('.player--active').classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      // btnRoll.classList.add('hidden');
      // btnHold.classList.add('hidden');
      // document.getElementById(`current--${activePlayer}`).textContent = currentScore;

      return;
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
});

// New game
btnNew.addEventListener('click', init);
