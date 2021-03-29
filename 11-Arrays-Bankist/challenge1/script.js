'use strict';

const data1 = {
	julia: [3, 5, 2, 12, 7],
	kate: [4, 1, 15, 8, 3],
};
const data2 = {
	julia: [9, 16, 6, 8, 3],
	kate: [10, 5, 6, 1, 4],
};

const data = [data1, data2];

const checkDogs = function (dogsJulia, dogsKate) {
	const shallowJulia = [...dogsJulia];
	shallowJulia.splice(0, 1);
	shallowJulia.splice(-2);

	const concated = shallowJulia.concat(dogsKate);
	console.log(concated);

	concated.forEach(function (el, index) {
		const dogAge = el > 3 ? 'adult' : 'puppy';
		console.log(`Dog number ${index + 1} is a/an ${dogAge} at ${el}`);
	});
};

data.forEach(function (el) {
	const { julia: dogsJulia, kate: dogsKate } = el;
	checkDogs(dogsJulia, dogsKate);
});
