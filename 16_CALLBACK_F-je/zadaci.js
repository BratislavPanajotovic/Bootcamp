let a = [102,55,555,32,222,999,1010]
let b= [1,2,3,4,5]
let sumaEl = niz => {
    let suma = 0;
    niz.forEach( el => {
        suma += el;
    }); return suma;
} 
//* Zadatak 5

let maxVr = niz => {
    let max = niz[0];
    niz.forEach(elem => {
         (elem > max) ? max=elem : false
    }); return max;
}

console.log(maxVr(a));

//* Zadatak 2 
let proizvod = niz => {
let pr=1;
niz.forEach(el => {
    pr *=el;
}); return pr;
}
console.log(proizvod(b));

//* Zadatak 3 
let srVr= niz => {
    let suma=0;
    let brojac=0;
    niz.forEach(el => {
        suma += el;
        brojac++;
    }); return suma/brojac;
}
console.log(srVr(a));

//* Zadatak 5*
let minVr = niz => {
    let min = niz[0];
    niz.forEach(elem => {
         (elem < min) ? min=elem : false
    }); return min;
}
console.log(minVr(a));