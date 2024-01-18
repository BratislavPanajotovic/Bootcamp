"use strict";
window.setTimeout(() => {
  console.log("Poruka ispisana nakon nekog vremena");
}, 3000);
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const div = document.querySelector("#ispis");

let timer = null;

btn1.addEventListener("click", function (e) {
  e.preventDefault();
  let datum = new Date();
  let h = datum.getHours();
  let m = datum.getMinutes();
  let s = datum.getSeconds();
  if (timer === null) {
    timer = setTimeout(function () {
      div.innerHTML += `${h}:${m}:${s}`;
      timer = null;
      console.log(datum);
    }, 2000);
  }
});

btn2.addEventListener("click", function (e) {
  e.preventDefault();
  clearTimeout(timer);
  timer = null;
});
