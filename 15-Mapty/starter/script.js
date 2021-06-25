'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

class Workout {
	date = new Date();
	id = (Date.now() + '').slice(-10); //id = last 10 digits of the date string

	constructor(distance, duration, coords) {
		this.distance = distance; //km
		this.duration = duration; //min
		this.coords = coords; //[lat, lng]
	}
}

class Running extends Workout {
	constructor(coords, distance, duration, cadence) {
		super(distance, duration, coords);
		this.cadence = cadence;
		this.clacPace();
	}

	clacPace() {
		// min/km
		this.pace = this.duration / this.distance;
		return this.pace;
	}
}

class Cycling extends Workout {
	constructor(coords, distance, duration, elevationGain) {
		super(distance, duration, coords);
		this.elevationGain = elevationGain;
		this.calcSpeed();
	}

	calcSpeed() {
		// km/h
		this.speed = this.distance / (this.duration / 60);
		return this.speed;
	}
}

// const run1 = new Running([32,44], 32.2, 334, 122);
// const cycling1 = new Cycling([34,55], 345.5, 55, 34);
// console.log(run1, cycling1);

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
	//private instance properties
	#mainMap;
	#mapEvent;

	constructor() {
		//called immediately when an object is created from this class
		this._getPosition();
		//this in eventListeners is the parent DOM element, binding this to object class
		form.addEventListener('submit', this._newWorkout.bind(this));
		inputType.addEventListener('change', this._toggleElevationField);
	}

	_getPosition() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				//exec if success
				//treated as a function call, not a method call (it's a callback funciton). bind(this) point to the current obj.
				this._loadMap.bind(this),
				//exec if error
				() => {
					console.log(`something went wrong`);
				}
			);
		}
	}

	_loadMap(position) {
		//coords from the browser
		const { latitude, longitude } = position.coords;
		const coords = [latitude, longitude];

		//new leaflet map, coords and zoom
		this.mainMap = L.map('map').setView([...coords], 13);
		//map appearance
		L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
			attribution: '',
		}).addTo(this.mainMap);

		this.mainMap.on('click', this._showForm.bind(this));
	}

	_showForm(mapE) {
		//adding markers on map click
		this.mapEvent = mapE;
		form.classList.remove('hidden');
		inputDistance.focus();
	}

	_toggleElevationField() {
		inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
		inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
	}

	_newWorkout(e) {
		//reloading = default behav. of forms
		e.preventDefault();

		// get data from the form
		const type = inputType.value;
		const distance = +inputDistance.value; //input comes in as a string, + converts it to a number
		const duration = +inputDuration.value;

		// check if the data is valid

		// if form option value = running, create running obj
		if (type === 'running') {
			const cadence = +inputCadence.value;
			if (!Number.isFinite(cadence)) return;

		}
		// if form option value = cycling, create cycling obj
		if (type === 'cycling') {
			const elevationGain = +inputElevation.vlaue;
			if (!Number.isFinite(elevationGain)) return;

		}
			// add new obj. to the workout arr

			// render workout on the map as a marker

			// render workout on the side list

			// hide form, clear input
			inputDistance.value =
				inputCadence.value =
				inputElevation.value =
				inputDuration.value =
					'';

		//destructured map click latitude, longitude
		const { lat, lng } = this.mapEvent.latlng;
		// marker(position, options).chaining
		L.marker([lat, lng], {
			riseOnHover: true,
		})
			.addTo(this.mainMap)
			//create a popup that's attached to the marker
			.bindPopup(
				L.popup({
					maxWidth: 250,
					minWidth: 100,
					autoClose: false,
					closeOnClick: false,
					className: 'running-popup',
				}).setContent('Running')
			)
			.openPopup();
	}
}

const app = new App();
