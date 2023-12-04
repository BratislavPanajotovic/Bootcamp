// // 3. zadatak 

// let currentYear = new Date().getFullYear();
// let birthYear = 2008;
// let age = currentYear - birthYear;
// if (age >= 18) {
//     document.write("<p > Osoba je punoletna! </p>")
// } else if ((currentYear-age) == 18); {
//     document.write("<img src='torta.jfif'>") };
//  if (age < 18) {
//     let yearsLeft = 18-age;
//     document.write("<p >" + yearsLeft + " years left until 18! </p>")
// }
// // 4. zadac
// let t=15;
// if(t>=0) {
//     console.log(`Temperatura je u plusu`);
//     let paragraf = document.getElementById(`temperatura`).innerHTML = `Temperatura je u plusu!`;
//     paragraf.style.color = `red`;
// } else {
//     let paragraf = document.getElementById(`temperatura`).innerHTML = `Temperatura je u minusu!`;
//     paragraf.style.color = `blue`;
// }
//9. zadatak
let satPocetka1 = 6;
let satKraja1 = 13;

let satPocetka2 = 14;
let satKraja2 = 22;

if(satPocetka2 > satKraja1) {
    console.log(`Smene se ne preklapaju!`);
} else if (satPocetka1 > satKraja2) {
    console.log(`Smene se ne preklapaju!`);
} else {
    console.log(`Smene se preklapaju!`);

}



//13. zadatak
let d1 = 30;
let m1 = 5;
let g1 = 2008;
let d2 = 1;
let m2 = 6;
let g2 = 2005;

if (g1==g2) {
    if (m1>m2){
    console.log(`Raniji datum je ${d1}.${m1}.${g1}`);
    } else if (m1<m2){
    console.log(`Raniji datum je ${d1}.${m1}.${g1}`);
    }
    else if (d1>d2) {
    console.log(`Raniji datum je ${d1}.${m1}.${g1}`);
    } 
    else console.log(`Manji datum je ${d2}.${m2}.${g2}`);
} else if (g1>g2){
    console.log(`Raniji datum je ${d1}.${m1}.${g1}`);
} else {
    console.log(`Raniji datum je ${d2}.${m2}.${g2}`);
}
//12. zadatak
let br1 = 12;
let br2 = 4;

let veci = Math.max(br1,br2)
let manji = Math.min(br1,br2);

if (veci % 2 === 0 ) {
    console.log(`Veci broj je deljiv sa 2`);
} else console.log(`Veci broj nije deljiv sa 2`);

if(manji % 3 == 0) {
    console.log(`Manji broj je deljiv sa 3`);
    
} else { 
    console.log(`Manji broj nije deljiv sa 3`);
 }

