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
let satPocetka1 = 8;
let satKraja1 = 16;

let satPocetka2 = 7;
let satKraja2 = 15;

if (satPocetka2 > satPocetka1 & satKraja1<satKraja2){
console.log(`Smene se preklapaju`);
}else if (satPocetka2<satPocetka1 & satKraja2<satKraja1) {
console.log(`Smene se preklapaju`);
}else if (satPocetka1 == satPocetka2 & satKraja1 == satKraja2 ) {
console.log(`Smene se preklapaju`)
}else if (satKraja1==satPocetka2){
console.log(`Smene se preklapaju`)}
else if (satKraja2 == satPocetka1) {
console.log(`Smene se preklapaju`)
} else {
console.log(`Smene se ne preklapaju`);
}




//10. zadatak
let prviBroj = 25;
let drugiBroj = 23;
if (prviBroj < drugiBroj) {
    console.log(prviBroj-1);
} else if (prviBroj > drugiBroj) {
    console.log(prviBroj+1);
} 

