let a=[-6,8,11,6,0];
let b = ['Pera','Mika','Laza'];

let ispisNizaKolona = niz => {
    let s='';
    for (let i=0;i<niz.length;i++) {
        s+= niz[i] + ' ';
    }
    console.log(s);
}
ispisNizaKolona(a);
ispisNizaKolona(b);

let ispisNizaDiv = niz => {
    let div = document.getElementById('container');
    let s='';
    for (let i=0;i<niz.length;i++) {
        s+= niz[i] + ' ';
    }
    return div.innerHTML += s;
}
ispisNizaDiv(a);
ispisNizaDiv(b);
let ispisKonzola = a => {
    console.log(a);
}
let ispisStranica = a => {
    let div = document.getElementById("container");
    div.innerHTML =+ a;
}
let ispisNiza = (niz,cb)=> {
    let s='';
    for (let i=0;i<niz.length;i++) {
        s+= niz[i] + ' ';
    } 
    cb(s);
}
ispisNiza(a,ispisKonzola);