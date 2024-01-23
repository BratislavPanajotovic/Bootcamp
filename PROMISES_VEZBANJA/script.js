const form = document.querySelector('#order');
const capacity = document.querySelector('#capacity');
const div = document.querySelector('#result')

/*!  Odrediti artikle koji vise nisu na stanju */
/*! Odrediti ukupnu tezinu svih artikala*/
/*! Ako je ta tezina manja od kapaciteta kamiona, onda:
3.1 Odrediti i ispisati ukupnu cenu svih tih artikala
3.2 Inacem ispisati poruku da kamion nema trazeni kapacitet 
*/ 


form.addEventListener("submit", (e)=> {

    e.preventDefault();
    div.innerHTML = "Submitovana forma"

})


function dohvatiZalihe() {

    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", function() {
        
        if(request.readyState === 4 && request.status === 200) {
            // sve ok, obradjujemo zahtev
            
            let data = JSON.parse(request.responseText);
            resolve(data); // callback funkcija sa kojom radimo nesto

        } else if (request.readyState === 4) {
        // desila se neka greska
            reject("Desila se greska")
        
        }
})
request.open('GET', "JSON/stock.json");
request.send();
}

function dohvatiTezine() {

    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", function() {
        
        if(request.readyState === 4 && request.status === 200) {
            // sve ok, obradjujemo zahtev
            
            let data = JSON.parse(request.responseText);
            resolve(data); // callback funkcija sa kojom radimo nesto

        } else if (request.readyState === 4) {
        // desila se neka greska
            reject("Desila se greska")
        
        }
})
request.open('GET', "JSON/weights.json");
request.send();
}

function dohvatiCene() {

    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", function() {
        
        if(request.readyState === 4 && request.status === 200) {
            // sve ok, obradjujemo zahtev
            
            let data = JSON.parse(request.responseText);
            resolve(data); // callback funkcija sa kojom radimo nesto

        } else if (request.readyState === 4) {
        // desila se neka greska
            reject("Desila se greska")
        
        }
})
request.open('GET', "JSON/prices.json");
request.send();
}




function getItems (resource,resolve,reject) {

    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", function() {
        
        if(request.readyState === 4 && request.status === 200) {
            // sve ok, obradjujemo zahtev
            
            let data = JSON.parse(request.responseText);
            resolve(data); // callback funkcija sa kojom radimo nesto

        } else if (request.readyState === 4) {
        // desila se neka greska
            reject("Desila se greska")
        
        }

    })

    request.open('GET', resource);
    request.send();

}

dohvatiZalihe();
dohvatiTezine();
dohvatiCene();
