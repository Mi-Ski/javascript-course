'use strict';
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Data
const account1 = {
	owner: 'Jonas Schmedtmann',
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
};
const account2 = {
	owner: 'Jessica Davis',
	movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
	interestRate: 1.5,
	pin: 2222,
};
const account3 = {
	owner: 'Steven Thomas Williams',
	movements: [200, -200, 340, -300, -20, 50, 400, -460],
	interestRate: 0.7,
	pin: 3333,
};
const account4 = {
	owner: 'Sarah Smith',
	movements: [430, 1000, 700, 50, 90],
	interestRate: 1,
	pin: 4444,
};

const currencies = new Map([
	['USD', 'United States dollar'],
	['EUR', 'Euro'],
	['GBP', 'Pound sterling'],
]);
const eurToUsd = 1.2;

const accounts = [account1, account2, account3, account4];

// ! username initials IIFE
((accountsArr) => {
	accountsArr.forEach((el) => {
		el.username = el.owner
			.toLowerCase()
			.split(' ')
			.map((el) => el[0])
			.join('');
	});
})(accounts);

/////////////////////////////////////
// const movementsEur = movements.map((el) => el * eurToUsd);
// console.log(movements, movementsEur);

// const movementsDescriptions = movements.map(
// 	(el, i) => `Movement ${i + 1}. You ${el > 0 ? 'deposited' : 'withdrew'} $${Math.abs(el)}.\n`
// );
// console.log(...movementsDescriptions);

const displayMovements = function (movements) {
	containerMovements.innerHTML = '';

	movements.forEach((el, index) => {
		const type = el > 0 ? 'deposit' : 'withdrawal';
		const html = `
			  <div class="movements__row">
				 <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
				 <div class="movements__value">${el}€</div>
			  </div>`;

		containerMovements.insertAdjacentHTML('afterbegin', html);
	});
};
displayMovements(account1.movements);

const calcTotalBalance = (acc) => {
	acc.balance = acc.movements.reduce((acc, el) => {
		return acc + el;
	}, 0);
	labelBalance.innerHTML = `${acc.balance}&euro;`;
};

const calcSumInOut = (movements, interestRate) => {
	const incomes = movements
		.filter((el) => {
			return el > 0;
		})
		.reduce((acc, el) => {
			return acc + el;
		}, 0);
	labelSumIn.innerHTML = `${incomes}&euro;`;

	const withdrawals = movements
		.filter((el) => {
			return el < 0;
		})
		.reduce((acc, el) => {
			return acc + el;
		}, 0);
	labelSumOut.innerHTML = `${Math.abs(withdrawals)}&euro;`;

	const interest = movements
		.filter((el) => el > 0)
		.map((el) => el * (interestRate / 100))
		.filter((el) => el >= 1)
		.reduce((acc, el) => acc + el, 0);
	labelSumInterest.innerHTML = `${interest}&euro;`;
};

const biggestValue = (movements) => {
	const max = movements.reduce((acc, el) => {
		return acc > el ? acc : (acc = el);
	}, movements[0]);
	// can't use 0 as an initial accumulator in case first value is negative
	return max;
};

const updateUI = (currentAccount) => {
	displayMovements(currentAccount.movements);
	calcTotalBalance(currentAccount);
	calcSumInOut(currentAccount.movements, currentAccount.interestRate);
};

const clearInputs = () => {
	inputLoginPin.value = inputLoginUsername.value = '';
	// blur makes the input lose focus
	inputLoginPin.blur();
	inputLoginUsername.blur();
};
///////////////////////////////
// ! global current account variable
let acc;

// * login
btnLogin.addEventListener('click', (event) => {
	// submitting forms reload the page on default, event.preventDefault();
	event.preventDefault();

	acc = accounts.find((el) => {
		return el.username === inputLoginUsername.value;
	});

	// optional chaining: pin only read if acc exists
	if (acc?.pin === Number(inputLoginPin.value)) {
		console.log(`login successful`);
		//welcome message
		labelWelcome.textContent = `Welcome back, ${acc.owner.split(' ')[0]}`;
		containerApp.style.opacity = 1;

		clearInputs();
		updateUI(acc);
	} else console.log(`wrong pin number`);
});

// * transferring money
btnTransfer.addEventListener('click', (event) => {
	event.preventDefault();
	const amount = Number(inputTransferAmount.value);
	const receiverAccount = accounts.find((el) => el.username == inputTransferTo.value);

	if (amount > 0 && receiverAccount && acc.balance >= amount && receiverAccount.username !== acc.username) {
		acc.movements.push(-amount);
		receiverAccount.movements.push(amount);

		clearInputs();
		updateUI(acc);
	}
});
