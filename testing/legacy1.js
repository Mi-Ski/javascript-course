const koalas = [23, 84, 27];
const dolphins = [85, 54, 41];

const calcAverage = (scores) => {
    const total = scores.reduce((prev, next) => {
        return prev + next;
    });

    const average = total / scores.length;
    return average;
};
const avgKoalas = calcAverage(koalas);
const avgDolphins = calcAverage(dolphins);

console.log(avgKoalas / avgDolphins);

const checkWinner = function () {
    const winner = Math.max(avgDolphins, avgKoalas);
    const loser = Math.min(avgDolphins, avgKoalas);

    const winnerName = (function () {
        if (avgKoalas > avgDolphins) return "Koalas";
        else if (avgKoalas < avgDolphins) return "Dolphins";
    })();

    const winCondition = function (w, l) {
        return w / l > 2;
    };

    if (winCondition(winner, loser))
        console.log(
            `The win condition was met and ${winnerName} won with an average of ${winner} points.`
        );
    else console.log("Noone won");
};

checkWinner(avgKoalas, avgDolphins);


// const friends = ['Michael', 'Jonas', 'Test'];
// friends.push('Peter');
// console.log(friends);


// console.log(friends.unshift('Start', 'End', ''));
// const popped = friends.pop();
// console.log(popped);

// friends.shift('')

// UNSHIFT PUSH SHIFT POP
// ?start
// *UNSHIFT
// !SHIFT
// ?end
// *PUSH
// *!POP

const calcTip = (billVal) => {
	if (billVal >= 50 && billVal <= 300) return billVal * .15
	else return billVal * .2
}

const bills = [125, 555, 44]
const tips = bills.map( el => calcTip(el))

const sum = bills.map( (el, i) => {
	return el + tips[i]
})

console.log(tips);
console.log(sum);

// obj literal syntax
const jonas = {
	firstName: 'Jonas',
	lastName: 'Schmedtmann',
	age: 2037 - 1991,
	friends: ['Michael', 'Peter', 'Max'],
	pet: {
		type: 'dog',
		breed: 'husky',
		age: '7'
	}
}

// dot notation
jonas.occupation = 'teacher'
// bracket notation
jonas[`country`] = 'Portugal'
console.log(jonas);