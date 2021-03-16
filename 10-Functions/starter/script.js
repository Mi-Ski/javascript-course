'use strict';

// * Default pararmeters
// const bookingArr = [];
// const createBooking = function (flightNum, numPassengers = 1, price = 199 * numPassengers) {
//    // es5
//    // numPassengers = numPassengers || 1;
//    // price = price || 199;

//    const booking = {
//       flightNum,
//       numPassengers,
//       price
//    }
//    console.log(booking);
//    bookingArr.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2);
// createBooking('LH123', 5, 555);
// // skipping a parameter. undefined - the same as not setting it at all
// createBooking('LH123', undefined, 555);

// * Passing arguments - value vs reference
// const flight = 'LH123';
// const mi = {
//   name: 'Mi Ski',
//   passport: 234553553,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH533';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 234553553) {
//     alert('check in');
//   } else {
//     alert('wrong passport');
//   }
// };

// checkIn (flight, mi);
// console.log(flight, mi.name);

// ! primitive type
// a new variable is created, original one isn't changes
// ? const flightNum =  flight;

// ! value/reference type
// objects are reference types, only the reference to the object in the memory heap is copied
// they both point to the same object in memory
// ? const passenger = mi;

// const newPassport = (person) => {
//    person.passport = Math.trunc(Math.random() * 1000000);
// }
// newPassport(mi);
// checkIn(flight, mi)
// console.log(mi);

// Passing by value, passing by reference
// Js doens't have passing by reference

// ! First class functions, higher order functions
// 'first class functions' = all functions are values
// objects are values, so functions are values as well
// -storing functions in variables or properties
// -passing functions as arguments to other functions
// -returning functions from other functions
// -calling methods on functions: bind

// * Higher order functions
// 1) functions that receive another function as an argument 2) that returns a new function, or both
// ? 1) const greet = () => console.log('hello');
// ?   btnClose.addEventListener('click', greet);
// addEventListener = Higher order function.    greet = callback function
// ? 2) functions count() {
// ?     let counter = 0;
// ?     return function () {
// ?        counter++;
// ?     }
// ? }

// const oneWord = (string) => {
//    return string.replace(/ /g, '').toLowerCase();
// }

// const upperFirstWord = (string) => {
//    const [first, ...rest] = string.split(' ');
//    return [first.toUpperCase(), ...rest].join(' ');
// }

// const transformer = (str, fn) => {
//    console.log(`Original string: ${str}`);
//    console.log(`Transformed string: ${fn(str)}`);
// }

// // only the function value is passed here, it's not being called
// // trying out different callback functions
// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);

// const high5 = () => console.log('hi');
// document.body.addEventListener('click', high5);

// ['Mark', 'Marcus', 'Marx'].forEach(high5);

// * Functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('hey hey');
greeterHey('Jonas');
greeterHey('Mi')

greet('testing')('test');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

const theSameGreetArr = (greeting) => {
   return (name) => {
      console.log(`${greeting} ${name}`);
   }
}

greetArr('greetings')('dude');
theSameGreetArr('greetings2')('dude2');