import Film from "./film.js";
let film1 = new Film(
  "Cuvari formule",
  "Dragan Bjelogrlic",
  2023,
  [9, 10, 8, 8, 6, 10, 10, 9]
);
let film2 = new Film(
  "Klopka",
  "Srdjan Golubovic",
  2007,
  [9, 9, 9, 8, 7, 10, 10, 8, 6, 11]
);
let film3 = new Film(
  "Maratonci trce pocasni krug",
  "Slobodan Sijan",
  1982,
  [8, 9, 8, 8, 9]
);
let filmovi = [film1, film2, film3];

console.log(film1);
console.log(film2);
film1.stampaj();
console.log(`Film: ${film2.naslov} Godina izdanja: ${film2.godinaIzdanja}`);
console.log(``);

//! Vek filmova fn

let vekFilmova = (filmovi, vek) => {
  for (let i = 0; i < filmovi.length; i++) {
    let vekFilma = Math.ceil(filmovi[i].godinaIzdanja / 100);
    if (vek == vekFilma)
      console.log(`Film ${filmovi[i].naslov} je iz ${vek}. veka. `);
  }
};
vekFilmova(filmovi, 21);
console.log(film1.ocene);

//! Prosecna ocena fn

let prosecnaOcena = (niz) => {
  let suma = 0;
  let br = 0;
  niz.forEach((f) => {
    f.ocene.forEach((o) => {
      suma += o;
    });
    br += f.ocene.length;
  });
  return suma / br;
};
console.log(prosecnaOcena(filmovi));

//! Najcesca ocena fn

// let najcescaOcena = (niz) => {
//   let br5 = 0;
//   let br6 = 0;
//   let br7 = 0;
//   let br8 = 0;
//   let br9 = 0;
//   let br10 = 0;
//   niz.forEach((n) => {
//     n._ocene.forEach((o) => {
//       if (o == 5) {
//         br5++;
//       } else if (o == 6) {
//         br6++;
//       } else if (o == 7) {
//         br7++;
//       } else if (o == 8) {
//         br8++;
//       } else if (o == 9) {
//         br9++;
//       } else if (o == 10) {
//         br10++;
//       }
//     });
//   });
//   let nizOcena = [br5, br6, br7, br8, br9, br10];
//   let max = nizOcena[0];
//   let maxIndex = 0;
//   for (let i = 0; i < nizOcena.length; i++) {
//     if (max < nizOcena[i]) {
//       max = nizOcena[i];
//       maxIndex[i];
//     }
//   }
//   return maxIndex + 5;
// };

// console.log(najcescaOcena(filmovi));

//? najcescaOcena bolji nacin :

let najcescaOcena = (nizFilmova) => {
  let superNizOcene = [];
  nizFilmova.forEach((film) => {
    film.ocene.forEach((ocena) => {
      superNizOcene.push(ocena);
    });
  });

  let najOcena = null;
  let najOcenaBr = 0;
  superNizOcene.forEach((ocena) => {
    let br = 0;
    superNizOcene.forEach((o) => {
      if (ocena == o) {
        br++;
      }
    });
    if (br > najOcenaBr) {
      najOcenaBr = br;
      najOcena = ocena;
    }
  });

  return najOcena;
};

console.log(`Najčešća ocena je: ${najcescaOcena(filmovi)}`);

//! iznadOcene fn

let iznadOcene = (niz, nekaOcena) => {
  let iznadOceneFilmovi = [];
  niz.forEach((f) => {
    if (f.prosecna() > nekaOcena) {
      iznadOceneFilmovi.push(f);
    }
  });
  return iznadOceneFilmovi;
};

console.log(iznadOcene(filmovi, 8));

//! iznadOceneNoviji fn

let iznadOceneNoviji = (niz, nekaOcena) => {
  let iznadOCeneNiz = iznadOcene(niz, nekaOcena);
  let mladjiFilm = iznadOCeneNiz[0];
  niz.forEach((f) => {
    if (f.godinaIzdanja > mladjiFilm.godinaIzdanja) {
      mladjiFilm = f;
    }
  });
  return mladjiFilm;
};
let ocenaZaProsledjivanje = 8;
console.log(iznadOceneNoviji(filmovi, ocenaZaProsledjivanje));

//! najboljeOcenjeniFilm fn

let najboljeOcenjeniFilm = (niz) => {
  let najboljeOcenjeni = niz[0];
  let najboljaOcena = najboljeOcenjeni.prosecna();
  niz.forEach((film) => {
    if (film.prosecna() > najboljaOcena) {
      najboljaOcena = film.prosecna();
      najboljeOcenjeni = film;
    }
  });
  return najboljeOcenjeni;
};
console.log(`Naqjbolje ocenjen je film: ${najboljeOcenjeniFilm(filmovi)}`);

//! osrednjiFilm

let osrednjiFilm = (niz) => {
  let prosecnaSvihFilmova = prosecnaOcena(niz);
  let najbliziProseku = niz[0];
  let trenutnaRazlika = Math.abs(
    najbliziProseku.prosecna() - prosecnaSvihFilmova
  );

  niz.forEach((film) => {
    let razlika = Math.abs(film.prosecna() - prosecnaSvihFilmova);
    if (razlika < trenutnaRazlika) {
      trenutnaRazlika = razlika;
      najbliziProseku = film;
    }
  });

  return najbliziProseku;
};

console.log(`Osrednji film: ${osrednjiFilm(filmovi).naslov}`);

//! najmanjaOcenaNajboljeg fn

let najmanjaOcenaNajboljeg = (niz) => {
  let najboljiFilm = najboljeOcenjeniFilm(niz);
  let najmanjaOcena = najboljiFilm.ocene[0];
  najboljiFilm.ocene.forEach((o) => {
    if (o < najmanjaOcena) {
      najmanjaOcena = o;
    }
  });
  return najmanjaOcena;
};
console.log(
  `Najmanja ocena najbolje ocenjenog filma je: ${najmanjaOcenaNajboljeg(
    filmovi
  )}`
);

//! najmanjaOcena fn

let najmanjaOcena = (niz) => {
  let minOcena = niz[0].ocene[0];
  niz.forEach((film) => {
    film.ocene.forEach((ocena) => {
      if (ocena < minOcena) {
        minOcena = ocena;
      }
    });
  });

  return minOcena;
};

console.log(`Najmanja ocena: ${najmanjaOcena(filmovi)}`);
