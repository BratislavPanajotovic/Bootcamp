let ul = document.querySelector(".ul");

let li = document.querySelectorAll("li");

let btnRadioDodajNaP = document.querySelector("#dodajNaP");

let btnRadioDodajNaK = document.querySelector(".divDodajNaK");

let inputZadatka = document.querySelector("#task");

let nizZadataka = [];

if (localStorage.getItem("zadaci") == null) {
  localStorage.setItem("zadaci", JSON.stringify(nizZadataka));
} else {
  nizZadataka = JSON.parse(localStorage.getItem("zadaci"));
}

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
        nizZadataka.unshift(tekstZadatka);
      } else {
        ul.appendChild(newLi);
        nizZadataka.push(tekstZadatka);
      }
    }
    localStorage.setItem("zadaci", JSON.stringify(nizZadataka));
    inputZadatka.value = "";
  }
});
