'use strict';
// for (var i = 0; i <= 5; i++) {
// 	function domkniecie(aktualnaWartosc) {
// 		setTimeout(() => {
// 			console.log(aktualnaWartosc);
// 		}, aktualnaWartosc * 1000);
// 	}
// 	domkniecie(i);
// }
// console.log(i);

// function x() {
// 	var i = 1;
// 	setTimeout(() => {
// 		console.log(i);
// 	}, 1000);
// 	console.log("namaste");
// }
// x();

// for (let i = 0; i < 3; i++) {
//   function domk(arg) {
//     setTimeout(() => {
//       console.log(arg);
//     }, 1000 + arg);
//   };

//   domk(i);
// }

// const a = "Jonas";
// first();

// function first() {
// 	const b = "Hello!";
// 	second();

// 	function second() {
// 		const c = "hi!";
// 		third();
// 	}
// }

// function third () {
// 	const d = "hey";
// 	// console.log(d + c);
// }

// function whatever () {
// 	for (var i = 1; i < 2; i++) { console.log(i);};
// 	console.log(i)
// }
// whatever();

// function calcAge(birthYear) {
// 	let age = 2027 - birthYear;
// 	console.log(firstName);

// 	if(true) {
// 		age = 12;
// 	}

// 	function printAge() {
// 		console.log(age);
// 	}
// 	printAge();
// }
// const firstName = 'ding'

// calcAge(2999);

// console.log(this);

// const calcAgeArrow = birthYear  => {
// 	const second = () => {
// 		console.log(this, 11);
// 	}
// 	return second();
// }

// calcAgeArrow();

// const jonas = {
// 	year: 3000,
// 	// calcAge: () => {console.log(`${this.year}`)},
// 	calcAge: function () {
// 		console.log(`${this.year}`);
// 	}
// }

// const matilda = {
// 	year: 2021
// }

// matilda.returnAge = jonas.calcAge;

// matilda.returnAge();

// var firstName = "he"
// const jonas = {
// 	firstName: 'Jonas',
// 	year: 3000,

// ! self = this
// calcAge: function () {
// 	console.log(`${this.year}`);

// 	const self = this;
// 	const isMillenial = function () {
// 		console.log(self.year);
// 	}
// 	isMillenial();
// },
// ! arrow funct this
// 	calcAge: function () {
// 		console.log(this);

// 		const isMillenial = () => {
// 			console.log(this.year, 22);
// 		}
// 		isMillenial();
// 	},

// 	greet: () => {console.log(`hey, ${this.firstName}`);}
// }
// jonas.calcAge();

for (var i = 1; i < 4; i++) {
  const closure = j => {
    setTimeout(() => {
      console.log(j);
    }, i * 1000);
  };
  closure(i);
}
