'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function({starterIndex, mainIndex, time, address}) {
    console.log(starterIndex, mainIndex, address, time);
  },

  orderPasta: function(ing1, ing2, ing3) {
    console.log(`here's your pasta made with ${ing1}, ${ing2} and ${ing3}`);
  }
};

// const ingredients = [prompt(`Ingredient 1?`), prompt(`Ingredient 2?`), prompt(`Ingredient 3?`)]
// restaurant.orderPasta(...ingredients);

// restaurant.orderDelivery({
//   time: '23:23',
//   address: 'Long street 23',
//   mainIndex: 2,
//   starterIndex: 0
// })

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
const arr = [7, 8, 9];
const newArr = [1, 2, 3, ...arr];
console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'item spread 1', 'item spread 2']
console.log(newMenu);

//useful for making array copies
const mainMenuCopy = [...restaurant.mainMenu];
console.log(...mainMenuCopy);

//joining arrays
const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(...fullMenu)

//spread operator works on all iterables
const str = 'Jonas';
const letterArray = [...str, ' ', 'S.']
console.log(letterArray);

// * spread with objects
const restauraneNuevo = {...restaurant};
const newRestaurant = {restaurant};
console.log(restauraneNuevo, newRestaurant);
