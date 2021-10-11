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
// console.log(openingHours);

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],

  openingHours: {
    thu: {
      open: 12,
      close: 18
    },
    sun: {
      open: 8,
      close: 20
    }
  },

  getMeals: function(item1, item2) {
	  return [this.mainMenu[item1], this.mainMenu[item2]]
  }
}

// get thu as Thursday
const {thu: Thursday, sun, nun = [null, 2]} = restaurant.openingHours;
console.log(Thursday, sun, nun);

// mutating variables () requierd because {} (block) doesn't expect =
let a = 111;
let b = 999;
const obj = {a: "AaA", b: "BbB", c: "CcC"};

({a, b} =  obj);
console.log(a, b);

// const [nam,,, loc] = restaurant.categories;
// console.log(nam, loc);

// let [i, j] = restaurant.getMeals(0,2);
// [j, i] = [i, j];
// console.log(i, j, j);
