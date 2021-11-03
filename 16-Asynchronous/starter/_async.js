"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const renderCountry = function (data, className = "") {
  const html = `
        <article class="country ${className}">
          <img class="country__img" src="${Object.values(data.flags)[0]}" />
          <div class="country__data">
            <h3 class="country__name">${Object.values(data.name)[0]}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(
              +data.population / 1000000
            ).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${Object.values(data.languages)[0]}</p>
            <p class="country__row"><span>💰</span>${
Object.keys(data.currencies)[0]
            }</p>
          </div>
        </article>
  `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v2/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     const [data] = JSON.parse(this.responseText);
//     console.log(data);
//     renderCountry(data);

//     //neighbour
//     const [neighbour] = data.borders;

//     if(!neighbour) return;
//     //ajax call 2 (neighbor)
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
//     request2.send();

//     request2.addEventListener('load', function () {
//       const data2 = JSON.parse(this.responseText);
//       console.log(data2);
//       renderCountry(data2, 'neighbour');
//     })
//   });
// };

// getCountryAndNeighbour("france");

const renderError = function (msg) {
  countriesContainer.insertAdjacentText("beforeend", msg);
  countriesContainer.style.opacity = 0;
};

const getJSON = function (url) {
   fetch(url).then( el => {
      if (!el.ok) throw new Error(`Country not found ${el.status}`);

      return el.json();
   }) 
}

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((el) => {
      return el.json();
    })
    .then((el) => {
      console.log(el);
      if (el.status === 404) throw new Error("Country not found!!!");
      renderCountry(el[0]);
      const neighbour = el[0].borders[0];

      if (!neighbour) return;
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((el) => el.json())
    .then((el) => renderCountry(el, "neighbour"))
    .catch((err) => {
      console.error(`${err} :D :D :D`);
      renderError(`Something went wrong... ${err.message}`);
    })
    .finally(() => {
      // hide a loading spinner animation
      // container fade-in
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener("click", function () {
  getCountryData("sweden");
});
