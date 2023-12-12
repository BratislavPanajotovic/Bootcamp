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