//* Zadatak 3

function neparan(n) {
    if (n%2 == 1) {
        return true;
    } else {
        return false;
    }
}

// let neparan = (n) => {
//     let x=false;

//     if (n%2 == 0) {
    
//         x=true;
//     }
    
//         return x;
// } 

// //* Maks2 
let maks2 = (a,b) => {
    let greaterNumber=0;
(a<b) ? greaterNumber+= b : greaterNumber +=a;
    return greaterNumber;
}

//* Maks4

let maks4 = (a,b,c,d) => {
    let greaterNumber=a;
    if (greaterNumber < b) {
        greaterNumber =b;
    }
    if (greaterNumber < c) {
        greaterNumber =c;
    }
    if (greaterNumber < d) {
        greaterNumber =d;
    } return greaterNumber;
}

// let maks4 = (a,b,c,d) => {
//     let greaterNumber=a;
//     (greaterNumber < b) ?
//     greaterNumber =b :
//     (greaterNumber <c) ? 
//     greaterNumber = c :
//     (greaterNumber <d) ?
//     greaterNumber = d :
//     greaterNumber = a;
//     return greaterNumber;
// }
console.log(maks4(1,15,2,22));
console.log(maks2(15,22));

// const getPic = (adress) => {
//     let pic;
//     pic += document.write(`<img src="adress">`)
//     return pic;
// }
// let div = document.getElementById('divko');

let getPic = address => {
    let img = document.createElement('img'); 
    img.src = address;
} 
let div = document.getElementById ('divko');
div.innerHTML += getPic()


