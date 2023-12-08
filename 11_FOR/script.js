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
// ? Ispravljen je kod iznad - proveri


//* Zadatak 3.
let i=0;
let parniBr;
for (i;i<=20;i++) {
    if (i%2==0) {
        parniBr = i;
console.log(`Parni broj: ${parniBr}`); 
   }
}
//* Zadatak 4.
let n=5;
let m=15;
let dvVred;
for (n;n<=m;n++) {
    dvVred = n * 2;
console.log(`Dvostruka vrednost broja ${n} je ${dvVred}`);
}
//* Zadatak 6.
let suma = 0;
let o = 1;
let p= 5;
for (p; p>=o; p--) 
{
    suma += p;
}
console.log(`Suma brojeva od o do p je ${suma}`);
//* Zadatak 7.
let proizvod = 1;
let j = 5;
let k = 13;
for (j; j<=k; j++) 
{
    proizvod *= j;
}
console.log(`Proizvod brojeva od j do k je ${proizvod}`);
// * Zadatak 8.
let sumaKvadrata = 0;
n=4;
m=8;
for (n;n<=m;n++) {
    sumaKvadrata += n**2;
}
console.log(`Suma kvadrata brojeva od n do m je ${sumaKvadrata}`);
//* Zadatak 12
n=3;
m=10;
suma =0;
br=0;
for (n;n<=m;n++) {
    suma +=n;
    br++
}
let arsr = suma/br;
// *Zadatak 9
i=1;
for (i;i<=3;i++) {
    document.write(` <img src="${i}.jpg" style="width:200px; height:200px;"> Slika broj ${i} </img>` )
}

// *Zadatak 10


let proizvodBrojeva=1;
for (j=20;j<=100;j++) {
    if (j%11==0) {
        proizvodBrojeva *=j;
    }
}
console.log(`Proizvod svih brojeva deljivih sa 11 u intervalu od j do k je ${proizvodBrojeva}`);
// *Zadatak 11
n=150;
let brojac=0;
for (m=5;m<=n;m++){
    if(m%13==0){
        brojac++;
    }
}
console.log(brojac);
//* Zadatak 16
n=5;
n=15;
suma=0;
a=4;
for(i=n;i<=m;i++) {
    if (i%a !=0){
        suma+=i;
    }
}
console.log(`Suma brojeva od ${n} do ${m} koji NISU deljivi brojem ${a} je ${suma}`);
//* Zadatak 13
m=10;
i=-15;
let brojacP=0;
let brojacN=0;
for(m; m>=i; m--)
{
    if(m>0) {
        brojacN++;
    } else if (i=0) {
        console.log(`0 je neutralan broj :)`);
    } else {
        brojacP++;
    }
} console.log(`Negativnih brojeva od ${i} do ${m} ima ${brojacN} a pozitivnih ${brojacP}`);
//* Zadatak 14
n=5;
let brojacD=0;
for (n; n<=50; n++) {
    if(n%3==0 || n%5==0) {
        brojacD++
    }
}
console.log(`Od 5 do 50 ima ${brojacD} brojeva koji su deljivi sa 3 ili 5`);
//* Zadatak 15
i=10;
for (i;i<=100;i++) {
    if(i%10 == 4){
        
    }
}