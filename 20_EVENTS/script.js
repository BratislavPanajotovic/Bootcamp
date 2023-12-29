// let br = 0;

// btnMinus.addEventListener("click", () => {
//   if (br == 0) {
//     br = 0;
//     prikaz.innerHTML = br;
//   } else {
//     br--;
//     prikaz.innerHTML = br;
//   }
// });
// btnPlus.addEventListener("click", () => {
//   br++;
//   prikaz.innerHTML = br;
// });
//* Zadatak 5
// let btnIspisiTekst = document.querySelector(".ispisiTekst");
// let pIspisTeksta = document.querySelector(".ispisTeksta");
// let inputTekst = document.querySelector(".tekst");

// btnIspisiTekst.addEventListener("click", () => {
//   let preuzmiTekst = inputTekst.value;
//   pIspisTeksta.innerHTML = `Zdravo ${preuzmiTekst}`;
// });

//* Zadatak 6 ( Dopuna 5. zadatka )

//? Dopuniti 5. zadatak dodavanjem radio button polja gde korisnik može odabrati svoj pol (muški, ženski ili neopredeljen).Nakon duplog klika na dugme, u konzoli ispisati pol koji je osoba odabrala.

// let radioMuski = document.querySelector(".M");
// let radioZenski = document.querySelector(".Z");
// let radioNeopredeljen = document.querySelector(".N");

// btnIspisiTekst.addEventListener("dblclick", () => {
//* Prvi nacin
// if (radioMuski.checked) {
//   console.log("Osoba je muskog pola.");
// } else if (radioZenski.checked) {
//   console.log("Osoba je zenskog pola.");
// } else if (radioNeopredeljen.checked) {
//   console.log("Osoba se nije opredelila u vezi pola.");
// } else {
//   console.log("Nije selektovana nijedna opcija!");
// }
//* Drugi nacin
// let checkedPol = document.querySelector("input[name='pol']:checked");
// console.log(checkedPol.value);
// if (checkedPol.value == m) {
//   console.log("Osoba je muskog pola.");
// } else if (checkedPol.value == z) {
//   console.log("Osoba je zenskog pola");
// } else if (checkedPol.value == n) {
//   console.log("Osoba je neodredjenog pola");
// } else {
//   console.log("Nista nije selektovano");
// }
//* Treci nacin
//   let polRadio = document.getElementsByName("pol");
//   console.log(polRadio);
//   let polRadioInput = document.querySelector("input[name='pol']");
//   polRadioInput.forEach((rb) => {
//     if (rb == checked) {
//       console.log();
//     }
//   });
// });
//* 7. Zadatak
let kvadriraj = document.querySelector(".btn-kvadriraj");
let prepolovi = document.querySelector(".btn-prepolovi");
let calcP = document.querySelector(".btn-povrsina");

let unosKvadriraj = document.querySelector(".input-kvadriraj");
let unosPrepolovi = document.querySelector(".input-prepolovi");
let unosPovrsina = document.querySelector(".input-povrsina");

let ispisKvadrata = document.querySelector(".ispisKvadrata");
let ispisPrepolovi = document.querySelector(".ispisPrepolovi");
let ispisPovrsina = document.querySelector(".ispisPovrsina");

let br1;

kvadriraj.addEventListener("click", (event) => {
  event.preventDefault();
  br1 = unosKvadriraj.value;
  ispisKvadrata.innerHTML = br1 ** 2;
});

let br2;

prepolovi.addEventListener("click", (event) => {
  event.preventDefault();
  br2 = unosPrepolovi.value;
  ispisPrepolovi.innerHTML = br2 / 2;
});

let R;

calcP.addEventListener("click", (event) => {
  event.preventDefault();
  R = unosPovrsina.value;
  ispisPovrsina.innerHTML = R ** 2 * 3.14;
});
