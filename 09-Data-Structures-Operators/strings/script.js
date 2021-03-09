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
const plane = 'A320';
// for (const el of plane) console.log(el);
console.log(plane[0]);
console.log('B737'[1]);
console.log(plane.length);
console.log('B737'.length);
console.log(airline.indexOf('r'));
console.log(airline.lastIndexOf('r'));

console.log(airline.indexOf('tugal'));
// returns -1 if index can't be found