// const button = document.getElementById('nameBtn');
// const textArea = document.getElementById('nameText');

// const submitNames = function() {
//    let receivedData = textArea.value;
//    textArea.value = '';
//    // console.log(namesDate);
//    // document.body.append(document.createElement('h5').innerHTML = namesDate)
//    // document.body.append(document.createElement('br'))
//    // console.log(receivedData);
//    let checkmarkCounter = 0;

//    const splitData = receivedData.split('\n');
//    for (let el of splitData) {
//       checkmarkCounter ++;
//       let checkmark = '✅'.repeat(checkmarkCounter);

//       el = el.toLowerCase().trim();
//       [left, right] = el.split('_');
//       right = right.replace(right[0], right[0].toUpperCase());
//       el = left+right;
//       console.log(el.padEnd(20), checkmark);
//    }
// };

// button.addEventListener('click', submitNames);

const flightsRaw =
	'_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flights = flightsRaw.split('+');

for (let el of flights) {
	el = el.split(';');

	el[0] = el[0].slice(1).split('_').join(' ');

	if (el[0].includes('Delayed')) {
		el[0] = el[0].replace('Delayed', '⨉ Delayed');
	}
	
	let [, from, to] = el;
	from = from.slice(0, 3).toUpperCase();
	to = to.slice(0, 3).toUpperCase();

	el[1] = from;
	el[2] = to;

	el[3] = el[3].split(":").join('h');

	const finalString = `${el[0]} from ${el[1]} to ${el[2]} (${el[3]})`;
	console.log(finalString.padStart(40));
}