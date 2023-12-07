// let i=1;
// while (i<=5) {
// console.log(i);
// i++;
// }
// console.log("Kraj petlje");
// console.log(i);

// 1. Zadatak

// let x = 1;
// while (x<=20) { 
// console.log(x);
// console.log(x++);

// }

// 2. Zadatak
// let y = 20;
// while (y <=20 && y>0 ) { 
//     console.log(y);
//     y--;
// }
// console.log( "Kraj" );
//3. Zadatak
// i=1;
// while (i <= 20) 
// {
//     if (i % 2 == 0) {
//         console.log(i);
// }
//     i++;
// }
// console.log("kraj");
//4.Zadatak
// let i=1
// while (i >= 6){
// if (i%2 ==0){
//     document.write(<p style="color:red"> lorem ipsum dolores </p>)
// }
// }
let n=7;
i = 1;
while (i <= n) {
    if (i % 3 == 1) {
    document.body.innerHTML += ` <p class="plava">Paragraf broj ${i}</p>`
    }
    else if (i%3 == 2) {
        document.body.innerHTML += ` <p class="crvena">Paragraf broj ${i}</p>`
    
} else {document.body.innerHTML += ` <p class="zelena">Paragraf broj ${i}</p>` }
    i++;

}