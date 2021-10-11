'use strict';

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHours = {
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

// ! Looping objects
// * property names
// const properties = Object.keys(openingHours);
// // returns an array
// console.log(properties);

// let openString = `we are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   openString += `${day}, `;
// }
// console.log(openString);

// * property values
// const values = Object.values(openingHours);
// console.log(values);

// * entries
// const entries = Object.entries(openingHours);
// console.log(entries);

// // destructuring both the entries array and the values object inside of it
// for( const [key, {open, close}] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}.`);
// }

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],

  // ! enhanced objects literal
  openingHours,

  //* order(star...) is the same as order: function(star...);
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(starterIndex, mainIndex, address, time);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`here's your pasta made with ${ing1}, ${ing2} and ${ing3}`);
  },
};

//! Maps
const restMap = new Map();
restMap.set('name', 'Classico Italiano');
restMap.set(1, 'Firenze, Italy');
restMap.set(2, 'Lisbon Portugal');
// *set also returns the map
// console.log(restMap.set(3, 'Madrid, Spain'));

// *chaining
restMap
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 8)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

// *reading map values
// console.log(restMap.get('name'));
// console.log(restMap.get(true));

// const time = 21;
// const openOrClosed = restMap.get( time > restMap.get('open') && time < restMap.get('close'))
// console.log(openOrClosed);

// console.log(restMap.has('categories'));
// console.log(restMap)
// restMap.delete(2);
// console.log(restMap.size);
// // restMap.clear();
// restMap.set(document.querySelector('h1'), 'Main Heading');
// const arr = [1,2,3];
// restMap.set(arr, "test");
// console.log(restMap);

// * convert objects to maps
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// * Map iteration
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again!']
]);
// console.log(restMap);
// console.log(question);

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === "number") {
    console.log(`Answer ${key}: ${value}`);
  }
}
// const answer = Number(prompt('Your answer', "0"));

// console.log(question.get(answer === question.get('correct')));

// * convert map to array
console.log([...restMap]);
console.log('XXXXXXXXXXXXXXXXXXXXXX');
console.log([...question.keys()]);
console.log([...question.values()]);
console.log([...question.entries()]);

// ! Sets
// const orderSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'pizza',
//   'Risotto',
//   'Pasta',
// ]);

// console.log(orderSet.size);
// console.log(orderSet.has('Pizza'));
// orderSet.add('Garlic bread');
// orderSet.add('Garlic bread');
// orderSet.delete('pizza');
// // orderSet.clear();
// console.log(orderSet);

// for (const order of orderSet) console.log(order);
// const restaurantStaffArray = ['Waiter', 'Chef', 'Waiter', 'Owner', 'Chef', 'Waiter'];
// const staffPositions = new Set(restaurantStaffArray);
// // const staffPositionsArray = [...staffPositions];
// const staffPositionsSize = new Set(restaurantStaffArray).size;
// console.log(staffPositionsSize);
// console.log(new Set('schmedtmann').size);

// ! Optional chaining
// operation only happens if objects before ?. exist
// console.log(restaurant.openingHours.mon?.open);

// for (const el of weekdays) {
// '??' instead of '||' not to count 0 as a false value
//   const open = restaurant.openingHours[el]?.open  ?? 'closed';
//   console.log(`On ${el} we're open at ${open}. `);
// }

//methods
// console.log(restaurant.order?.(0,1) ?? 'this method is not defined');
//arrays
// const users = [{nae: 'jonas', age: 21}];
// console.log(users[0]?.name ?? "user doesn't have a name");

// ! For-of loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) console.log(item[0]);

// for (const item of [...menu.entries()]) {
//   console.log(`Menu item ${item[0] + 1}: ${item[1]}`);
// }

// * the same, but with destructuring
// for (const [itemIndex, itemName] of menu.entries()) {
//   console.log(`Menu item ${itemIndex}: ${itemName}`);
// }

// const ingredients = [prompt(`Ingredient 1?`), prompt(`Ingredient 2?`), prompt(`Ingredient 3?`)]
// restaurant.orderPasta(...ingredients);

// const order = {
//   time: '23:23',
//   address: 'Long street 23',
//   mainIndex: 2,
//   starterIndex: 0
// }
// restaurant.orderDelivery({...order});

// let [starter1, main1] = restaurant.order(3, 2);
// console.log(starter1, main1, 'desctructured dishes');

// ! Array destructuring
// // const arrayToDestructure = ['a', 'b', 'c'];
// // const [el1, el2, el3] = arrayToDestructure;
// // console.log(el1, el2, el3);

// let [main, , secondary] = restaurant.mainMenu;
// console.log(main, secondary);

// // * changing main with secondary
// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // * the same as:
// [secondary, main] = [main, secondary];

// console.log(main, secondary);

// * nested destructuring
// const nestedArray = [2, 3, 4, [5, 6]];
// // , , , <- skipping 3 and 4
// const [i, , , [nr1, nr2]] = nestedArray;
// console.log(i, nr1, nr2);

// // * default values with destructuring
// // r=1 default value
// const [p = 1, q = 1, r = 1] = [8,9];
// console.log(p,q,r);

// ! Object destructuring
// object order doesn't matter so no need for skipping like in the array. Names must match
// const {name, openingHours, categories} = restaurant;
// console.log(name, openingHours, categories);

// * destructuring objects with custom names
// const {
//   name: myRestaurant,
//   openingHours: restaurantHours,
//   categories: foodPicks,
// } = restaurant;
// console.log(myRestaurant, restaurantHours, foodPicks);

// const {menu = 'haha', starterMenu: starters = []} = restaurant;
// console.log(menu, starters);

// * mutating variables when destructuring objects
// let a = 111;
// let b = 222;
// const obj = {a: 23, b: 8, c: 12};

// ({a, b} = obj);
// console.log(a, b);

// ! Nested objects
// const {fri: {open: o, close: c}} = restaurantHours;
// console.log(o, c);

// ! The spread operator
// const arr = [7, 8, 9];
// const newArr = [1, 2, 3, ...arr];
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'item spread 1', 'item spread 2']
// console.log(newMenu);

//useful for making array copies
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(...mainMenuCopy);

//joining arrays
// const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(...fullMenu)

//spread operator works on all iterables
// const str = 'Jonas';
// const letterArray = [...str, ' ', 'S.']
// console.log(letterArray);

// * spread with objects
// const restauraneNuevo = {...restaurant};
// const newRestaurant = {restaurant};
// console.log(restauraneNuevo, newRestaurant);

// ! Rest pattern and parameters
// * destructuring
// spread
// const arr = [1, 2, ...[3, 4, 5]];
// console.log(arr); // 1,2,3,4,5

//destructuring with Rest syntax
// const [a, b, ...others] = arr;
// console.log(a, b, others); // 1,2, [3,4,5]

//---
// const [pizza, , risotto, ...restOfTheMenu] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, risotto, restOfTheMenu); //skipped elements not included

// objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// * functions
// const add = function(...numbers) {
//   // rest syntax takes multiple arguments and packs them in one array, spreading results so only numbers are logged
//   console.log(...numbers);

//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(" XXXXXX " + sum);
// }

// add(2,3,3);
// add(3);
// add(34,56,7,8,4,2)

// const spreadAndRest = [21, 4, 5];
// add(...spreadAndRest);

// ! Short circuiting
// && ||, and or
// nullish coalescing operator

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// nullish operator looks at nullish values, not false values,
// nullish: null, undefined, (not 0, '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);
