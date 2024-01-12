class Film {
  constructor(n, r, g) {
    this._naslov = n;
    this._reziser = r;
    this._godinaIzdanja = g;
  }
  stampaj() {
    console.log(`Naslov: ${this._naslov}`);
  }
  set naslov(n) {
    this._naslov = n;
  }
  set reziser(r) {
    this._reziser = r;
  }
  set godinaIzdanja(gi) {
    this._godinaIzdanja = gi;
  }
  get naslov() {
    return this._naslov;
  }
  get reziser() {
    return this._reziser;
  }
  get godinaIzdanja() {
    return this._godinaIzdanja;
  }
}

console.log(film1);
console.log(film2);
film1.stampaj();
console.log(`Film: ${film2.naslov} Godina izdanja: ${film2.godinaIzdanja}`);

export default Film;
