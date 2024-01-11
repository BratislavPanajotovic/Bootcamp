let automobil1 = {
  marka: "Renault",
  km: 184000,
  godiste: 2003,
  vlasnici: "Bratislav, Dragan, Mika",
};

let automobil2 = {
  marka: "Mercedes",
  km: 200000,
  godiste: 2005,
  vlasnici: "Mika,Nikola, Nemanja",
};

let automobil3 = {
  marka: "Peugeot",
  km: 284000,
  godiste: 2015,
  vlasnici: "Zika, Laza, Pera, Mika",
};
let automobili = [automobil1, automobil2, automobil3];

function prosecnoGodiste(niz) {
  let zbirGodista = 0;
  let brAuta = 0;

  for (let i = 0; i < niz.length; i++) {
    zbirGodista += niz[i].godiste;
    brAuta++;
  }
  return Math.floor(zbirGodista / brAuta);
}
prosecnoGodiste(automobil1);
console.log(
  `Prosecno godiste automobila na placu je ${prosecnoGodiste(automobili)}`
);

let markaNajmanjeKm = (niz, marka) => {
  let autaIsteMarke = [];

  for (let i = 0; i < niz.length; i++) {
    if (niz[i].marka === marka) {
      autaIsteMarke.push(niz[i]);
    }
  }

  if (autaIsteMarke.length === 0) {
    return null;
  }

  let najmanjePresao = autaIsteMarke[0];

  for (let j = 1; j < autaIsteMarke.length; j++) {
    if (
      autaIsteMarke[j].km < najmanjePresao.km ||
      (autaIsteMarke[j].km === najmanjePresao.km &&
        autaIsteMarke[j].godiste < najmanjePresao.godiste)
    ) {
      najmanjePresao = autaIsteMarke[j];
    }
  }

  return najmanjePresao;
};

console.log(markaNajmanjeKm(automobili, "Peugeot"));

console.log(markaNajmanjeKm(automobili, "Renault"));

let prosekKm10 = (niz) => {
  let prosKm = 0;
  let zbirKm = 0;
  let br = 0;

  for (let i = 0; i < niz.length; i++) {
    console.log(niz[i].godiste);
    if (niz[i].godiste > 2014) {
      zbirKm += niz[i].km;
      br++;
    }
  }

  if (zbirKm > 0) {
    prosKm = zbirKm / br;
  }

  return prosKm;
};

console.log(prosekKm10(automobili));

let rokfeler = (niz, vlasnik) => {
  let brojVlasnistva = 0;
  for (let i = 0; i < niz.length; i++) {
    if (niz[i].vlasnici.includes(vlasnik)) {
      brojVlasnistva++;
    }
  }
  if (brojVlasnistva >= 2) {
    return true;
  } else {
    return false;
  }
};
console.log(rokfeler(automobili, "Mika"));

let skorije = (niz) => {
  let srednjiIndex = Math.floor(niz.length / 2);
  let raniji = niz.slice(0, srednjiIndex);
  let kasniji = niz.slice(srednjiIndex);
  let sumaGodina1 = 0;
  for (let i = 0; i < raniji.length; i++) {
    sumaGodina1 += raniji[i].godiste;
  }
  console.log(sumaGodina1);
  let prosGod1 = sumaGodina1 / raniji.length;
  console.log(prosGod1);

  let sumaGodina2 = 0;
  for (let j = 0; j < kasniji.length; j++) {
    sumaGodina2 += kasniji[j].godiste;
  }
  console.log(sumaGodina2);
  let prosGod2 = sumaGodina2 / kasniji.length;
  console.log(prosGod2);
  return prosGod2 < prosGod1;
};
console.log(skorije(automobili));
