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

const michalObject = {
   firstName: 'Mi',
   lastName: 'Ski',
   occupation: 'student',
   birthYear: 2000,
   closeFamily: ['Mom', 'Dad', 'Sister'],
   hasDriversLicense: true,

   calcAge: function(birthYear) {
      return 2021 - birthYear;
   }
};

console.log(michalObject.calcAge(1974));

console.log(michalObject['calcAge'](michalObject.birthYear));