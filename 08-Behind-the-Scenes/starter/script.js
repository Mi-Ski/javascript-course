'use strict';

// function declaration
// function calcAge(birthYear) {
//    const age = 2021 - birthYear;
//    console.log(age, firstName);

//    function printAge() {
//       const output = `You are ${firstName}, ${age} years old.`;
//       console.log(output);

//       // const & let variables are block scoped
//       if (birthYear >= 1981 && birthYear <= 1996) {
//          // works only with var - it's function scoped
//          var str = `Oh, and you're a millenial, ${firstName}`;
//       }
//       console.log(str);
//    }
//    printAge();
//    return age;
// }

// const firstName = 'Jonas';
// calcAge(1991);

// functions
// console.log(addArrow(1, 1));

// function addDeclaration(a, b) {
//    return a + b;
// }

// const addExpression = function (a, b) {
//    return a + b;
// };

// // *implicit return
// let addArrow = (a, b) => a + b;

// // * var creates properties on the global window object
// var x = 1;
// let y = 2;
// const z = 3;
// console.log(window);


// ! THIS

// // window   
// console.log(this);

// // undefined (in scrict mode)
// const calcAge = function(birthYear) {
//    console.log(2021 - birthYear);
//    console.log(this);
// }
// calcAge(2001);

// // window again, because of the lexical this keyword (this of the surrounding function)
// const arrow = (birthYear) => {
//    console.log(2021 - birthYear);
//    console.log(this);
// }
// arrow(2001);

// // object that's calling the method
// const mi = {
//    year: 2000,
//    calcAge: function() {
//       // logging the mi object
//       console.log(this);
//       console.log(2020 - this.year);
//    }
// }
// mi.calcAge();

// const matilda = {
//    year: 2017
// }
// // method borrowing
// matilda.calcAge = mi.calcAge;
// matilda.calcAge();

// ! Regular functions vs arrow functions
// var firstName = 'Matilda';
// const mi = {
//    firstName:  'mi',
//    year: 2000,
//    calcAge: function() {
//       // logging the mi object
//       console.log(this);
//       console.log(2020 - this.year);
//    },
//    greet: () => {
//       // objects don't create their own scopes so the literal this points to the global object (window)
//       console.log(this.firstName);
//    }
// }
// mi.calcAge();
// console.log("'''''");
// mi.greet();
// console.log(this.firstName);

// const mi = {
//    firstName:  'mi',
//    year: 2000,
//    calcAge: function() {
//       // logging the mi object
//       console.log(this);
//       console.log(2020 - this.year);
//       const year = 2030;

//       // * function inside a method (works only with arrow functions)
//       const isMillenial = () => {
//          console.log(this.year >= 1981 && this.year <= 1996);
//       }
//       isMillenial();
//    },
//    greet: () => {
//       // objects don't create their own scopes so the literal this points to the global object (window)
//       console.log(this.firstName);
//    }
// }
// mi.calcAge();

// console.log('args');
// // ! arguments keyword
// // exists only in regular functions, not arrow functions 

// const argsTest1 = function (a, b) {
//    console.log(arguments);
// }
// argsTest1(12.2,34,52,4)

// const argsTest2 = (a,b) => {
//    //arguments not defined
//    console.log(arguments);
// }
// argsTest2(23,34,24,25);

// ! Primitive vs Reference types
// primitives (primitive types): number, string, boolean, undefined, null, symbol, bigInt
// objects (reference types): object literal, arrays, functions, ....)

// objects (reference types) stored in the Heap in Js engine
// primitives are stored in the call stack (execution context in which they're declared)

// // primitive
// let age1 = 20;
// let newAge1 = age1;
// // value in a memory address is immutable, allocating new memory address
// age1 = 31;
// console.log(age1);
// console.log(newAge1);

// //reference
// const age2 = {
//    age: 21
// }
// const newAge2 = age2;
// age2.age = 23;
// console.log(age2.age);
// console.log(newAge2.age);

let lastName = `Smith`;
let oldLastName = lastName;
lastName = `Tiel`;

// console.log(lastName, oldLastName);

const jessica = {
   firstName: 'Jessica',
   lastName: 'Smith',
   age: 27
}; 

// dosn't create a new object in the heap, just a new variable in the stack which hold reference to the original jessica object
// both of those variables point to the same memory address in the heap, because they hold the same memory address reference in the call stack
const marriedJessica = jessica;
marriedJessica.lastName = 'Johnson';
console.log(jessica.lastName, marriedJessica.lastName);

// * copying the object
//new jess object
const jessica2 = {
   firstName: 'Jessica',
   lastName: 'Smith',
   age: 27,
   family: ['a', 'b', 'c', 'd'],
}; 

// * actually creating a new object in the heap
const jessicaCopy = Object.assign({}, jessica2);
// only creates a shallow copy, not a deep clone - objects inside objects are not copied
jessicaCopy.lastName = 'Wood';
console.log(jessica2, jessicaCopy);

jessicaCopy.family.push('x', 'y', 'z')
// pushed to both of them
console.log(jessica2, jessicaCopy);