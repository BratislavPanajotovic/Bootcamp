function hello () {
    console.log(  `Ja sam funkcija 👋`  );
}
hello();

function writeText(text){
    console.log(text);
}
writeText("🎉 Ova je poruka iz funkcije!"); 

writeText("🏋️‍♂️ Ovo je neki drugi text");
let t= "👌 my text"
writeText(t);

function fullName (name, lastName) {
    console.log(`${name} ${lastName} has just logged in! 🔛`);
}
// fullName ("Ivan", "Markovic");

// function addition(nr1,nr2){
//     let equals = nr1 + nr2;
//     console.log(`${nr1} + ${nr2} = ${equals}`);
// }
// addition(10,12);

fullName( lastName= 'Nikola', name= 'Petrovic');
function substract(nr1,nr2) {

let substractResult = nr1-nr2;
return substractResult;
}
substract(60,45);

// * Zadatak 3

function neparan(n) {
    let number = "";
    if(n%2==0)
    {
        number = "Broj je paran";
    } else {
        number = "Broj je neparan"; 
    }
    return number;
}
console.log(neparan(10));

//* Zadatak 4

// function maks2(n1,n2){
    
//     let greaterNumber=0;
//     if (n1>n2) {
//         greaterNumber += n1;
//     } else(n2>n1) {
//         greaterNumber =+ n2;
//     } 
//     return greaterNumber;
// }
// console.log(maks2(9,10));

// function maks4(n3,n4,n5,n6){
    
// let greaterNumber=0;
// if (n3>n4) {
//     greaterNumber += n3;
// } else if (n4>n5) {
//     greaterNumber += n4;
// } else if (n5>n6) {
//     greaterNumber += n5;
// } else {
//     greaterNumber+= n6;
// } return greaterNumber;
// }

function maks4(n1, n2, n3, n4) {
    let greaterNumber = n1; 

    if (n2 > greaterNumber) {
        greaterNumber = n2;
    }
    if (n3 > greaterNumber) {
        greaterNumber = n3;
    }
    if (n4 > greaterNumber) {
        greaterNumber = n4;
    }

    return greaterNumber;
}


// console.log(maks2(9,10));
console.log(maks4(1,11,5,50,));

//* Zadatak 5

// function showPic (adress) {
//     document.write(`<img src="${adress}"</img>`);
// }
// showPic("https://pbs.twimg.com/media/F0yCPZeWIAQvKMv.jpg");

//* Zadatak 6

function colorChanger (color) {
document.write(`<p style= color:${color}> 'Change my color!' </p>`)
}
colorChanger("orange");

//* Zadatak 7

function sedmiDan (n) {
    if (n=0) {
        console.log("Nedelja");
    } 
    else if (n=1) {
        console.log("Ponedeljak");
    }
    else if (n=2) {
        console.log("Utorak");
    } 
    else if (n=3) {
        console.log("Sreda");
    } 
    else if (n=4) {
        console.log("Cetvrtak");
    } 
    else if (n=5) {
        console.log("Petak");
    } 
    else if (n=6) {
        console.log("Subota");
    } else {
        console.log("⛔ Unesi broj od 0 do 6 ! ⛔");
    }
}
sedmiDan(3);

