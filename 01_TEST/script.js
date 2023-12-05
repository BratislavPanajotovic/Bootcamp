let dan = new Date().getDay();
vreme = new Date().toLocaleTimeString();
if (dan == 0 && dan == 6 ) {
document.getElementById("naslov").innerHTML =`Odmarate? ITBootcamp vam nudi mopgucnost da se okrenete novoj profesiji ${vreme}`;
}
else {
document.getElementById("naslov").innerHTML = `Radite? ITBootcamp vam nudi mopgucnost da se okrenete novoj profesiji ${vreme}`;
}