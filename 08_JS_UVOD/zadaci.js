// Drugi zadatak //
let minuti1 = 267;
let sati = Math.floor(minuti1/60);
let minuti2 = minuti1 % 60;
console.log("Sati posle ponoci je:",sati, "sata i",minuti2,"minuta.");
// Treci zadatak //
let cenaRobe = 112.50;
let novcanica = 200;
let kusur = novcanica - cenaRobe ;
console.log("Vas kusur je: ",kusur,"dinara.");
// Sesti zadatak
let ukupnoEur = 70;
let kursEur = 117.29;

let ukupnoDin = Math.round(ukupnoEur * kursEur) ;
console.log(ukupnoDin);
// Sesti zadatak iz din to eu
let ukupnoDin2 = 12330;
let ukupnoEur2 = Math.round(ukupnoDin2 / kursEur);
console.log(ukupnoEur2);
// Sedmi zadatak
let kursDol = 106.25;
let ukupnoDol = Math.round(ukupnoDin2 / kursDol);
console.log(ukupnoDol);


// Osmi zadatak
let C = 23;
let F = C*1.8 + 32;
console.log(F);

let F2 = 77;
let C2 = (F2-32)/1.8;
console.log(C2);

// Deveti zadatak

let C3 = 23;
let K = C3 + 273.15;
console.log(K);
let K2 = 298.99;
let C4 =Math.round(K2 - 273.15);
console.log(C4);
