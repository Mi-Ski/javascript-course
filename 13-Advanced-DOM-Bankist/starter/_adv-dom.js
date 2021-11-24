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
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const imgTargets = document.querySelectorAll('img[data-src]');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const dotContainer = document.querySelector('.dots');

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
const message = document.createElement('div');
message.classList.add('cookie-message');

message.innerHTML =
  'We use cookies for advanced functionality and tracking. <button class="btn btn--close-cookie">Got it!</button> ';

header.prepend(message);
// header.append(message);
// header.append(message.cloneNode(true));
//-------------------------------------------------

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', () => message.remove());
// console.log(getComputedStyle(message));

const scrollBtn = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

scrollBtn.addEventListener('click', e => {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords, s1coords.left);

  // console.log(e.target.getBoundingClientRect());
  console.log('Current offset (Y, X)', window.scrollY, window.scrollX);

  // window.scrollTo({
  //   top: s1coords.top + window.scrollY,
  //   left: s1coords.left + window.scrollX,
  //   behavior: 'smooth'
  // });
  section1.scrollIntoView({ behavior: 'smooth' });
});

// document.querySelectorAll('.nav__link').forEach( (el) => {
//   el.addEventListener('click', function(e) {
//     e.preventDefault();
//     console.log(e.target.hash);
//     document.querySelector(e.target.hash).scrollIntoView({behavior: "smooth"});
//   })
// }) ;
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('button');
  // tabsContainer.children.forEach(el => el.classList.remove('operations__tab--active'));
  if (!clicked) return;
  tabs.forEach(el => el.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //activate content area
  operationsContent.forEach(el =>
    el.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
      logo.style.opacity = this;
    });
  }
};

nav.addEventListener('mouseover', handleHover.bind('0.5'));
nav.addEventListener('mouseout', handleHover.bind('1'));

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${parseInt(window.getComputedStyle(nav).height)}px`,
});
headerObserver.observe(header);

const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(el => {
  el.classList.add('section--hidden');
  sectionObserver.observe(el);
});

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));

const slides = document.querySelectorAll('.slide');
const createDots = (() => {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button> 
    `
    );
  });
})();

let currSlide = 0;
const lastSlide = slides.length - 1;

slides.forEach((el, i) => {
  el.style.transform = `translateX(${100 * i}%)`;
});

const slideRight = function () {
  if (currSlide === lastSlide) {
    currSlide = 0;
  } else {
    currSlide++;
  }
  slides.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - currSlide)}%)`;
    console.log(el, i);
  });
};
const slideLeft = function () {
  if (currSlide === 0) {
    currSlide = lastSlide;
  } else {
    currSlide--;
  }
  slides.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - currSlide)}%)`;
    console.log(el, i);
  });
};
btnRight.addEventListener('click', slideRight);
btnLeft.addEventListener('click', slideLeft);

document.addEventListener('keydown', function (e) {
  e.key === 'ArrowLeft' && slideLeft();
  e.key === 'ArrowRight' && slideRight();
});

dotContainer.addEventListener('click', e => {
  if (e.target.classList.contains('dots__dot')) {
    const {slide} = e.target.dataset;
    slides.forEach((el, i) => {
      el.style.transform = `translateX(${100 * (i-slide)}%)`;
    });
  }
});