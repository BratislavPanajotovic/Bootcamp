// let i = 1;
// while (i<=20) {
//     console.log(`Broj ${i}`);
//     i++;
// }
// //1. Zadatak
// for (let j = 1;j<=20;j++) 
// {
//     console.log(`Ovo je broj ${j}`);
//      j++;
// }
// //2.Zadatak
// for (let k=20;k>=1;k++) 
// {
//     console.log(`Ovo je broj ${k}`);
//      k++;
// }   
// //5.Zadatak
// let suma = 0;
// let n = 5;
// for (let p=1; p<=n; p++) 
// {
//     suma += p;
//     p++;
// }
// console.log(`Suma brojeva od 1 do ${n} je ${suma}`);
// ! Kod iznad ubacuje u endless loop
// *Zadatak 9
let i=1;
for (i;i<=3;i++) {
    document.body.innerHTML += ` <img src="${i}.jpg" style="width:200px; height:200px;"> Slika broj ${i} </img>` 
}
i++;

// *Zadatak 10
let j=20;
let k=100;
let proizvod;
for (j;j<=100;j++) {
    if (j%11==0) {
        proizvod *=j;
    }
    j++;
}


