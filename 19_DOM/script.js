let e1 = document.getElementById("");
let el2 = document.getElementsByClassName("par");

for (let i = 0; i < el2.length; i++) {
  console.log(el2[i]);
}
let niz = Array.from(el2);

niz.forEach((element) => {
  console.log(element);
});

let t1 = document.querySelector("#p2");
let prviParagraf = document.querySelector("p");
let prviDivError = document.querySelector("div.error");
let tabela = document.getElementsByClassName("tabela");
let red = document.getElementsByTagName("tr");
let poslednjiRed = red[red.length - 1];
let sveSlike = document.querySelectorAll("img");
let sviLinkovi = document.querySelectorAll("a");
let prviLink = document.querySelector("a");

console.log(sveSlike);
console.log(sviLinkovi);
console.log(prviDivError);
console.log(prviParagraf);
console.log(poslednjiRed);

prviLink.innerHTML =
  "<span style=' color: red; font-weight: bold; '>Novi tekst</span> prvog linka";
