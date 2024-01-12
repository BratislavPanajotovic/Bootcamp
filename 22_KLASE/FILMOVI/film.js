class Film {
  constructor(n, r, g) {
    this.naslov = n;
    this.reziser = r;
    this.godinaIzdanja = g;
  }
  stampaj() {
    console.log(`Naslov: ${this.naslov}`);
  }
}
let film1 = new Film("Cuvari formule", "Dragan Bjelogrlic", 2023);
let film2 = new Film("Klopka", "Srdjan Golubovic", 2007);
console.log(film1);
console.log(film2);
film1.stampaj();
