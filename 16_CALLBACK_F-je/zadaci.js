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
    niz.forEach(el => {
        suma += el;
    }); return suma/niz.length;
}
console.log(srVr(a));

//* Zadatak 6
let minVr = niz => {
    let min = niz[0];
    niz.forEach(elem => {
         (elem < min) ? min=elem : false
    }); return min;
}
console.log(minVr(a));
console.log(minVr(b));


//* Zadatak 7
let iMaxEl = niz => {
    let max = niz[0];
    let maxIndex =0;
    niz.forEach((elem,index) => {
         if (elem > max) {
            max = elem;
            maxIndex = index;
        }
    }); return maxIndex;
}
console.log(iMaxEl(a));
console.log(iMaxEl(b));

//* Zadatak 8

let iMinEl = niz => {
    let minEl=0;
    let min= niz[0];
    niz.forEach((el,index)=>{
        if (el < min){
            min+=el;
            minEl=index;
        }
    }); return minEl;
}
//* Zadatak 9

let brElSrVr= niz => {
    let suma=0;
    let srVr =0;
    let brEl = 0;
    niz.forEach(el => {
        suma += el;
        srVr = suma/niz.length;
        (el > srVr) ?  brEl++ : false
    }); return brEl;
}
// console.log(brElSrVr(a));
// console.log(brElSrVr(b));

//* Zadatak 19

let duzinaSvihStringova = niz => {
    niz.forEac (el => {
        console.log(el.length);
    })
}

let imena = ["Stefan","Vladislav","Nikola","Nevena","Maja"];
duzinaSvihStringova(imena);

//* Zadatak 20

let stringMaxDuzina = niz => {
    let maxVr = niz[0];
    let duzina = niz[0].length;
    niz.forEach(el => { 
        if (el.length>duzina){
            maxVr = el;
            return maxVr;
        }
    })
}
//* Zadatak 24
let zad24 = (a,b) => {
    let c = [];
    a.forEach((el,i) => {
        c.push(el,b[i]);
    }); return c;
}

//* Zadatak 25
let zad25for =(a,b) => {
    let n = a.length;
    let c=[];
    for (let i=0;i<n;i++) {
        c[i] = a[i] * b[i];
    } return c;
}
let n1 = [1,2,3,4];
let n2 = [5,6,7,8,9];
console.log(zad24(n1,n2));
console.log(zad25for(n1,n2));

let zad24forEach = (a,b) => {
    let c=[];
    a.forEach((el,i) => {
        c.push(el*b[i]);
    })
}
//* Zadatak 26
