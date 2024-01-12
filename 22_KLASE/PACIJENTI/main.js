import Pacijent from "./pacijent.js";
let p1 = new Pacijent("Marko", 178, 101);
let p2 = new Pacijent("Nikola", 199, 106);
let p3 = new Pacijent("Nemanja", 155, 75);

let pacijenti = [p1, p2, p3];

let pacijentSaNajmanjomTezinom = (niz) => {
  let minTezinaPacijent = niz[0]; // Cuva ceo objekat
  let minTezina = minTezinaPacijent.tezina; // Cuva samo tezinu

  niz.forEach((element) => {
    if (element.tezina < minTezina) {
      minTezina = element.tezina;
      minTezinaPacijent = element;
    }
  });
  return minTezinaPacijent;
};

pacijentSaNajmanjomTezinom(pacijenti);
console.log(pacijentSaNajmanjomTezinom(pacijenti));

let maxBMI = (niz) => {
  let maxBMIobject = niz[0];
  let maxBMIvalue = maxBMIobject.Bmi();

  niz.forEach((e) => {
    if (e.Bmi > maxBMIvalue) {
      maxBMIobject = e;
    }
  });
  return maxBMIobject;
};
console.log(maxBMI(pacijenti));

let nameContainsA = (niz) => {
  let nameObject = niz[0];
  let nameValue = nameObject.ime;

  ime.forEach();
};
