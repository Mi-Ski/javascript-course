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
// const greet = function (greeting) {
//   console.log(greeting);
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('hey hey');
// greeterHey('Jonas');
// greeterHey('Mi')
// greet('testing')('test');

// const greetArr = greeting => name => console.log(`${greeting} ${name}`);

// const theSameGreetArr = (greeting) => {
//    return (name) => {
//       console.log(`${greeting} ${name}`);
//    }
// }

// greetArr('greetings')('dude');
// theSameGreetArr('greetings2')('dude2');

// ! The call and apply methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  // enhanced object literal syntax method
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({
      flight: `${this.iataCode}${flightNum}`,
      name: `${this.name}`,
    });
  },
};

lufthansa.book(234, 'John Smith');
lufthansa.book(535, 'Mary Jonoes');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
  // book: book
};

const book = lufthansa.book;
// eurowings.book(234, 'John Smith');
// eurowings.book(535, 'Mary Jonoes');

// * call: first argument - this keyword
// calling the book method with "eurowings" this keyword
book.call(eurowings, 32, 'test');

book.call(eurowings, 422, 'test2');

const swiss = {
  airline: 'swiss airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 588, 'Hans Hansenberg');

// ! Apply method
// * the same as Call, but takes an array with arguments
const flightData = [645, 'George Cooper'];
// fist argument: this keyword, 2nd: an array with data
book.apply(swiss, flightData);
console.log(swiss);

// apply is the same as using call with spread
book.call(swiss, ...flightData);

// ! Bind method
const bookEurowings = book.bind(eurowings);
const bookLufthansa = book.bind(lufthansa);
const bookSwiss = book.bind(swiss);
bookEurowings(232, 'Dgd gdg');
bookSwiss(344, 'dfhdfdff');
bookLufthansa(34, 'sdfsdf');

const bookEurowings345 = book.bind(eurowings, 345);
bookEurowings345('Nate');
bookEurowings345('Jack');
//partial application: part of the arguments is already applied



lufthansa.planes = 300;
lufthansa.buyPlane = function() {
  console.log(this);
  this.planes++;
  console.log(this.planes);
}

const buttonBuy = document.querySelector('.buy');
// binding because event handlers set this to the DOM element the handler is attached to
// binding instead of calling because call would execute the function immediately
buttonBuy.addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application 

const addTax = (rate, ammount) => ammount + ammount * rate;
console.log(addTax(300, .3));

// setting this keyword to null since it's not used in this example
const addVAT = addTax.bind(null, .23);

const addTaxReturn = function(rate) {
  return function(ammount) {
    console.log(ammount + ammount * rate);
  }
}
const addVATreturn = addTaxReturn(.23);
addVATreturn(2222);