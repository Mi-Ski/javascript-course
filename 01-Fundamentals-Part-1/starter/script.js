// const bmi = (mass, height) => {
//    return Math.round((mass / height ** 2)*100)/100;
// }

// const mark = {
//    mass: 79,
//    height: 1.69
// }

// const john = {
//    mass: 92,
//    height: 1.95
// }

// const markBMI = bmi(mark.mass, mark.height)
// const johnBMI = bmi(john.mass, john.height)
// console.log(markBMI, johnBMI);

// const markHigherBMI = markBMI > johnBMI;
// console.log(markHigherBMI);

// markHigherBMI ? console.log(`Mark's bmi is higher than John's at ${markBMI}`) : console.log(`John's bmi is higher than Mark's at ${johnBMI}`);

// const age = 21;
// const isOldEnough = age > 18;
// if (isOldEnough) {
//    console.log(`This person is of adult age.`);
// } else {
//    const yearsUntilAdult = 18 - age;
//    console.log(`This person is not an adult. He'll be in ${yearsUntilAdult} tho.`);
// }

// const centuryCalculator = (currentYear) => {
//    return console.log(Math.ceil(currentYear/100));
// }

// centuryCalculator(2137);

// type conversion/type coercion differences

// const year = "1991";
// console.log(Number(year) + 12);
// const letter = "a";
// console.log(Number(letter));
// console.log(`${year} ${Number(year)}`);

// console.log(typeof Number(letter));
// console.log(typeof NaN);
// console.log(String(NaN), NaN);

// console.log('23'+'3'+2);
// console.log('23'-'3'-2);
// console.log('21' > '');

// truthy/falsy values

console.log(Boolean());