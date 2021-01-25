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
const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(2312, 2317, 2138, 1889);
console.log(years);

friends.push('adh');
console.log(friends.length);

friends.pop();
console.log(friends.length);

console.log(friends[friends.length - 1]);

friends[2] = 'Jane';
console.log(friends);

// * calculations inside arrays are allowed since it expects expressions

const occupation = 'student';
const michal = ['Mi', 'Ski', 2021 - 2000, occupation, friends];
console.log(michal);