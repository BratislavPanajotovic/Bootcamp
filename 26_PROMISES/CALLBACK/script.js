let mojaFunkcija = (callback) => {
  callback();
};
mojaFunkcija(function () {
  console.log("Ovo je funkcija");
});

let sabiranje = (funkcija) => {
  funkcija(4, 5);
};

sabiranje((a, b) => {});

function stampajSumu(x, y) {
  console.log(x + y);
}
sabiranje(stampajSumu);
