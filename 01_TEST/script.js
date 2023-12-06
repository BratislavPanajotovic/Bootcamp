let dan = new Date().getDay();
let vreme = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
if (dan == 0 && dan == 6 ) {
document.getElementById("naslov").innerHTML =`Odmarate? ITBootcamp vam nudi mopgucnost da se okrenete novoj profesiji ${vreme}`;
}
else {
document.getElementById("naslov").innerHTML = `Radite? ITBootcamp vam nudi mopgucnost da se okrenete novoj profesiji ${vreme}`;
}