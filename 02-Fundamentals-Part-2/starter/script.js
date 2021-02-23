'use strict';

// let hasDriversLicense = false;
// const passedDrivingExam = true;

// if (passedDrivingExam) {
//    hasDriverLicense = true;
// }

// if (hasDriversLicense) {
//    console.log("the person can drive");
// }

// function fruitProcessor(numApples, numBananas) {
//    console.log(numApples, numBananas);
//    const fruitString = `There are ${numApples} apples alongside ${numBananas} bananas.`;
//    return fruitString;
// }
// console.log(fruitProcessor(10,12));

// ? Function declarations

// console.log(ageCalculator1(2000));
// function ageCalculator1(birthYear) {
//    return 2021 - birthYear;
// }



// ? Function expressions
// * function without a name: an anonymous function
// ? Difference: Declarations can be called before they're declared in the code  

// const calcAge2 = function (birthYear) {
//    return 2021 - birthYear;
// }
// console.log(calcAge2(2345));



// ? Arrow functions: shorter function expressions
// * implicit returns, no 'this' keyword

// const calcAge3 = birthYear =>  2021 - birthYear;
// console.log(calcAge3(1900));

// const yearsUntilRetirement = (birthYear, retirementAge, firstName) => {
//    const age = 2021 - birthYear;
//    return `${firstName} retires in ${retirementAge - age} years.`; 
// }
// console.log(yearsUntilRetirement(2000, 67, 'Bob'));
// console.log(yearsUntilRetirement(1981, 65, 'Ed'));

// ? Arrays

// * the literal syntax
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

// const years = new Array(2312, 2317, 2138, 1889);
// console.log(years);

// friends.push('adh');
// console.log(friends.length);

// friends.pop();
// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[2] = 'Jane';
// console.log(friends);

//  * calculations inside arrays are allowed since it expects expressions

// const occupation = 'student';
// const michal = ['Mi', 'Ski', 2021 - 2000, occupation, friends];
// console.log(michal);

// ? Array methods
// const friends = ['Michael', 'Steven', 'Peter'];
// console.log(friends);

//  * Adding elements
// console.log(friends.push('Jill'));

// friends.unshift('Alice')
// console.log(friends);

// * Removing elements
// friends.pop();
// console.log(friends.pop()); //returns and deletes Peter

// console.log(friends.shift());
// console.log(friends);

//  * indexOf, includes
// friends.push('Alice', 'Peter', 'Jill');

// const indexPeter = friends.indexOf('Peter');
// console.log(friends);
// console.log(indexPeter);
// // returns -1 when the element isn't in the array

// console.log(friends.includes('Peter'));
// friends.push('21');
// console.log(friends.includes(21));
// console.log(friends.includes('peter'));
// // uses strict equality
// // returns true/false

// if (friends.includes('Peter')) {
//    console.log('You have a friend named Peter');
// }

// / ? Objects

// const michalArray = [
//    'Mi',
//    'Ski',
//    2021 - 2000,
//    'student',
//    friends,
//    ['Mom', 'Dad', 'Sister']
// ];

// console.log(michalArray);

//  * object literal syntax
// const michalObject = {
//    firstName: 'Mi',
//    lastName: 'Ski',
//    age: 2021 - 2000,
//    occupation: michalArray[3],
//    topFriends: friends,
//    closeFamily: ['Mom', 'Dad', 'Sister']
// };

// console.log(michalObject);

// ? Dot vs Bracket notation

// const michalObject = {
//    firstName: 'Mi',
//    lastName: 'Ski',
//    age: 2021 - 2000,
//    occupation: 'student',
//    closeFamily: ['Mom', 'Dad', 'Sister']
// };

// * dot notation
// console.log(michalObject.age);
// * bracket notation
// console.log(michalObject['firstName']); // * <- any expression can be used here
// console.log(michalObject['last' + 'Name']);

// const flName = prompt("first or last name?")
// console.log(michalObject[flName + 'Name']);

// michalObject.github = '@MiSki';
// michalObject['pet'] = 'cockatiel';
// console.log(michalObject);

// console.log(`${michalObject.firstName} has ${michalObject.closeFamily.length} member of close family, and the first of them is ${michalObject.closeFamily[0]}`);

// ? Object methods


// let counterValue = 0;
// localStorage.setItem("myElement", counterValue);

// const counter = document.getElementById("counter");

// counter.innerHTML = localStorage.getItem('myElement');

