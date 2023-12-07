// let i=1;
// while (i<=5) {
// console.log(i);
// i++;
// }
// console.log("Kraj petlje");
// console.log(i);

// 1. Zadatak

// let x = 1;
// while (x<=20) { 
// console.log(x);
// console.log(x++);

// }

// 2. Zadatak
// let y = 20;
// while (y <=20 && y>0 ) { 
//     console.log(y);
//     y--;
// }
// console.log( "Kraj" );
//3. Zadatak
// i=1;
// while (i <= 20) 
// {
//     if (i % 2 == 0) {
//         console.log(i);
// }
//     i++;
// }
// console.log("kraj");
//4.Zadatak
// let i=1
// while (i >= 6){
// if (i%2 ==0){
//     document.write(<p style="color:red"> lorem ipsum dolores </p>)
// }
// }
let n=7;
i = 1;
while (i <= n) {
    if (i % 3 == 1) {
    document.body.innerHTML += ` <p class="plava">Paragraf broj ${i}</p>`
    }
    else if (i%3 == 2) {
        document.body.innerHTML += ` <p class="crvena">Paragraf broj ${i}</p>`
    
} else {document.body.innerHTML += ` <p class="zelena">Paragraf broj ${i}</p>` }
    i++;

}
//Zadatak 6
i=1;
let suma=0;
while (i<=100) 
{
    suma+=i;
    i++;
}
console.log(suma);
//Zadatak 7
i=1;
let n2 = 135;
let suma2 =0;
while (i<=n2)
{
    suma2+=i;
    i++;
}
console.log(suma2);
//Zadatak 8
let n3 = 150;
let m = 300;
let suma3 = 0;
i=n3;
while (i <=m) {
    suma3 += i;
    i++;
}
console.log(suma3);
//Zadatak9
n=3;
m=6;
let proizvod = 1;
i=n;
while (i<=m){
proizvod*=i;
i++;
}
console.log(proizvod);
//Zadatak 10
n=5;
m=10;
i=n;

let sumaKvad=0;
let sumaKub=0;
while (i<=m) {
if (i%2==0){
    sumaKvad += i**2 ;
} else {
    sumaKub += i**3 ;
}
i++
}
console.log(sumaKvad,sumaKub);
//Zadatak 11
let k = 113;
i=1;
let brojac = 0;

while (i<=k) {
    if (k%i == 0) {
        brojac++
    } 
i++
}
console.log(brojac);
//Zadatak 12 
let g = 113;
i=1;
let brojacc = 0;

while (i<=k) {
    if (k%i == 0) {
        brojacc++
    }  
i++
}
if (brojac == 2 ) {
    console.log(`Broj ${g} je prost`);
    console.log(`Broj ${g} je slozen`);
} 