let ul = document.querySelector(".ul");

let li = document.querySelectorAll("li");

let btnRadioDodajNaP = document.querySelector("#dodajNaP");

let btnRadioDodajNaK = document.querySelector(".divDodajNaK");

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
      let btnRadioDodajNaP = document.querySelector("#dodajNaP:checked");

      if (btnRadioDodajNaP && btnRadioDodajNaP.value == "dodajNaP") {
        ul.prepend(newLi);
      } else {
        ul.appendChild(newLi);
      }
    }
    inputZadatka.value = "";
  }
});
