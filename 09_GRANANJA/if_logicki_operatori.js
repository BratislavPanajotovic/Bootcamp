let t = -25;
if(t<-15 || t>40) {
console.log(`Extremna temperatura`);
} else {console.log(`Normalna temperatura`);}

//16.Zadatak
let datum = new Date().getFullYear();
if ((datum % 4 == 0) && (datum % 100 != 0 ))  {
    console.log(`Prestupna je godina`);
} else if(datum % 400 == 0) {
    console.log(`Prestupna je godina`);

} else {
    console.log(`Nije prestupna godina`);
}
//17.Zadatak
// Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara, ispitati “otvoreno” ukoliko je butik trenutno otvoren
// U suprotnom ispisati “zatvoreno”
//  Ko bude imao vremena: Ukoliko je butik trenutno otvoren, prikazati sličicu otvorenih vrata na ekranu. Ukoliko je butik trenutno zatvoren, prikazati sličicu zatvorenih vrata.

let dan = new Date().getDay();
let sati = new Date().getHours();
if ((dan >= 1 && dan <= 5) && (sati >= 9 && sati< 20)) {
console.log(   `Otvoreno` );
}
else if ((dan == 0 || dan == 6 )&& (sati >=10 && sati < 18)) {
    console.log(   `Otvoreno` );
} else {
    console.log( `Zatvoreno` );
}
