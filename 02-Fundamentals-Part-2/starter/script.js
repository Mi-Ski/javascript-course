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