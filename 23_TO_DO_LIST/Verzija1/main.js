let ul = document.querySelector(".ul");

let li = document.querySelectorAll("li");

let btnDodaj = document.querySelector("#submit");

let btnDodajNaP = document.querySelector("#dodajNaP");

let btnDodajNaK = document.querySelector(".divDodajNaK");

let inputZadatka = document.querySelector("#task");

ul.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    ul.removeChild(e.target);
  }
});

inputZadatka.addEventListener("keyup", (e) => {
  e.preventDefault();
  if (e.code === "Enter") {
    let tekstZadatka = inputZadatka.value;
    if (tekstZadatka.trim() != "") {
      let newLi = document.createElement("li");
      newLi.textContent = tekstZadatka;
      let btnDodajNaP = document.querySelector("#dodajNaP:checked");

      if (btnDodajNaP && btnDodajNaP.value == "dodajNaP") {
        ul.prepend(newLi);
      } else {
        ul.appendChild(newLi);
      }
    }
    inputZadatka.value = "";
  }
});
