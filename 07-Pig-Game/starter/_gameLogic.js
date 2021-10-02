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

dice.classList.add('hidden');
score0.textContent = 0;
score1.textContent = 0;
let current = 0;
let scores = [0, 0];
let currentPlayer = 0;

btnRoll.addEventListener('click', () => {
  let diceNum = Math.trunc(Math.random() * 6) + 1;
	dice.classList.remove('hidden');
	dice.src = `dice-${diceNum}.png`;

	if(diceNum !== 1) {
		current += diceNum;
		document.getElementById(`current--${currentPlayer}`).textContent = current;
	} else {
		document.querySelector(`.player--${currentPlayer}`).classList.toggle('player--active');
		document.getElementById(`current--${currentPlayer}`).textContent = 0;
		current = 0;
		currentPlayer = currentPlayer === 1 ? 0 : 1;
		document.querySelector(`.player--${currentPlayer}`).classList.toggle('player--active');
	}
});
