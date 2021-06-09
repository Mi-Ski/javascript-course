'use strict';

// // //constructor function
// // const Person = function (firstName, lastName, birthYear) {
// //    //instance properties
// //    this.firstN = firstName;
// //    this.lastN = lastName;
// //    this.birthY = birthYear;
// // }

// // const miski = new Person('Mi', 'Ski', 1222);
// // const matni = new Person('Matilda', 'Nind', 1899);
// // // console.log(matni.lastN);
// // // console.log(!(matni instanceof Person));

// // // matni.calcAge();
// // Person.prototype.printName = function() {
// //    console.log(`My name is ${this.firstN}`);
// // }

// // // miski.printName();
// // // console.log(miski.constructor);
// // // console.log(miski.__proto__);
// // // console.log({Person});
// // // console.log(miski.__proto__ === Person.prototype);

// // // console.log(Person.prototype.isPrototypeOf(miski), 1);

// // Person.prototype.isHuman = true;
// // // matni.isHuman = true;
// // // matni.__proto__.isHuman = false;
// // // console.log(matni);
// // // console.log(matni.hasOwnProperty("isHuman"));
// // console.log(miski.__proto__ === Person.prototype);
// // console.dir(Person.prototype.constructor);

// // const arr = [123,123,3,3];
// // console.log(arr.__proto__.__proto__ === Object.prototype);

// // Array.prototype.unique = function () {
// //    return [...new Set(this)];
// // }

// // console.log(arr.__proto__);

// //!
// // const Car = function (make, speed) {
// //   this.carMake = make;
// //   this.carSpeed = speed;
// // };

// // Car.prototype.accelerate = function () {
// //   this.carSpeed += 10;
// //   console.log(this.carSpeed);
// // };

// // Car.prototype.brake = function () {
// //   this.carSpeed -= 5;
// //   console.log(this.carSpeed);
// // };

// // const mercedes = new Car('Mercedes', 100);
// // mercedes.accelerate();
// // mercedes.brake();

// // const bmw = new Car('BMW', 70);
// // bmw.brake();

// // * js classes are just special functions so both expressions and declarations can be used

// // !class expression
// // const Person = class {

// // }

// //! class declaration
// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.year = birthYear;
//   }

//   // all methods will be on the prototype, not objects themselves
//   clacAge() {
//     const now = new Date().getFullYear();
//     return now - this.year;
//   }

//   greetings() {
//     console.log(`Greetings, ${this.fullName}.`);
//   }

//   set fullName(name) {
//     if(name.includes(' ')){
//       this._fullName = name;
//     } else console.log('not a full name');
//   }
//   get fullName() {
//     return this._fullName;
//   }

//   get age() {
//     return 2021 - this.year;
//   }

//   // get longName() {
//   //   let long = [];
//   //   let nameSplit = this.fullName.split('');
//   //   nameSplit.forEach(el => {
//   //     long.push(`${el}${el}`);
//   //   });
//   //   return long.join('');
//   // }
// }

// const person1 = new Person('Alexander', 2000);
// person1.fullName = "Alexander And";
// console.log(person1);
// // person1.greetings();
// console.log(person1.fullName);

// const person2 = new Person('Michael', 1928);
// console.log(person2.longName);

// Person.prototype.greet = function () {
//   console.log(`Hey ${this.fullName}!`);
// };

// const walter = new Person('walter f', 3999);
// console.log(walter.fullName);
// // console.log(person1.__proto__);
// person1.greet();

// // setters, getters
// const account = {
//   owner: 'MiSki',
//   latest: 2,
//   movements: [233, 4, -23, 233],

//   //getter
//   // get latest(){
//   //   return this.movements.pop();
//   // },
//   //setter
//   set latest(el) {
//     if (typeof el === 'number') this._latest = el;
//     else console.log('not a number');
//   },
//   get latest() {
//     return this._latest;
//   },
// };

// // account.latest = 'd';
// // console.log(account.latest);
// // console.log(account);

// console.log(Number.parseInt('32.9'));

// const protoObj = {
//   helllo: 'dd',
//   calcAge() {
//     return 2021 - this.birthYear;
//   },

//   init(name, year) {
//     this.firstName = name;
//     this.birhtYear = year;
//   }
// }

// const steven = Object.create(protoObj);
// steven.birthYear = 1994;
// console.log(steven.calcAge());

// console.log(steven.__proto__);

// const sarah = Object.create(protoObj);
// sarah.init('Sarah', 1981);
// console.log(sarah);

