'use strict';

// //constructor function
// const Person = function (firstName, lastName, birthYear) {
//    //instance properties
//    this.firstN = firstName;
//    this.lastN = lastName;
//    this.birthY = birthYear;
// }

// const miski = new Person('Mi', 'Ski', 1222);
// const matni = new Person('Matilda', 'Nind', 1899);
// // console.log(matni.lastN);
// // console.log(!(matni instanceof Person));

// // matni.calcAge();
// Person.prototype.printName = function() {
//    console.log(`My name is ${this.firstN}`);
// }

// // miski.printName();
// // console.log(miski.constructor);
// // console.log(miski.__proto__);
// // console.log({Person});
// // console.log(miski.__proto__ === Person.prototype);

// // console.log(Person.prototype.isPrototypeOf(miski), 1);

// Person.prototype.isHuman = true;
// // matni.isHuman = true;
// // matni.__proto__.isHuman = false;
// // console.log(matni);
// // console.log(matni.hasOwnProperty("isHuman"));
// console.log(miski.__proto__ === Person.prototype);
// console.dir(Person.prototype.constructor);

// const arr = [123,123,3,3];
// console.log(arr.__proto__.__proto__ === Object.prototype);

// Array.prototype.unique = function () {
//    return [...new Set(this)];
// }

// console.log(arr.__proto__);

//!
const Car = function (make, speed) {
  this.carMake = make;
  this.carSpeed = speed;
};

Car.prototype.accelerate = function () {
  this.carSpeed += 10;
  console.log(this.carSpeed);
};

Car.prototype.brake = function () {
  this.carSpeed -= 5;
  console.log(this.carSpeed);
};

const mercedes = new Car('Mercedes', 100);
mercedes.accelerate();
mercedes.brake();

const bmw = new Car('BMW', 70);
bmw.brake();