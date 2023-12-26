let dan1 = {
  datum: "2023/12/22",
  kisa: true,
  sunce: false,
  oblacno: true,
  temperature: [-3, -4, -6, -7, -6, -4, -10, 0],
};
let dan2 = {
  datum: "2023/12/24",
  kisa: false,
  sunce: true,
  oblacno: false,
  temperature: [3, 4, 6, 7, 9, 8, 5, 3],
};
let dan3 = {
  datum: "2023/12/25",
  kisa: false,
  sunce: true,
  oblacno: true,
  temperature: [3, 4, 6, 6, 7, 5, 4, 3],
};
let dani = [dan1, dan2, dan3];
let datum = "";
let maxMeasure = dani[0].temperature.length;
console.log(maxMeasure);

let dateTemp = (niz) => {
  for (let i = 0; i < niz.length; i++) {
    if (niz[i].temperature.length >= maxMeasure) {
      console.log((datum = niz[i].datum));
    }
  }
};
dateTemp(dani);
//Ispisati poslednji datum i prvi datumn

//* 3. Zadatak

let brojDana = (niz) => {
  let brojKisnihDana = 0;
  let brojSuncanihDana = 0;
  let brojOblacnihDana = 0;
  niz.forEach((d) => {
    if (d.kisa) {
      brojKisnihDana++;
    }
    if (d.sunce) {
      brojSuncanihDana++;
    }
    if (d.oblacno) {
      brojOblacnihDana++;
    }
  });
  console.log(
    `Bilo je ${brojKisnihDana} kisnih dana, ${brojOblacnihDana} oblacnih dana, ${brojSuncanihDana} suncanih dana.`
  );
};
brojDana(dani);

//* 4. Zadatak
let natpTemp = (niz) => {
  let suma = 0;
  let brMerenja = 0;
  niz.forEach((d) => {
    d.temperature.forEach((temp) => {
      suma += temp;
      brMerenja++;
    });
  });
  let prosTemp = suma / brMerenja;

  let brojNatpros = 0;
  niz.forEach((d) => {
    let sumaTemp = 0;
    d.temperature.forEach((temp) => {
      sumaTemp += temp;
    });

    let prosTempDana = sumaTemp / d.temperature.length;

    if (prosTempDana > prosTemp) {
      brojNatpros++;
    }
  });
  return brojNatpros;
};

console.log(natpTemp(dani));
