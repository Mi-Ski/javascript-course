'use strict';

const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btnsOpenModal = document.querySelectorAll('.show-modal');
// console.log(btnsOpenModal.length);

const closeModalFunct = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openModalFunct = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModalFunct);
}

closeModal.addEventListener('click', closeModalFunct);
overlay.addEventListener('click', closeModalFunct);

document.addEventListener('keydown', function(ev) {
   console.log(ev);
   if ((ev.key === "Escape") && (!modal.classList.contains('hidden'))) {
      modal.classList.add('hidden');
      overlay.classList.add('hidden');
   } 
})