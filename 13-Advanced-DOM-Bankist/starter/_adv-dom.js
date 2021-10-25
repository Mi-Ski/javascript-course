'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const operationsContent = document.querySelectorAll('.operations__content');

const openModal = function (event) {
  event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(el => el.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// console.log(document.head);
// document.querySelector('.header');
// const allsections = document.querySelectorAll('.section');
// console.log(allsections);

// const tags = document.getElementsByTagName('div')
// console.log(tags);
const header = document.querySelector('.header');
const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML = 'We use cookies for advanced functionality and tracking. <button class="btn btn--close-cookie">Got it!</button> '

header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
//-------------------------------------------------


document.querySelector('.btn--close-cookie').addEventListener('click', () => message.remove());
// console.log(getComputedStyle(message));

const scrollBtn = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

scrollBtn.addEventListener('click', (e) => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords, s1coords.left);

  // console.log(e.target.getBoundingClientRect());
  console.log('Current offset (Y, X)', window.scrollY, window.scrollX);

  // window.scrollTo({
  //   top: s1coords.top + window.scrollY,
  //   left: s1coords.left + window.scrollX,
  //   behavior: 'smooth'
  // });
  section1.scrollIntoView({ behavior: "smooth",});
});