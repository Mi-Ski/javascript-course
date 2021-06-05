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
  // event.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);
btnsOpenModal.forEach(el => el.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

const scroller = function (event) {
  event.preventDefault();

  if (event.target.getAttribute('class') === 'nav__link') {
    const hrefTarget = event.target.getAttribute('href');
    document.querySelector(hrefTarget).scrollIntoView({
      behavior: 'smooth',
    });
  }
};
document.querySelector('.nav__links').addEventListener('click', scroller);

// tabbed component

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');

  //guard clause
  if (!clicked) return;

  //active tab
  tabs.forEach(el => el.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //content area
  // const tabData = clicked.getAttribute('data-tab');
  // console.log(tabData);
  operationsContent.forEach(el =>
    el.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
//mouseover vs mouseenter = mouseenter doesn't bubble
// opposite: mouseover = mouseout, mouseenter = mouseleave
const handleNavOpacity = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const clicked = e.target;
    // instead of moving up manually every time, searching for a query
    const siblings = clicked.closest('.nav').querySelectorAll('.nav__link');
    const logo = clicked.closest('.nav').querySelector('.nav__logo');

    siblings.forEach(el => {
      if (el !== clicked) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handleNavOpacity(e, 0.4);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleNavOpacity(e, 1);
// });

nav.addEventListener('mouseover', handleNavOpacity.bind(0.4));
nav.addEventListener('mouseout', handleNavOpacity.bind(1));
// bind - creates a copy of the function it's called on, sets 'this' keyword in this function call to whatever's passed into bind
// bind returns a new funciton
// this will be set to (0.4 or 1)
// handler funciton can only take 1 argument

// Sticky navigation
const section1 = document.querySelector('#section--1');

// const initCoords = document.querySelector('#section--1').getBoundingClientRect();
// window.addEventListener('scroll', function() {
//   if(window.scrollY > initCoords.top) nav.classList.add('sticky')
//   else nav.classList.remove('sticky')
// })

// const obsCallback = function (entries, observer) {
//   entries.forEach(el => console.log(el))
// };
// const obsOptions = {
//   root: null,
//   threshold: [0,0.2],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// document.querySelectorAll('#section--1').forEach(el => observer.observe(el))

// ! intersection observer api
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
const stickyNavCallback = function (entries) {
  // destructuring only 1 element since there's only one threshold
  const [entry] = entries;
  if (entry.intersectionRatio === 0) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObs = new IntersectionObserver(stickyNavCallback, {
  root: null,
  // rootMargin = adding a margin of specified size around the root
  rootMargin: `-${navHeight}px`,
  threshold: 0,
});
headerObs.observe(header);

// !revealing elements on scroll
const allSections = document.querySelectorAll('.section');

const sectionCallback = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry.isIntersecting);
  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(sectionCallback, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(el => {
  sectionObserver.observe(el);
  // el.classList.add('section--hidden');
});

//! lazy loading images
//select all img elements with a data-scr attribute
const imgTargets = document.querySelectorAll('img[data-src]');
console.log(imgTargets);

const imgObserver = new IntersectionObserver(
  (entries, observer) => {
    const [entry] = entries;
    if (!entry.isIntersecting) return;
    //replaced but not showing up updated on the page
    else entry.target.src = entry.target.dataset.src;
    //removing the lazy-img class right after Intersection shows the low quality pic for a while if users internet is slow
    entry.target.addEventListener('load', () => {
      entry.target.classList.remove('lazy-img');
    });

    //entry.target = observed, loaded el in imgTargets
    observer.unobserve(entry.target);
  },
  {
    root: null,
    threshold: 0,
    //root margin so lazy-loading isn't that noticeable
    rootMargin: '300px',
  }
);

imgTargets.forEach(el => {
  imgObserver.observe(el);
});

//! Slider
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
// 0%, 100%, 200%, 300%...

let currentSlide = 0;
const lastSlide = slides.length - 1;

// dots
const dotContainer = document.querySelector('.dots');

const createDots = () => {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide-number="${i}"></button>`
    );
  });
};
createDots();

dotContainer.addEventListener('click', e => {
  if (e.target.classList.contains('dots__dot')) {
    const { slideNumber } = e.target.dataset;
    goToSlide(slideNumber);
  }
});

const activateDot = slideNumber => {
  document.querySelectorAll('.dots__dot').forEach(dot => {
    dot.classList.remove('dots__dot--active');
  });

  const active = document.querySelector(
    `.dots__dot[data-slide-number="${slideNumber}"]`
  );
  console.log(active);
  active.classList.add('dots__dot--active');
};

const goToSlide = slideNumber => {
  slides.forEach((el, i) => {
    el.style.transform = `translateX(${100 * (i - slideNumber)}%)`;
  });
  activateDot(slideNumber);
};

goToSlide(0);

const nextSlide = () => {
  if (currentSlide === lastSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};
const prevSlide = () => {
  if (currentSlide === 0) currentSlide = lastSlide;
  else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);
//keyboard events are handled by the document
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowLeft') prevSlide();
  else if (e.key === 'ArrowRight') nextSlide();
});
