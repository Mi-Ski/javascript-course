// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// const measureKelvin = () => {
//    const measurement = {
//       type: 'temp',
//       unit: 'celsius',
//       value:  parseInt( prompt('Degrees in celsius:','0'), 10) 
//    }
//    const kelvin = measurement.value + 273;
//    console.table(measurement);
//    return kelvin;
// }
// console.log(measureKelvin());

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];
let arrayToFill = [];

const challengeSolver = (arr, fill) => {
   for (let i = 0; i < arr.length; i++) {
      let days = i + 1;
      fill.push(`...${arr[i]}▫C in ${days} days`)
   }
}
challengeSolver(testData1, arrayToFill);
let arrayToString = arrayToFill.join();

console.table(arrayToFill);