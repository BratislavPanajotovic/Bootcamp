"use strict";
window.setTimeout(() => {
  console.log("Poruka ispisana nakon nekog vremena");
}, 3000);

const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");

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

function prikaziSat() {
  const datum = new Date();
  let h = datum.getHours();
  let m = datum.getMinutes();
  let s = datum.getSeconds();
  s = s < 10 ? "0" + s : "" + s;
  m = m < 10 ? "0" + m : "" + m;
  h = h < 10 ? "0" + h : "" + h;
  div.innerHTML = `${h}:${m}:${s}`;
}
let clock;

btn3.addEventListener("click", (e) => {
  e.preventDefault();
  clock === undefined ? (clock = setInterval(prikaziSat, 100)) : clock === null;
});
btn4.addEventListener("click", (e) => {
  e.preventDefault();
  clearInterval(clock);
  clock = undefined;
});
