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

// * type conversion/type coercion differences
// * type coersion: implicit, behind the scenes
// * type conversion: explicit

// const year = "1991";
// console.log(Number(year) + 12);
// const letter = "a";
// console.log(Number(letter));
// console.log(`${year} ${Number(year)}`);

// * can only convert to number, string and boolean

// console.log(typeof Number(letter));
// console.log(typeof NaN);
// console.log(String(NaN), NaN);

// console.log(Number('23'+'3')+2); // 235
// console.log('23'-'3'-2); // 18
// console.log('21' > Number('24')); // false

// * truthy/falsy values
// * values that aren't exactly true/false but will become them when converted to booleans

// console.log(Boolean());

// * falsy values: 0, '', undefined, null, NaN

// const money = 1;
// if (money) {
// 	console.log("don't spend it all");
// } else {
// 	console.log('you should get a job');
// }

// let height = 1;
// if (height) {
//    console.log("height is defined");
// } else {
//    console.log("height is undefined");
// }

// * equality operators: == vs ===

// const age = "18";
// * loose equalty operator with type coercion
// if (age == 18) console.log("output"); // output

// * strict equality operator, no type coercion
// if (age === 18) console.log("output"); // no output

// let value = prompt("what's your favourite number?");
// console.log(typeof Number(value));

// * !== strict version
// * != loose versin

// ? Basic boolean logic && || !
// const hasDriversLicense = true;
// const hasGoodVision = true;

// console.log(hasDriversLicense || hasGoodVision); //true

// const shouldDrive = hasDriversLicense && hasGoodVision;
// if(shouldDrive){
//    console.log("she can drive");
// } else {
//    console.log("she cannot drive");
// }

// ? The switch statement
// const day = 'monday';

// switch (day) {
// 	case 'monday':
//       console.log("it's the first day of the week");
//       console.log("go to the gym");
//       break;
//    case 'tuesday':
//       console.log("keep learning javascript");
//       break;
//    case 'wednesday':
//    case 'thursday':
//    case 'friday':
//       console.log("go to school");
//       break;
//    default:
//       console.log("it's weekend");
// }

// ? Statements and expressions
// * expression - a piece of code that produces a value ( 3 + 4 ) ( true && false && !false) ( 233 )
// * statements/declarations are like full sentences that translate actions

// ? Ternary operator
// const age = 12;

// const ageOperation = age >= 18 ? 'wine.' : 'water.';
// console.log(`I like to drink ${ageOperation}`);

// const bill = 254;

// const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

// console.log(`The bill was ${bill}, and the total with a tip of ${tip} was ${bill + tip}`);

// * es1
// function add(n){
//    var x = 5 + add.arguments[0];
//    return x;
// }
