'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2021-04-01T10:51:36.790Z',
    '2021-04-05T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions

const formatCurrency = (value, locale, currency) => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
};

const formatMovementDate = function (date, locale) {
  const daysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const passed = daysPassed(new Date(), date);

  if (passed === 0) return 'Today';
  if (passed === 1) return 'Yesterday';
  if (passed <= 7 && passed != 0 && passed != 1) return `${passed} days ago`;
  else {
    // const day = `${date.getDate()}`.padStart(2, 0);
    // const month = `${date.getMonth() + 1}`.padStart(2, 0);
    // const year = date.getFullYear();
    // return `${day}/${month}/${year}`;
    return new Intl.DateTimeFormat(locale).format(date);
  }
};

const displayMovements = function (account, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(account.movementsDates[i]);
    const displayDate = formatMovementDate(date, account.locale);

    const formattedMov = formatCurrency(mov, account.locale, account.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
          <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${formatCurrency(
    acc.balance,
    acc.locale,
    acc.currency
  )}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCurrency(incomes, acc.locale, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCurrency(out, acc.locale, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCurrency(
    interest,
    acc.locale,
    acc.currency
  );
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);
  // Display balance
  calcDisplayBalance(acc);
  // Display summary
  calcDisplaySummary(acc);
  // reset timer
  clearInterval(timer); 
  timer = startLogoutTimer();
};

const startLogoutTimer = () => {
  const tick = function () {
    // in each call print t he remeaining time to UI
    const min = Math.floor(time / 60);
    const seconds = (time % 60).toString().padStart(2, 0);

    labelTimer.textContent = `${min}:${seconds}`;
    if (time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
    }

    time--;
  };
  // set time to 5m inutes
  let time = 300;
  // call the timer every second
  tick();
  const timer = setInterval(tick, 1000);
  return timer;
  // when time is at 0 stiop timer, log out user
};

///////////////////////////////////////
// Event handlers
let currentAccount, timer;

// // fake always logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 1;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 1;

    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long',
      year: '2-digit',
      weekday: 'short',
    };
    const locale = currentAccount.locale;
    labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(
      now
    );

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // timer
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Add movement date
    currentAccount.movementsDates.push(new Date().toISOString());
    // Simulate processing time Update UI
    setTimeout(() => updateUI(currentAccount), 1300);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
// setInterval( () => {
//   const seconds = (new Date().getSeconds().toString(10)).padStart(2, '0');
//   const minutes = (new Date().getMinutes().toString(10)).padStart(2, '0');
//   const hours = (new Date().getHours().toString(10)).padStart(2, '0');
//   console.log(`${hours}:${minutes} ${seconds}`);
// }, 1000)

// console.log(.1+.2);
// console.log(Number('23'));
// console.log(+'23');

// //radix, base 10
// console.log(Number.parseInt('3434h3h', 10));
// console.log(Number.parseInt('2.5', 10));
// console.log(parseFloat('2.5', 10));

// // check if value is NaN
// console.log(Number.isNaN(23));
// console.log(isNaN(+'23,'));

// // check if value is a number
// console.log(Number.isFinite(234));
// console.log(isFinite(234/0));

// console.log(Number.isInteger(34));
// console.log(Number.isInteger(34.0));

// // square root
// console.log(Math.sqrt(25));
// console.log(8 ** (1 / 3));
// console.log(Math.max(34, 55, 64, 2, '2344', 34));

// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// console.log(randomInt(23, 45));

// // rounding integers
// console.log(Math.round(34.3));
// console.log(Math.round(34.9));

// console.log(Math.ceil(234.1));
// console.log(Math.floor(234.9));

// console.log(Math.trunc(34.3));
// console.log(Math.trunc(-34.3));

// //rounding floats
// console.log(+(2.34).toFixed());
// console.log((2.3434).toFixed(8));

// // the remainder operator
// console.log(10 % 6);

// const isEven = number => number % 2 === 0;
// console.log(isEven('3'));

// console.log();

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach(function (
//     el,
//     index
//   ) {
//     if (index % 2 === 0) el.style.backgroundColor = 'orangered';
//     if (index % 3 === 0) el.style.backgroundColor = 'powderblue';
//   });
// });

// // bigInt
// console.log(2 ** 53 - 1);
// console.log(Number.MAX_SAFE_INTEGER);
// console.log(2 ** 53);
// console.log(2 ** 53 + 1);
// console.log(2n ** 53n + 1n);

// const huge = 2n ** 53n + 1n;
// console.log(typeof huge);
// //explicit conversion
// console.log(huge + BigInt(0));
// console.log(20n === 20);

// console.log(11n / 3n); //cuts the decimal part off

// const now = new Date();
// const christmass = new Date('Dec 24 2021 18:23:44');
// const alsoChristmass = new Date('December 24, 2021');
// console.log(christmass, ' ', alsoChristmass);

// console.log(new Date(account1.movementsDates[0]));
// // months are 0 based
// console.log(new Date(2021, 1, 9, 17, 15, 0));
// // unix time
// console.log(new Date(0));
// // 3 days later than the unix time
// console.log(new Date(3 * 24 * 60 * 60 * 1000) );

// // working with dates
// const future = new Date(2021, 1, 9, 17, 15);
// // getFullYear, not getYear
// console.log(future.getFullYear(0));
// // getMonth: 0 based
// console.log(future.getMonth());
// // getDate() = get day
// console.log(future.getDate());
// // getDay() = day of the week (tues = 2)
// console.log(future.getDay());

// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());

// // ISO international standard string
// console.log(future.toISOString());

// // timestamp = miliseconds which have passed since january 1st 1970
// console.log(future.getTime());

// const fromTimestamp = new Date(1612887300000);
// console.log(fromTimestamp.getTime() === future.getTime());

// // timestamp of now
// console.log(Date.now());

// // setting
// future.setFullYear(2050);
// console.log(future);

// const future = new Date(2037, 1, 9, 17, 15);
// console.log(+future);

// console.log(daysPassed(new Date(2038, 3, 15), new Date(2038, 3, 29)));
