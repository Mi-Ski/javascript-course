'use strict';

const dogs = [
	{ weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
	{ weight: 8, curFood: 200, owners: ['Matilda'] },
	{ weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
	{ weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach((el) => {
	return (el.recommendedFood = el.weight ** 0.75 * 28);
});

const eatsTooMuch = (dog) => {
	return dog.curFood > dog.recommendedFood;
};
const eatsTooLittle = (dog) => {
	return dog.curFood < dog.recommendedFood;
};

const aliceDog = dogs.find((el) => el.owners.includes('Alice'));
console.log(`Alice's dog ${eatsTooMuch(aliceDog) ? 'is eating too much' : "isn't overeating."}`);

let ownersEatTooMuch = [];
let ownersEatTooLittle = [];

dogs.forEach((el) => {
	if (eatsTooMuch(el)) {
		ownersEatTooMuch.push(el.owners);
	} else if (eatsTooLittle(el)) {
		ownersEatTooLittle.push(el.owners);
	}
});
ownersEatTooMuch = ownersEatTooMuch.flat().join(' and ');
ownersEatTooLittle = ownersEatTooLittle.flat().join(' and ');
console.log(`${ownersEatTooMuch}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle}'s dogs eat too little!`);

console.log(dogs.some((el) => el.curFood === el.recommendedFood));

const okayAmmount = (dog) => {
	return dog.curFood > dog.recommendedFood * 0.9 && dog.curFood < dog.recommendedFood * 1.1;
};

console.log(dogs.some((el) => okayAmmount(el)));

const okayDogs = dogs.filter(okayAmmount);
console.log(okayDogs);

console.table(okayDogs);

//sorting the recommended food array
// slice for a shallow copy
const dogsSorted =  dogs.slice().sort( (a,b) => {
	return a.recommendedFood - b.recommendedFood;
})
console.log(dogsSorted);
