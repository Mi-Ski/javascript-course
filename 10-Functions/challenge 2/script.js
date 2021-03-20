'use strict';
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  // return document.body.addEventListener('click', () => {header.style.color = 'blue'});
  document.body.addEventListener('click', function() {
    header.style.color = 'blue';
  })
})();
