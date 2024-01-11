let student = {
  ime: "Milos",
  prezime: "Milosevic",
  godinaStudija: 3,
  ocene: [7, 6, 9, 8, 10, 7, 8, 6, 9, 10, 7],
  prosecan: () => {
    let prosecanStudent = true;
    this.ocene.forEach((ocena) => {
      if (ocena == 6 || ocena == 10) {
        prosecanStudent = false;
      }
    });
  },

  ekstra: () => {
    let broj9 = 0;
    let broj10 = 0;
    this.ocene.forEach((e) => {
      if (e == 9) {
        broj9++;
      } else if (e == 10) {
        broj10++;
      }
    });
    duploVeci = broj10 > broj9 * 2;
  },
};

let kupovina = ["mleko", "ananas", "caj", "pivo", "voda", "kafa"];

let generateUl = (niz) => {
  let ul = document.createElement("ul");
  for (let i = 0; i < niz.length; i++) {
    let li = document.createElement("li");
    li.textContent = niz[i];
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
};
generateUl(kupovina);
let kosarkaskiTimovi = [
  "Bucs",
  "Celtics",
  "Lakers",
  "Raptors",
  "Heat",
  "Suns",
  "Nuggets",
  "Angels",
];
let generateTable = (niz) => {
  let table = document.createElement("table");
  for (let j = 0; j < niz.length; j++) {
    let tr = document.createElement("tr");
    tr.textContent = `${j + 1}. ${niz[j]}`;
    table.appendChild(tr);
  }
  document.body.appendChild(table);
};
generateTable(kosarkaskiTimovi);

let duzine = [];
let zbir = 0;
let prosek = 0;
let najduzi = (niz) => {
  for (let k = 0; k < niz.length; k++) {
    duzine.push(niz[k].length);
    zbir += parseInt(niz[k].length);
  }
  return Math.max(...duzine);
};
najduzi(kosarkaskiTimovi);

prosek = zbir / duzine.length;

let brojacDuzih = (niz) => {
  let br = 0;
  for (let k = 0; k < niz.length; k++) {
    if (niz[k].length > prosek) {
      br++;
    }
    if (niz[k].includes("a")) {
      console.log(`${niz[k]} sadrzi u sebi slovo a!`);
    }
    if (niz[k][0] === "a" || niz[k][0] === "A") {
      console.log(`${niz[k]} pocinje slovom 'a' ili 'A'`);
    }
  }

  return br;
};
console.log(brojacDuzih(kosarkaskiTimovi));
//! CALLBACK

function ispisKonzola(poruka) {
  console.log(poruka);
}

function saberi(broj1, broj2, callback) {
  let zbir = broj1 + broj2;
  callback(zbir);
}
saberi(1, 2, ispisKonzola);
//! OBJEKTI
let blog1 = {
  naslov: "Hrana i pice",
  lajkovi: 15,
  dislajkovi: 3,
};
let blog2 = {
  naslov: "Sport",
  lajkovi: 12,
  dislajkovi: 5,
};
let blog3 = {
  naslov: "Programiranje!",
  lajkovi: 10,
  dislajkovi: 7,
};
let blog4 = {
  naslov: "Citanje!",
  lajkovi: 2,
  dislajkovi: 13,
};
let blogovi = [blog1, blog2, blog3, blog4];

let ispisNaslova = (niz) =>
  niz.forEach((blog) => {
    if (blog.lajkovi > blog.dislajkovi) {
      console.log(blog.naslov);
    }
  });

ispisNaslova(blogovi);
let naslovi = [];

let nizNaslova = (niz) => {
  niz.forEach((e) => {
    naslovi.push(e.naslov);
    console.log(naslovi);
  });
};
nizNaslova(blogovi);
console.log(naslovi);

let krajNaslova = (niz) => {
  for (let i = 0; i < niz.length; i++) {
    if (niz[i][niz[i].length - 1] === "!") {
      console.log(niz[i]);
    }
  }
};

krajNaslova(naslovi);

let let1 = {
  destinacija: "Porto,Portugal",
  brojPutnika: 32,
  mesta: 35,
};
let let2 = {
  destinacija: "Amsterdam,Holandija",
  brojPutnika: 35,
  mesta: 35,
};
let let3 = {
  destinacija: "Istanbul,Turska",
  brojPutnika: 35,
  mesta: 35,
};
let let4 = {
  destinacija: "Nis,Srbija",
  brojPutnika: 20,
  mesta: 35,
};
let let5 = {
  destinacija: "Beograd,Srbija",
  brojPutnika: 29,
  mesta: 35,
};
let letovi = [let1, let2, let3, let4, let5];
let maxBrojPutnika = (niz) => {
  let max = "";
  niz.forEach((e) => {
    if (e.brojPutnika === e.mesta) {
      max += ", ";
      max += e.destinacija;
    }
  });
  return max;
};
console.log(maxBrojPutnika(letovi));
