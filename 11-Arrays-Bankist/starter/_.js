'use strict';
// #region DOM Elements
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
// #endregion
// #region Accounts
// Data
const account1 = {
	owner: 'Jonas Schmedtmann',
	movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
	interestRate: 1.2, // %
	pin: 1111,
	//username: js,
	//balance: 3840
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

const accounts = [account1, account2, account3, account4];
// #endregion

const currencies = new Map([
	['USD', 'United States dollar'],
	['EUR', 'Euro'],
	['GBP', 'Pound sterling'],
]);
const eurToUsd = 1.2;

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const displayMovements = (movements, sort = false) => {
	containerMovements.innerHTML = '';

	const movs = sort ? movements.slice('').sort((a, b) => a - b) : movements;

	movs.forEach((el, i) => {
		const template = `
        <div class="movements__row">
          <div class="movements__type movements__type--${
				el >= 0 ? 'deposit' : 'withdrawal'
			}">${++i} deposit</div>
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${el}€</div>
        </div>
		`;
		containerMovements.insertAdjacentHTML('afterbegin', template);
	});
};

const compUsername = (accounts) => {
	accounts.forEach((el) => {
		el.username = el.owner
			.toLowerCase()
			.split(' ')
			.map((el) => el[0])
			.join('');
	});
	// return accounts;
};
compUsername(accounts);
console.log(...accounts);

const calcDisplayMovements = (acc, currency = '€') => {
	const balance = acc.movements.reduce((acc, el, i, arr) => {
		return acc + el;
	}, 0); // start from 0
	labelBalance.innerHTML = `${balance} ${currency}`;
	acc.balance = balance;
};

const calcDisplayBalance = (acc) => {
	const deposits = acc.movements
		.filter((el) => el > 0)
		.reduce((acc, el) => acc + el);
	labelSumIn.innerHTML = `${deposits}€`;
	const withdrawals = acc.movements
		.filter((el) => el <= 0)
		.reduce((acc, el) => acc + el);
	labelSumOut.innerHTML = `${Math.abs(withdrawals)}€`;

	const interest = acc.movements
		.filter((el) => el > 0)
		.map((el) => (el * acc.interestRate) / 100)
		.filter((el) => el >= 1)
		.reduce((acc, el) => acc + el);
	labelSumInterest.innerHTML = `${interest}€`;
};

btnTransfer.addEventListener('click', (e) => {
	e.preventDefault();

	const amount = Number(inputTransferAmount.value);
	const receiverAcc = accounts.find(
		(el) => el.username === inputTransferTo.value
	);
	console.log(amount, receiverAcc);

	if (
		amount > 0 &&
		activeAcc.balance >= amount &&
		receiverAcc.username !== activeAcc.username
	) {
		console.log(`Transfer valid.`);
		activeAcc.movements.push(-amount);
		receiverAcc.movements.push(amount);

		updateUI();
	}
	inputTransferAmount.value = inputTransferTo.value = '';
});

btnLoan.addEventListener('click', (e) => {
	e.preventDefault();
	const amount = Number(inputLoanAmount.value);
	if (amount > 1 && activeAcc.movements.some((el) => el >= amount * 0.1)) {
		activeAcc.movements.push(amount);
		updateUI();
	}
	inputLoanAmount.value = '';
});

btnClose.addEventListener('click', (e) => {
	e.preventDefault();

	if (
		inputCloseUsername.value === activeAcc.username &&
		Number(inputClosePin.value) === activeAcc.pin
	) {
		const index = accounts.findIndex(
			(acc) => acc.username === activeAcc.username
		);
		console.log(index);
		accounts.splice(index, 1); //mutates the original array
		containerApp.style.opacity = 0;
	}
	inputLoginPin.value = inputLoginUsername.value = '';
});

// LOGIN
let activeAcc;
btnLogin.addEventListener('click', (e) => {
	e.preventDefault();
	activeAcc = accounts.find((el) => el.username === inputLoginUsername.value);
	console.log(activeAcc);

	if (activeAcc.pin === Number(inputLoginPin.value)) {
		labelWelcome.textContent = `Welcome back, ${
			activeAcc.owner.split(' ')[0]
		}`;
		//
		inputLoginPin.value = inputLoginUsername.value = '';
		inputLoginPin.blur();
		inputLoginUsername.blur();
		//
		containerApp.style.opacity = 1;
		updateUI();
	}
});

const updateUI = () => {
	calcDisplayMovements(activeAcc);
	displayMovements(activeAcc.movements);
	calcDisplayBalance(activeAcc);
};

let sorted = false;
btnSort.addEventListener('click', function (e) {
	e.preventDefault();
	displayMovements(activeAcc.movements, !sorted);
	sorted = !sorted;
});

// const bodyColor = document.querySelector('body').style;
// const blue = 'blue';
// const powderblue = 'powderblue';

// bodyColor.backgroundColor = powderblue;
// let currentPowderBlue = true;

// const switchBodyColor = () => {
// 	if (currentPowderBlue) {
// 		bodyColor.backgroundColor = blue;
// 		currentPowderBlue = false;
// 	} else if (!currentPowderBlue){
// 		bodyColor.backgroundColor = powderblue;
// 		currentPowderBlue = true;
// 	}
// };

// function interval() {
// 	setInterval(switchBodyColor, 100);
// }
// interval();
