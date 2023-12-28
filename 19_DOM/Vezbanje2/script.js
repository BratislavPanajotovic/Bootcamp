let p = document.querySelectorAll("p");

p.forEach((el, i) => {
  if (i % 2 == 0) {
    el.classList.add("error");
  } else {
    el.classList.add("success");
  }

  if (i % 3 == 0) {
  }
});
let noviDiv = document.createElement("div");
noviDiv.innerHTML = "Div kreiran u js-u";
document.body.appendChild(noviDiv);

let lista = document.createElement("ul");
noviDiv.append(lista);

let li1 = document.createElement("li");
li1.innerHTML = "Prva stavka liste";
let li2 = document.createElement("li");
li2.innerHTML = "Druga stavka liste";
let li3 = document.createElement("li");
li3.innerHTML = "Treca stavka liste";
lista.append(li1, li2, li3);
let li4 = document.createElement("li");
lista.appendChild(li5);
let s;
slika = document.createElement("img");
slika.src = "slika/";
slika.alt = "Neka slika";
li4.appendChild(slika);
