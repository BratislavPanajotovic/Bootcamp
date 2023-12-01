// 3. zadatak 

let currentYear = new Date().getFullYear();
let birthYear = 2008;
let age = currentYear - birthYear;
if (age >= 18) {
    document.write("<p > Osoba je punoletna! </p>")
} else if ((currentYear-age) == 18); {
    document.write("<img src='torta.jfif'>") };
 if (age < 18) {
    let yearsLeft = 18-age;
    document.write("<p >" + yearsLeft + " years left until 18! </p>")
}
// 4. zadac
let t=15;
if(t>=0) {
    console.log(`Temperatura je u plusu`);
    let paragraf = document.getElementById(`temperatura`).innerHTML = `Temperatura je u plusu!`;
    paragraf.style.color = `red`;
} else {
    let paragraf = document.getElementById(`temperatura`).innerHTML = `Temperatura je u minusu!`;
    paragraf.style.color = `blue`;
}