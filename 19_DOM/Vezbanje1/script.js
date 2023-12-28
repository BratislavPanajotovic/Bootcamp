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
let svakiDivError = document.querySelectorAll("div.error");
let tabela = document.getElementsByClassName("tabela");
let red = document.getElementsByTagName("tr");
let poslednjiRed = red[red.length - 1];
let sveSlike = document.querySelectorAll("img");
let sviLinkovi = document.querySelectorAll("a");
let prviLink = document.querySelector("a");
let sviP = document.querySelectorAll("p");

console.log(sveSlike);
console.log(sviLinkovi);
console.log(svakiDivError);
console.log(prviParagraf);
console.log(poslednjiRed);

prviLink.innerHTML =
  "<span style=' color: red; font-weight: bold; '>Novi tekst</span> prvog linka";

//*
sviP.innerHTML += "VAZNO!!!";
//*
svakiDivError.forEach((element) => {
  element.innerHTML = "<h1>Greska!</>";
  element.style.color = "red";
});

//*
sviP.forEach((p) => {
  p.style.color = "purple";
});
//*
sviP.forEach((e, i) => {
  let kv = (i + 1) * (i + 1);
  e.innerHTML = `${i + 1}<sup>2</sup>=${kv}`;
});
for (let i = 0; i < sviP.length; i++) {
  if (i % 2 == 0) {
    sviP[i].style.backgroundColor = "green";
  } else {
    sviP[i].style.backgroundColor = "red";
  }
}
//*
sviLinkovi.forEach((link, i) => {
  link.style.padding = "5px";
  link.style.fontSize = "8px";
  link.style.textDecoration = "none";
  if (i % 2 == 0) {
    link.style.backgroundColor = "green";
  } else {
    link.style.backgroundColor = "purple";
  }
});
//*
sveSlike.forEach((slika, i) => {
  slika.style.width = "300px";
  slika.style.height = "300px";
});
