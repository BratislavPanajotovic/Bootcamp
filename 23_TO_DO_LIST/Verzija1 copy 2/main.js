let li = document.querySelectorAll("li");
console.log(li);

li.forEach((el) => {
  console.log(el);
  el.addEventListener("click", function () {
    el.classList.toggle("precrtaj");
  });
});
