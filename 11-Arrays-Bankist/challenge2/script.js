'use strict';

const data1 = [5, 2, 4, 1, 15, 8, 3];
const data2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAge = (data) => {
	const dogHumanAge = data
		.map((el) => (el <= 2 ? 2 * el : 16 + el * 4))
		.filter((el) => el >= 18)
		.reduce((acc, el, i, arr) => acc + el / arr.length, 0);
	return dogHumanAge;
};
console.log(calcAverageHumanAge(data1));
console.log(calcAverageHumanAge(data2));