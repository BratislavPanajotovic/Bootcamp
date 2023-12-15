//* Zadatak 2
// ? Odrediti zbir elemenata celobrojnog niza

let niz=[8,4,-2,0,1,0];
let niz2=[10,-5,0,-3];
let niz3=[1,2,3,4,5,6];


let sumEl = niz => {
let sum=0;

for (let i=0;i<niz.length;i++) {
    sum+=niz[i];
}
return sum;
}

console.log(sumEl(niz));
console.log(sumEl(niz2));
console.log(sumEl(niz3));

let multEl = niz => {
    let multiply = 1;
    for(let i=0;i <niz.length;i++) {
        multiply *= niz[i];
    } return multiply;
}

console.log(multEl(niz));
console.log(multEl(niz2));
console.log(multEl(niz3));

let arSr = niz => {
let sum = 0;

for (let i=0;i<niz.length;i++) {
    sum += niz[i];
} return sum / niz.length;
}
console.log(arSr(niz));

let maxValue= niz => {

    let mValue=niz[0];

    for (let i=1;i<niz.length;i++) {

        if (mValue < niz[i])
        {
            mValue = niz[i];
        } 
    } 
    return mValue;

}

console.log(maxValue(niz));

let minValue= niz => {

    let mValue=niz[0];
    
    for (let i=1; i < niz.length; i++) {

        if (mValue > niz[i])
        {
            mValue = niz[i];
        } 
    } return mValue;

}
console.log(minValue(niz));
