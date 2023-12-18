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

let duzinaSvakogElementa = (niz) => {

for (let i=0;i<niz.length;i++) {
    let s=niz[i];
    console.log(s.length);
}

}
let najduzi = (niz) => {
    let max = niz[0];
    let maxDuzina = max.length;
    for (let i=1;i<niz.length;i++ ) {
        let vrednost =niz[i];
        if (duzinaSvakogElementa(niz[i])>duzinaSvakogElementa(max)){
        max = vrednost;
        maxDuzina += vrednost.length;
    } return maxDuzina;
}
}
let test = ['aena','Ema','Baki','NuN',"Ana","Null"]
console.log(najduzi(test));
//* Zadatak 21
let avgLength = niz => {
    let zbirDuzina =0;
    for(let i=1;i<niz.length;i++) {
        let s = niz[i];
        zbirDuzina += s.length;
    } return zbirDuzina / niz.length;
}
let aboveAvgLength = niz => {
    let avg = avgLength(niz);
    let broj=0;
    for(let i = 0; i < niz.length; i++) {
        let s = niz[i];
        if (s.length > avg) {
            broj++;
        }
    } return broj;
}
console.log(aboveAvgLength(test));
//* Zadatak 22

let elNumber= niz => {
    let number = 0;
    for (let i=0;i<niz.length;i++){
        if (niz[i].includes('a')) {
            number++;
        } 
    } return number;
} 
let elNumber2 = niz => {
    let number = 0;
    for (let i=0;i<niz.length;i++){
        if (niz[i].includes('a') || (niz[i].includes('A'))) {
            number++;
        } 
    } return number;
} 

console.log(elNumber(test));
//* Zadatak 23 

let firstLetter= niz => {
    let number = 0;
    for (let i=0;i<niz.length;i++){
        if (niz[i].startsWith('a') || (niz[i].startsWith('A'))) {
            number++;
        } 
    } return number;
} 
console.log(firstLetter(test));

//* Zadatak 24
let zad24a=(a,b)=> {
    let n = a.length;
    let c=[];
    for (let i=0;i<n;i++) {
        c.push(a[i], b[i]);
    }
}
return c;