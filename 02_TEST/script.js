// * Zadatak 1
// let bmi=0;
// let bmiCalc = (tezina,visina) => {
// bmi=tezina/((visina/100)**2)

// if (bmi <= 18.5){

// console.log('Pothranjenost');

// } else if (18.5 < bmi && bmi < 24.9 ) {

// console.log('Normalna tezina');

// } else if (24.9 <= bmi && bmi <= 30) {

// console.log('Povisena tezina');

// } else if (bmi>30) {
// console.log('Gojaznost');
// }
// }
// bmiCalc(50,155);
// console.log(bmi);

//* Zadatak 2

// let estimacija = (tezina,zeljenaTezina) => {
// let nedelje = 0 ;

//     while ((tezina > zeljenaTezina && zeljenaTezina < tezina * 0.98) || (tezina < zeljenaTezina && zeljenaTezina > tezina * 1.01)) {
//         if (tezina > zeljenaTezina) {
//             tezina*=0,98;
//         } else {
//             tezina *= 1.01;
//         } nedelje ++;

// } return nedelje;
// } 

// console.log(estimacija(70,63));
//* Zadatak 3
// let calcAvg = tezine => {
//     let min = tezine[0];
//     let max = tezine[0];
//     for (let i=1; i<tezine.length; i++) {
//         if (tezine[i] <min) {
//             min = tezine[i];
//         } else if(tezine[i] > max) {
//             max=tezine[i];
//         }
//     }
//     let i=0;
//     while (i < tezine.length) {
//         if (tezine[i] == min || tezine[i]==max) {
//             tezine.splice(i, 1)
//         } else {
//             i++;
//         }
//     }

//     function avg(niz) {
//         return niz.reduce ((acc,val) => acc + val,0)/ niz.length;
//     }
//     return calcAvg(tezine);
// }
// let tezine = [20,50,33,60,90,180,11,200];
// console.log(calcAvg(tezine));
//* Zadatak 4
// let calcAvgWeight = (tezine) => {
//     let suma1 =0;
//     let suma2 =0;
//     let count1 =0;
//     let count2 =0; 

//     for (let i=0; i<tezine.length;i++) {
//         suma1 += tezine[i];
//         count1++;
//     }
//     let s1=suma1/count1;
//     for (let i=0;i<tezine.length;i++){
//         suma2 +=  tezine[i];
//         count2++;
//     }
//     let s2= count2 !== 0 ? suma2/count2 : 0
//     return (s2-s1) <= 0.1 * s1
// }
// console.log(calcAvgWeight([100,50,55,120,75]));

//* Zadatak 5
let avgWeight = (tezine) => {
    let suma =0;
    for (let i=0;i<tezine.length;i++) {
        suma += tezine[i];
    }
    return suma / tezine.length;
}
let calcClients = (tezine) => {
let prosek = avgWeight(tezine);
let brojOsoba = 0;

for (let i=0;i<tezine.length;i++) {

}

} 