class Film {
  constructor(n, r, g, o) {
    this.naslov = n;
    this.reziser = r;
    this.godinaIzdanja = g;
    this.ocene = o;
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
  set ocene(o) {
    for (let i = 0; i < o.length; i++) {
      if (o[i] < 5 || o[i] > 10 || o[i] != Math.ceil(o[i])) {
        o[i] = 5;
      }
    }
    this._ocene = o;
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
  get ocene() {
    return this._ocene;
  }
  prosecna() {
    let suma = 0;
    this._ocene.forEach((elem) => {
      suma += elem;
    });
    return suma / this._ocene.length;
  }
}

export default Film;
