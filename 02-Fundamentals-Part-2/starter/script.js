'use strict';

// let hasDriversLicense = false;
// const passedDrivingExam = true;

// if (passedDrivingExam) {
//    hasDriverLicense = true;
// }

// if (hasDriversLicense) {
//    console.log("the person can drive");
// }

function fruitProcessor(numApples, numBananas) {
   console.log(numApples, numBananas);
   const fruitString = `There are ${numApples} apples alongside ${numBananas} bananas.`;
   return fruitString;
}

console.log(fruitProcessor(10,12));