'use strict';

// Default parameters
const bookingArr = [];

const createBooking = (flightNum, numPassengers = 1, price = 999) => {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  bookingArr.push(booking);
  // console.log(booking);
};

createBooking(222, 23, 928);
// console.log(bookingArr);

// Passing arguments (value vs reference)
const flight = '3DF5A';
const jonas = {
  name: 'Jonas S',
  passport: 34382378,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'FG232';
  passenger.name = 'Mr Jonas S';
};

checkIn(flight, jonas);
// console.log(flight, jonas);

// Higher order functions
const transform = (str, funct) => {
  // console.log(`Originial string: ${str}`);
  // console.log(`Transformed string: ${funct(str)}`);
  // console.log(`Transformed by: ${funct.name}`);
  return funct(str);
};

const oneWord = str => {
  console.log(str.replace(/ /g, '').toLowerCase());
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = str => {
  const [first, ...wordArr] = str.split(' ');
  return [first.toUpperCase(), ...wordArr].join(' ');
};

// console.log(transform('hello hello hello', upperFirstWord));
// ['jon d as', 'martha', 'michael'].forEach(oneWord);

// functions returning funcitons

// const greet = (greeting) => {
//   return function full(name) {
//     console.log(`${greeting}, ${name}`);
//   }
// }
const greet = greeting => {
  return name => {
    // console.log(`${greeting}, ${name}`);
  };
};
greet('Hellllo')('Mi-Ski');

// Call and Apply methods
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNumber, name) {
    // console.log(`${name} booked a flight number ${flightNumber}`);
    this.bookings.push({ flightNumber: `${this.iataCode}${flightNumber}`, name });
  },
};

lufthansa.book(33232, 'MiSki')
// console.log(lufthansa.bookings);

const eurowings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
}

const book = lufthansa.book;

// book.call();
// console.log(eurowings);

// Bind

// const bookEW = lufthansa.book.bind(eurowings);
// bookEW(22, 'dsf');
// console.log(eurowings);

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes ++;
  console.log(this.planes);

}


document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));