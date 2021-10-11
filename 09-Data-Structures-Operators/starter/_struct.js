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
      close: 18,
    },
    sun: {
      open: 8,
      close: 20,
    },
  },

  getMeals: function (item1, item2) {
    return [this.mainMenu[item1], this.mainMenu[item2]];
  },
  orderDelivery: function ({
    time = '20:00',
    address = 'empty',
    mainIndex = 1,
    starterIndex = 0,
  }) {
    // console.log(time, address, starterIndex, mainIndex);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

// get thu as Thursday
// const {thu: Thursday, sun, nun = [null, 2]} = restaurant.openingHours;
// console.log(Thursday, sun, nun);

// mutating variables () requierd because {} (block) doesn't expect =
let a = 111;
let b = 999;
const obj = { a: 'AaA', b: 'BbB', c: 'CcC' };

({ a, b } = obj);
// console.log(a, b);

const {
  sun,
  sun: { open: react, close },
} = restaurant.openingHours;
// console.log(sun, react);

// const [nam,,, loc] = restaurant.categories;
// console.log(nam, loc);

// let [i, j] = restaurant.getMeals(0,2);
// [j, i] = [i, j];
// console.log(i, j, j);

// const arr = [7,8,9];
// const newArr = [1, 2, ...arr]
// console.log(newArr);

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu, 1111);

for (const el of menu.entries()) {
  console.log(el);
}
