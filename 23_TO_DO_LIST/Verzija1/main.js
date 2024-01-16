let li = document.querySelectorAll("li");
let btnDodaj = document.querySelector("#submit");
let inputZadatka = document.querySelector("#task");
let ul = document.querySelector(".ul");

ul.addEventListener("click", (e) => {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("precrtaj");
  }
});

btnDodaj.addEventListener("click", (e) => {
  e.preventDefault();
  let tekstZadatka = inputZadatka.value;
  let newLi = document.createElement("li");
  newLi.innerHTML = tekstZadatka;
  ul.appendChild(newLi);
});