// class Car {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   Accelerate() {
//     return this.speed += 10;
//   }
//   Brake() {
//     return this.speed -= 5;
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed){
//     this.speed = speed * 1.6;
//   }
// }

// const bmw = new Car('BMW', 10);
// console.log(bmw.speed);
// console.log(bmw.speedUS);

// bmw.speedUS = 50;
// console.log(bmw);

// //* Person - parent class, Student - child class

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// }

// Person.prototype.calcAge = function () {
//   console.log(2021 - this.birthYear);
// }

// const Student = function(firstName, birthYear, course) {
//   //function calls don't have their own this keyword
//   //? this keyword in Person function will be set to Student function
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// }

// //? linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}.`);
// }

// const mike = new Student ('Mike', 1997, 'CompSci');
// console.log(mike);

// Student.prototype.constructor = Student;
// console.log(mike);

// const Car = function (make, speed) {
// 	this.make = make;
// 	this.speed = speed;
// };

// const EV = function(charge, make, speed) {
// 	//using EV's parameters in the parent class
// 	Car.call(this, make, speed);
// 	this.charge = charge;
// }
// //linking proto
// EV.prototype = Object.create(Car.prototype);
// EV.prototype.chargeBattery = function(chargeTo) {
// 	this.charge = chargeTo;
// 	console.log(`${this.make}'s battery is at ${this.charge}%`);
// }
// EV.prototype.accelerate = function () {
// 	this.speed += 10;
// 	this.charge -=1;
// 	console.log(`${this.make} is going ${this.speed}km/h. (${this.charge}% charge)`);
// };

// const tesla = new EV(90, 'Tesla', 100);

// tesla.chargeBattery(10);

// tesla.accelerate();

// ! Object.create() inheritance
// const PersonProto = {
//   calcAge() {
//     console.log(2021 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// }

// const steven = Object.create(PersonProto);
// steven.init('Steven', 2000);
// steven.calcAge();

// const StudentProto = Object.create(PersonProto);

// StudentProto.init = function(firstName, birthYear, course, school) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
//   this.school = school;
// }

// StudentProto.introduce = function() {
//   console.log(`Hi, I'm ${this.firstName} and I go to the ${this.school} school.`);
// }

// const jay = Object.create(StudentProto);
// jay.init('jay', 2007, 'compsci', 'ucla');

// const person1 = Object.create(PersonProto);
// person1.init('Peter', 1994);

// console.log(jay);
// jay.introduce();

// //! class inheritance
// class Person {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.year = birthYear;
//   }
//   // all methods will be on the prototype, not objects themselves
//   calcAge() {
//     const now = new Date().getFullYear();
// 	console.log(now - this.year);
//   }
//   greetings() {
//     console.log(`Greetings, ${this.fullName}.`);
//   }
//   set fullName(name) {
//     if(name.includes(' ')){
//       this._fullName = name;
//     } else console.log('not a full name');
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   get age() {
//     return 2021 - this.year;
//   }
//   static hey() {
// 	  console.log(`Hey!	`);
//   }
// }

// // extends keyword links prototypes
// class Student extends Person {
// 	//constructor not needed when the subclass has exactly the same properties as the parent class
// 	constructor(name, birthY, course) {
// 		// super = constructor funciton of the parent class
// 		//responsible for creating this keyword in this subclass, needs to happen first
// 		super(name, birthY);
// 		this.course = course;
// 	}

// 	introduce() {
// 		console.log(`Hi, I'm ${this.fullName}, I'm ${this.age} years old.`);
// 	}

// 	calcAge() {
// 		console.log(`${this.fullName} is ${2021 - this.year} yo`);
// 	}
// }

// const martha = new Student('Martha ', 2010, 'CompSci');
// console.log(martha);
// martha.calcAge();

// class Account {
// 	// * public fields will be set on every instance, not on the prototype
//   locale = navigator.language;
//   // * private fields
//   #movements =  []; 
//   #pin;
//   //pin is being set to private undefined, being set later by the constructor

// 	constructor(owner, currency, pin) {
// 		this.owner = owner;
// 		this.currency = currency;
// 		this.#pin = pin;
// 		// underscore - proteced property
// 		// this._movements = [];
// 		// this.locale = navigator.language;
// 		console.log(`Thanks for opening a new account, ${this.owner}.`);
// 	}
// 	getMovements() {
// 		return this.#movements;
// 	}
//   getPin() {
//     return this.#pin;
//   }

// 	//public interface for object methods
// 	deposit(val) {
// 		this.#movements.push(val);
//     return this;
// 	}
// 	withdraw(val) {
// 		this.deposit(-val);
//     return this;
// 	}

// 	requestLoan(val) {
// 		if (this.#approveLoan(val)) {
// 			this.deposit(val);
// 			console.log(`Loan of ${val} approved!`);
//       return this;
// 		}
// 	}
//   //* private methods
// 	#approveLoan(val) {
// 		return true;
// 	}

//   static helper() {
//     // window.open('https://i.kym-cdn.com/photos/images/newsfeed/001/557/977/7b5.png')
//   }
// }

// const acc1 = new Account('Jonas', 'EUR', 2222);
// // console.log(acc1);
// console.log(acc1.getPin());
// Account.helper();

// acc1.deposit(200).requestLoan(10000).withdraw(230).withdraw(2000);
// console.log(acc1);

//! ev challenge
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} => ${this.speed}`);
    return this;
  }
  brake() {
    this.speed -= 10;
    console.log(`${this.make} => ${this.speed}`);
    return this;
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedFromUS(speedUS) {
    this.speed = speedUS * 1.6;
  }
}

class EV extends Car {
  #charge;
  constructor(make, speed, charge) {
    super(make,speed);
    this.#charge = charge;
  }
  accelerate() {
    this.speed += 10;
    this.#charge -= 1;
    console.log(`${this.make} => ${this.speed} (${this.#charge}%)`);
    return this;
  }
  brake() {
    this.speed -= 10;
    this.#charge += .5;
    console.log(`${this.make} => ${this.speed} (${this.#charge}%)`);
    return this;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    console.log(`${this.make} => charge (${this.#charge}%)`);
  }
}

const rivian = new EV('Rivian', 120, 23);
console.log(rivian.accelerate());
rivian.accelerate().brake().brake().accelerate();
console.log(rivian.speedUS);
