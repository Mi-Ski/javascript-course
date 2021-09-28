"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

const p = document.querySelector(".p");
setTimeout(function () {
  p.textContent = "Already red?";
}, 4000);
p.style.color = "red";
