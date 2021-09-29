'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonsOpenModal = document.querySelectorAll('.show-modal');
console.log(buttonsOpenModal);

buttonsOpenModal.forEach( el => {
	el.addEventListener('click', () => {
		modal.classList.remove('hidden');
		overlay.classList.remove('hidden');
	})
})