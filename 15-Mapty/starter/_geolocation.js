"use strict";

const form = document.querySelector(".form");
const containerWorkouts = document.querySelector(".workouts");
const inputType = document.querySelector(".form__input--type");
const inputDistance = document.querySelector(".form__input--distance");
const inputDuration = document.querySelector(".form__input--duration");
const inputCadence = document.querySelector(".form__input--cadence");
const inputElevation = document.querySelector(".form__input--elevation");

class Workout {
	date = new Date();
	id = (Date.now() + "").slice(-10);

	constructor(coords, distance, duration) {
		this.coords = coords;
		this.distance = distance;
		this.duration = duration;
	}

	_setDescription() {
		// prettier-ignore
		const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

		this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
			months[this.date.getMonth()]
		} ${this.date.getDay()}`;
	}
}

class Running extends Workout {
	type = "running";

	constructor(coords, distance, duration, cadence) {
		super(coords, distance, duration);
		this.cadence = cadence;
		this.calcPace();
		this._setDescription();
	}

	calcPace() {
		this.pace = this.duration / this.distance;
		return this;
	}
}

class Cycling extends Workout {
	type = "cycling";

	constructor(coords, distance, duration, elevationGain) {
		super(coords, distance, duration);
		this.elevationGain = elevationGain;
		this.calcSpeed();
		this._setDescription();
	}

	calcSpeed() {
		this.speed = this.distance / (this.duration / 60);
		return this;
	}
}

class App {
	#map;
	#mapEvent;
	#workouts = [];

	constructor() {
		this._getPosition();
		form.addEventListener("submit", this._newWorkout.bind(this));
		inputType.addEventListener("change", this._toggleElevationField);
		containerWorkouts.addEventListener("click", this._moveToPopup.bind(this));

		this._getLocalStorage();
	}

	_getPosition() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), () => {
				alert("Could not get your location.");
			});
		}
	}

	_loadMap(position) {
		console.log(position);
		const { latitude } = position.coords;
		const { longitude } = position.coords;
		const coords = [latitude, longitude];
		console.log(latitude, longitude);

		this.#map = L.map("map").setView(coords, 13);

		L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
			attribution: "openstreetmap.org",
		}).addTo(this.#map);

		this.#map.on("click", this._showForm.bind(this));

		this.#workouts.forEach((el) => {
			this._renderWorkoutMarker(el);
		});
	}

	_showForm(e) {
		this.#mapEvent = e;
		form.classList.remove("hidden");
		inputDistance.focus();
	}

	_hideForm() {
		inputDistance.value =
			inputDuration.value =
			inputCadence.value =
			inputElevation.value =
				"";

		form.classList.add("hidden");
	}

	_toggleElevationField() {
		inputElevation.closest(".form__row").classList.toggle("form__row--hidden");
		inputCadence.closest(".form__row").classList.toggle("form__row--hidden");
	}

	_newWorkout(e) {
		const validInputs = (...inputs) =>
			inputs.every((el) => {
				return Number.isFinite(el);
			});
		const arePositive = (...inputs) => inputs.every((el) => el > 0);

		e.preventDefault();

		const type = inputType.value;
		// + converts string to a number
		const distance = +inputDistance.value;
		const duration = +inputDuration.value;
		const { lat, lng } = this.#mapEvent.latlng;
		let workout;

		if (type === "running") {
			const cadence = +inputCadence.value;
			if (
				!validInputs(distance, duration, cadence) ||
				!arePositive(distance, duration, cadence)
			) {
				return alert("Inputs have to be positive numbers!");
			}
			workout = new Running([lat, lng], distance, duration, cadence);

			this.#workouts.push(workout);
			console.log(workout);
		}

		if (type === "cycling") {
			const elevationGain = +inputElevation.value;
			if (
				!validInputs(distance, duration, elevationGain) ||
				!arePositive(distance, duration, elevationGain)
			) {
				return alert("Inputs have to be positive numbers!");
			}
			workout = new Cycling([lat, lng], distance, duration, elevationGain);

			this.#workouts.push(workout);
			console.log(workout);
		}

		this._renderWorkoutMarker(workout);

		// render workout on the list
		this._renderWorkoutList(workout);

		// clear input fields
		this._hideForm();

		// set local storage
		this._setLocalStorage();
	}

	_renderWorkoutMarker(workout) {
		L.marker(workout.coords)
			.addTo(this.#map)
			.bindPopup(
				L.popup({
					maxWidth: 250,
					minWidth: 150,
					autoClose: false,
					closeOnClick: false,
					className: `${workout.type}-popup`,
				})
			)
			.setPopupContent(
				`${workout.type === "running" ? "🏃‍♂️" : "🚴‍♂️"} ${workout.description}`
			)
			.openPopup();
	}

	_renderWorkoutList(workout) {
		let html = `
		<li class="workout workout--${workout.type}" data-id="${workout.id}">
          <h2 class="workout__title">${workout.description}</h2>
          <div class="workout__details">
            <span class="workout__icon">‍${
							workout.type === "running" ? "🏃‍♂️" : "🚴‍♂️"
						}</span>
            <span class="workout__value">${workout.distance}</span>
            <span class="workout__unit">km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⏱</span>
            <span class="workout__value">${workout.duration}</span>
            <span class="workout__unit">min</span>
          </div>
		`;

		if (workout.type === "running") {
			html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.pace.toFixed()}</span>
            <span class="workout__unit">min/km</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">🦶🏼</span>
            <span class="workout__value">${workout.cadence}</span>
            <span class="workout__unit">spm</span>
          </div>
        </li>
			`;
		}

		if (workout.type === "cycling") {
			html += `
          <div class="workout__details">
            <span class="workout__icon">⚡️</span>
            <span class="workout__value">${workout.speed}</span>
            <span class="workout__unit">km/h</span>
          </div>
          <div class="workout__details">
            <span class="workout__icon">⛰</span>
            <span class="workout__value">${workout.elevationGain}</span>
            <span class="workout__unit">m</span>
          </div>
        </li>
			`;
		}

		form.insertAdjacentHTML("afterend", html);
		this._hideForm();
	}

	_moveToPopup(e) {
		const workout = e.target.closest(".workout");
		if (!workout) return;

		const el = this.#workouts.find((wk) => wk.id === workout.dataset.id);
		console.log(el);

		this.#map.setView(el.coords, 13, {
			animate: true,
			pan: {
				duration: 1,
			},
		});
	}

	_setLocalStorage() {
		localStorage.setItem("workouts", JSON.stringify(this.#workouts));
	}
	_getLocalStorage() {
		const data = JSON.parse(localStorage.getItem("workouts"));
		console.log(data);

		if (!data) return;
		this.#workouts = data;
		this.#workouts.forEach((el) => {
			this._renderWorkoutList(el);
		});
	}

	reset() {
		localStorage.removeItem("workouts");
		location.reload();
	}
}

const app = new App();
