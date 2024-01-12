// import Film from "./film.js";
// let film1 = new Film("Cuvari formule", "Dragan Bjelogrlic", 2023);
// let film2 = new Film("Klopka", "Srdjan Golubovic", 2007);
// let film3 = new Film("Maratonci trce pocasni krug", "Slobodan Sijan", 1982);
// let filmovi = [film1, film2, film3];

// film1.stampaj;
// filmovi[2].stampaj;
// for (let i = 0; i < filmovi.length; i++) {
//   filmovi[i].stampaj;
// }
class Pacijent {
  constructor(i, v, t) {
    this.ime = i;
    this.visina = v;
    this.tezina = t;
  }
  set ime(i) {
    this._ime = i;
  }
  set visina(v) {
    if (0 < v && v < 250) {
      this._visina = v;
    } else {
      this._visna = 165;
    }
  }
  set tezina(t) {
    if (0 < t && t < 550) {
      this._tezina = t;
    } else {
      this._tezina = 100;
    }
  }
  get ime() {
    return this._ime;
  }
  get visina() {
    return this._visina;
  }
  get tezina() {
    return this._tezina;
  }
  Stampaj() {
    console.log(
      `Ime pacijenta: ${this.ime}, Visina pacijenta: ${this.visina}, Tezina pacijenta: ${this.tezina}`
    );
  }
  Bmi() {
    let vrednost = this.tezina / (this.visina / 100) ** 2;
    // console.log(`BMI vrednost pacijenta je: ${vrednost}`);
    return vrednost;
  }
  Kritican() {
    if (this.Bmi() < 15 || this.Bmi() > 40) {
      return true;
    }
    return false;
  }
}
let p1 = new Pacijent("Marko", 178, 101);
let p2 = new Pacijent("Nikola", 199, 106);
let p3 = new Pacijent("Nemanja", 155, 75);

let pacijenti = [p1, p2, p3];

let pacijentSaNajmanjomTezinom = (niz) => {
  let minTezinaPacijent = niz[0];
  let minTezina = minTezinaPacijent.tezina;
};

p1.Stampaj();
console.log(p1.Bmi());
console.log(p1.Kritican());
