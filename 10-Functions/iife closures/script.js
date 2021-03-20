'use strict';

// ! Immediately Invoked Funciton Expressions
// (function () {
//   console.log('this will never run again');
// })();

// (() => console.log('this will also never run again'))();

// ! Closures
const secureBooking = function () {
  let passengerCount = 0;
  const boardingActive = true;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers booked. ${boardingActive}`);
  };
};

const booker = secureBooking();
console.dir(booker);
booker();
booker();
booker();

let f;
const g = function() {
  const a = 23;
  f = function() {
    console.log(a * 2);
  }
}
const h = function() {
  const b = 333;
  f = function() {
    console.log(b-1);
  }
}

// g();
// f();
// console.dir(f)
// h();
// f();
// console.dir(f)

const boardPassengers = function(n, wait) {
  const perGroup = n/3;
  setTimeout(function() {
    console.log(`We're now boarding all ${n} passengers.`);
    console.log(`There are 3 groups with ${Math.trunc(perGroup)} passengers each.`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
}

boardPassengers(43, 2);