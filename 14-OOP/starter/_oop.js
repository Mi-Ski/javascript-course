'use strict';

// const Person = function (firstName, birthYear) {
// 	this.firstName = firstName;
// 	this.birthYear = birthYear;
// 	const x = () => console.log(1);
// }

// const jonas = new Person('Jonas', 1991);
// const matilda = new Person('matilda', 2000);
// console.log(jonas, matilda);
// console.log((matilda && jonas) instanceof Object);

// es6 classes

class Person {
	constructor(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	}

	calcAge() {
		console.log(this);
	}

	static hey() {
		console.log('Hey there');
	}
}

const jessica = new Person('jess', 1999);
Person.hey();

// const obj = {
// 	_prop: -1,

// 	get prop() {
// 		return this._prop;
// 	},

// 	/**
// 	 * @param {any} value
// 	 */
// 	set prop(value) {
// 		return this._prop = value;
// 	}
// }

// console.log(obj.prop);
// obj.prop = 12;
// console.log(obj.prop);

const PersonProto = {
	calcAge() {
		console.log(2021 - this.birthYear);
	}
}

const steve = Object.create(PersonProto);
console.log(steve);
console.log(steve.__proto__ === PersonProto);
steve.birthYear = 1998;
steve.calcAge();
