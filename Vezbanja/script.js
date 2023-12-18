let cars =[10,15,20,25,30];
let distanceWent = (number) => {
        return number * 60;
}
let distance = cars.map(distanceWent);

console.log(distance)
/////////////////////////////////////////
let zbir = 0;
function zbirCifara(broj){
    while(broj > 0){
        zbir += broj % 10;
        broj = Math.floor(broj/10);
    }
    return zbir;
    }
  console.log(zbirCifara(367));
  ///////////////////////////////////////