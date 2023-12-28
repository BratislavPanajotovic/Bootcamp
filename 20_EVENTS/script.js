let btnHello = document.querySelector(".btn");
let btnBroj = document.querySelector(".broji");
let paragraf = document.querySelector("#ispis");
let btnMinus = document.querySelector(".btnMinus");
let btnPlus = document.querySelector(".btnPlus");
let prikaz = document.querySelector(".br");

let br = 0;

btnMinus.addEventListener("click", () => {
  br--;
  prikaz.innerHTML = br;
});
btnPlus.addEventListener("click", () => {
  br++;
  prikaz.innerHTML = br;
});

let btnIspisiTekst = document.querySelector(".ispisiTekst");
let pIspisTeksta = document.querySelector(".ispisTeksta");
let inputTekst = document.querySelector(".tekst");

btnIspisiTekst.addEventListener("click", () => {
  let preuzmiTekst = inputTekst.value;
  pIspisTeksta.innerHTML = `Zdravo ${preuzmiTekst}`;
});
