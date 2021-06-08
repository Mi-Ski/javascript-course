'use strict';

// // //constructor function
// // const Person = function (firstName, lastName, birthYear) {
// //    //instance properties
// //    this.firstN = firstName;
// //    this.lastN = lastName;
// //    this.birthY = birthYear;
// // }

// // const miski = new Person('Mi', 'Ski', 1222);
// // const matni = new Person('Matilda', 'Nind', 1899);
// // // console.log(matni.lastN);
// // // console.log(!(matni instanceof Person));

// // // matni.calcAge();
// // Person.prototype.printName = function() {
// //    console.log(`My name is ${this.firstN}`);
// // }

// // // miski.printName();
// // // console.log(miski.constructor);
// // // console.log(miski.__proto__);
// // // console.log({Person});
// // // console.log(miski.__proto__ === Person.prototype);

// // // console.log(Person.prototype.isPrototypeOf(miski), 1);

// // Person.prototype.isHuman = true;
// // // matni.isHuman = true;
// // // matni.__proto__.isHuman = false;
// // // console.log(matni);
// // // console.log(matni.hasOwnProperty("isHuman"));
// // console.log(miski.__proto__ === Person.prototype);
// // console.dir(Person.prototype.constructor);

// // const arr = [123,123,3,3];
// // console.log(arr.__proto__.__proto__ === Object.prototype);

// // Array.prototype.unique = function () {
// //    return [...new Set(this)];
// // }

// // console.log(arr.__proto__);

// //!
// // const Car = function (make, speed) {
// //   this.carMake = make;
// //   this.carSpeed = speed;
// // };

// // Car.prototype.accelerate = function () {
// //   this.carSpeed += 10;
// //   console.log(this.carSpeed);
// // };

// // Car.prototype.brake = function () {
// //   this.carSpeed -= 5;
// //   console.log(this.carSpeed);
// // };

// // const mercedes = new Car('Mercedes', 100);
// // mercedes.accelerate();
// // mercedes.brake();

// // const bmw = new Car('BMW', 70);
// // bmw.brake();

// // * js classes are just special functions so both expressions and declarations can be used

// // !class expression
// // const Person = class {

// // }

// //! class declaration
// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.year = birthYear;
//   }

//   // all methods will be on the prototype, not objects themselves
//   clacAge() {
//     const now = new Date().getFullYear();
//     return now - this.year;
//   }

//   greetings() {
//     console.log(`Greetings, ${this.fullName}.`);
//   }

//   set fullName(name) {
//     if(name.includes(' ')){
//       this._fullName = name;
//     } else console.log('not a full name');
//   }
//   get fullName() {
//     return this._fullName;
//   }

//   get age() {
//     return 2021 - this.year;
//   }

//   // get longName() {
//   //   let long = [];
//   //   let nameSplit = this.fullName.split('');
//   //   nameSplit.forEach(el => {
//   //     long.push(`${el}${el}`);
//   //   });
//   //   return long.join('');
//   // }
// }

// const person1 = new Person('Alexander', 2000);
// person1.fullName = "Alexander And";
// console.log(person1);
// // person1.greetings();
// console.log(person1.fullName);

// const person2 = new Person('Michael', 1928);
// console.log(person2.longName);

// Person.prototype.greet = function () {
//   console.log(`Hey ${this.fullName}!`);
// };

// const walter = new Person('walter f', 3999);
// console.log(walter.fullName);
// // console.log(person1.__proto__);
// person1.greet();

// // setters, getters
// const account = {
//   owner: 'MiSki',
//   latest: 2,
//   movements: [233, 4, -23, 233],

//   //getter
//   // get latest(){
//   //   return this.movements.pop();
//   // },
//   //setter
//   set latest(el) {
//     if (typeof el === 'number') this._latest = el;
//     else console.log('not a number');
//   },
//   get latest() {
//     return this._latest;
//   },
// };

// // account.latest = 'd';
// // console.log(account.latest);
// // console.log(account);

// console.log(Number.parseInt('32.9'));

// const protoObj = {
//   helllo: 'dd',
//   calcAge() {
//     return 2021 - this.birthYear;
//   },

//   init(name, year) {
//     this.firstName = name;
//     this.birhtYear = year;
//   }
// }

// const steven = Object.create(protoObj);
// steven.birthYear = 1994;
// console.log(steven.calcAge());

// console.log(steven.__proto__);

// const sarah = Object.create(protoObj);
// sarah.init('Sarah', 1981);
// console.log(sarah);

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed; 
  }

  Accelerate() {
    return this.speed += 10;
  }
  Brake() {
    return this.speed -= 5;
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed){
    this.speed = speed * 1.6;
  }
} 

const bmw = new Car('BMW', 10);
console.log(bmw.speed);
console.log(bmw.speedUS);

bmw.speedUS = 50;
console.log(bmw);