'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
  // ? 'wed', 'day-4', 'sat';
  [weekdays[0]]: {
    open: 12,
    close: 22,
  },
  [`day-${2 ** 2}`]: {
    open: 11,
    close: 23,
  },
  [weekdays[3]]: {
    open: 11,
    close: 23,
  },
  ['s' + 'a' + 't']: {
    open: 0, // Open 24 hours
    ['clo' + 'se']: 24,
  },
};

const airline = 'TAP Air Portugal';
// const plane = 'A320';

// *changing the case of a string
console.log(airline.toLowerCase());
console.log('TAP Air Portugal'.toUpperCase());

// *fixing capitalization in the name
let passenger = 'mIcHal';
passenger = passenger.toLowerCase();
const passengerFixed = passenger[0].toUpperCase() + passenger.slice(1);
console.log(passengerFixed);

// trim: delete whitespace from both ends
const email = 'hello@jonas.io';
const loginEmail = ' Hello@Jonas.Io \n';
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail === email);

// *replacing
const priceBriish = '234,23£';
const priceFreedom = priceBriish.replace('£', '$').replace(',', '.');
console.log(priceFreedom);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
// console.log(announcement.replaceAll('door', 'gate'));
// *^ the same but done with regex (g = global)
console.log(announcement.replace(/door/g, 'gate'));

// * booleans: includes, startsWith, endsWith
const plane = 'Airbus A320neo';
console.log(plane.includes('neo'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the new Airbus lineup.');
}

const miniTSA = itemString => {
  const baggage = itemString.toLowerCase();
  if (baggage.includes(' gun ') || baggage.includes(' knife ')) {
    console.log("You're not allowed onboard.");
  } else console.log('Welcome aboard!');
};

miniTSA('my name is Gunter');
miniTSA("i've got my loicensed gun and knife here, don't mind me, mate");

// * split (returns an array)
console.log('a+very+nice+string'.split('+'));

const nameArray = 'Michał Kowalski'.split(' ');
for (const el of nameArray) console.log(el);
const [firstName, lastName] = nameArray;
console.log(firstName, firstName, lastName);

// * join, the opposite of split
console.log(['Mr.', firstName, lastName.toUpperCase()].join(' x '));

const capitalizeName = name => {
  const nameArr = name.split(' ');
  let emptyArray = [];

  for (let el of nameArr) {
    emptyArray.push(el.replace(el[0], el[0].toUpperCase()));
  }
  console.log(emptyArray.join(' '));
};

capitalizeName('hasdf ahsdf asdhfhsdf hdh');
capitalizeName('ahsdfh shdhfh ahdfh adhf');

// * Padding a string
const message = 'Go to gate nr 3';
console.log(message.padStart(25, '+').length);
console.log(message.padStart(25, '+').padEnd(40, '-'));

const maskCreditCardNumber = number => {
  // ? can also convert numbers to string by adding an empty string to them ( number + '')
  const stringified = String(number);
  const cutOffNums = stringified.slice(-4);
  const maskedNumber = cutOffNums.padStart(stringified.length, "*") 
  return maskedNumber;
};
console.log(maskCreditCardNumber(234241234134134));


//*repeat
const planeInfo = number => {
  console.log(`There are ${number} planes waiting for departure. ${'✈'.repeat(number)}`);
}
planeInfo(4);
planeInfo(5);
planeInfo(2);
planeInfo(9);

// for (const el of plane) console.log(el);
// console.log(plane[0]);
// console.log('B737'[1]);
// console.log(plane.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// // returns -1 if index can't be found
// console.log(airline.indexOf('tugal'));

// // * slice
// console.log(airline.slice(6, 10)); // r Po
// console.log(airline.slice(8)); // Portugal
// console.log(airline.slice(0, airline.indexOf(" "))); //slicing the first word of the string
// console.log(airline.slice(airline.lastIndexOf(" ") + 1)); // last word of the string
// console.log("");
// console.log(airline.slice(-8));
// console.log(airline.slice());

// const checkMiddleSeat = (seat) => {
//   //in each row B and E are the middle seats
//   const lastLetter = seat.slice(-1);

//   if (lastLetter === "B" || lastLetter === "E") {
//     console.log("This seat is in the middle");
//   } else return;

// }

// checkMiddleSeat("23B")
// // * boxing
// console.log(new String("Test"));
// console.log(typeof new String("Test"));
// console.log(typeof new String("Test").slice());
// console.log("");