// const counterIncrement = () => {
//    localStorage.setItem('myElement', counterValue += 2);
//    counter.innerHTML = localStorage.getItem('myElement');
// }

// window.onload = function () {
//    counterValue = localStorage.getItem('myElement');
//    counter.innerHTML = localStorage.getItem('myElement');
// }

let count = localStorage.getItem("count") || 0;
document.getElementById("counter").innerHTML = count;

function counterIncrement() {
   count++;
   localStorage.setItem("count", count);
   document.getElementById("counter").innerHTML = count;
};


// const michalObject = {
//    firstName: 'Mi',
//    lastName: 'Ski',
//    occupation: 'student',
//    birthYear: 2000,
//    closeFamily: ['Mom', 'Dad', 'Sister'],
//    hasDriversLicense: true,

//    calcAge: function (birthYear) {
//       this.age = 2020 - this['birthYear'];
//       return this.age;
//    },

//    getSummary: function () {
//       return `${this.firstName} is a ${this.calcAge(this.birthYear)} yo ${this.occupation}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//    }
// };
// // console.log(michalObject.calcAge(1974));
// // console.log(michalObject['calcAge'](michalObject.birthYear));

// michalObject.calcAge();
// console.log(michalObject['a' + 'g' + 'e']);
// console.log(michalObject.getSummary());




// const markObj = {
//    mass: 78,
//    height: 1.69,
//    fullName: 'Mark',

//    calcBMI: function() {
//       this.bmi = this.mass / Math.pow(this.height, 2);
//    }
// }

// const johnObj = {
//    mass: 92,
//    height: 1.95,
//    fullName: 'John',

//    calcBMI: function() {
//       this.bmi = this.mass / Math.pow(this.height, 2);
//    }
// }

// markObj.calcBMI();
// johnObj.calcBMI();
// if (markObj.bmi > johnObj.bmi) {
//    console.log(`Mark's bmi is higher than John's (${markObj.bmi} vs ${johnObj.bmi})`);
// }
// else {
//    console.log(`Johns's bmi is higher than Mark's (${johnObj.bmi} vs ${markObj.bmi})`);
// }

// * LOOPS
// for (let i = 4; i <= 4; i++) {
//    console.log(`repetition ${i}`);
// }

const michalArray = [
   'Mi',
   'Ski',
   2021 - 2000,
   'student',
   ['Mom', 'Dad', 'Sister']
];

// let michalTypeArray = [];

// for (let i = 0; i <= michalArray.length - 1; i++) {
//    // console.log(michalArray[i], typeof michalArray[i]);
//    michalTypeArray.push(typeof michalArray[i])
// }
// console.log(michalTypeArray);

// const birthYearArray = [1991, 1975, 2000, 2005, 1983];
// const agesArray = [];

// for (let i = 0; i < birthYearArray.length; i++) {
//    let age = 2020 - birthYearArray[i];
//    agesArray.push(age);
// }

// console.log(agesArray);

// * Continue and break
// Continue - exit the current iteration of the loop and continue to the next one
// Break - compeletely terminate the whole loop

// for (let i = 0; i < michalArray.length; i++) {
//    if (typeof michalArray[i] !== 'string') continue;
//    console.log(michalArray[i], typeof michalArray[i]);
// }

// for (let i = 0; i < michalArray.length; i++) {
//    console.log(michalArray[i], typeof michalArray[i]);
//    if (typeof michalArray[i] === 'number') break;
// }

// * Looping backwards
// for (let i = michalArray.length - 1; i >= 0; i--) {
//    console.log(michalArray[i]);
// }

// * While loop

// let dice = Math.floor(Math.random() * 6) + 1;

// while(dice !== 6) {
//    console.log(`You rolled a ${dice}`);
//    dice = Math.floor(Math.random() * 6) + 1;

//    if (dice === 6) {
//       console.log("6 was rolled, exiting.");
//    }
// }

// * Coding challenge #4
const billsArray = [131, 23, 42, 432, 72, 23, 53, 24, 62, 239];
let tips = [];
let totals = [];

const tipCalculator = (bill) => {
   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < billsArray.length; i++) {
   tips.push(tipCalculator(billsArray[i]));
   totals.push(tipCalculator(billsArray[i]) + billsArray[i]);
}

console.log(tips, totals);

const calcAverage = (arr) => {
   let totalAmmount = 0;
   for (let i = 0; i < arr.length; i++) {
      totalAmmount += arr[i];
   };
   console.log(totalAmmount / (arr.length - 1));
   console.log(totalAmmount);
}
calcAverage([2,5,6]);