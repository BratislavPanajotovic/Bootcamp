const form = document.querySelector('#order');
const capacity = document.querySelector('#capacity');
const div = document.querySelector('#result')

/*!  Odrediti artikle koji vise nisu na stanju */
/*! Odrediti ukupnu tezinu svih artikala*/
/*! Ako je ta tezina manja od kapaciteta kamiona, onda:
3.1 Odrediti i ispisati ukupnu cenu svih tih artikala
3.2 Inacem ispisati poruku da kamion nema trazeni kapacitet 
*/ 


form.addEventListener("submit", submitFormVarijanta1);


// function dohvatiZalihe() {

//     let request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", function() {
        
//         if(request.readyState === 4 && request.status === 200) {
//             // sve ok, obradjujemo zahtev
            
//             let data = JSON.parse(request.responseText);
//             resolve(data); // callback funkcija sa kojom radimo nesto

//         } else if (request.readyState === 4) {
//         // desila se neka greska
//             reject("Desila se greska")
        
//         }
// })
// request.open('GET', "JSON/stock.json");
// request.send();
// }

// function dohvatiTezine() {

//     let request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", function() {
        
//         if(request.readyState === 4 && request.status === 200) {
//             // sve ok, obradjujemo zahtev
            
//             let data = JSON.parse(request.responseText);
//             resolve(data); // callback funkcija sa kojom radimo nesto

//         } else if (request.readyState === 4) {
//         // desila se neka greska
//             reject("Desila se greska")
        
//         }
// })
// request.open('GET', "JSON/weights.json");
// request.send();
// }

// function dohvatiCene() {

//     let request = new XMLHttpRequest();

//     request.addEventListener("readystatechange", function() {
        
//         if(request.readyState === 4 && request.status === 200) {
//             // sve ok, obradjujemo zahtev
            
//             let data = JSON.parse(request.responseText);
//             resolve(data); // callback funkcija sa kojom radimo nesto

//         } else if (request.readyState === 4) {
//         // desila se neka greska
//             reject("Desila se greska")
        
//         }
// })
// request.open('GET', "JSON/prices.json");
// request.send();
// }
// dohvatiZalihe();
// // cekaj da se asinhrona f-ja zavrsi
// dohvatiTezine();
// // cekaj da se prethodna asinhrona f-ja zavrsi
// dohvatiCene();
// // cekaj da se prethodna asinhrona f-ja zavrsi
// // ispisi ukupnu cenu




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

function submitFormVarijanta1(e) {
    e.preventDefault();

    let nizArtikala = [];

    getItems("JSON/stock.json", (data)=>{
        data.forEach(artikal => {
            if (artikal.stock == 0) {
                nizArtikala.push(artikal.id)
                console.log(nizArtikala);
            }
        });

        getItems("json/weights.json", (data) => {
            let totalWeight = 0;
            data.forEach(artikal => {
                if(nizArtikala.includes(artikal.id)) {
                    totalWeight+= artikal.weight;
                }
            })

            if(totalWeight <= Number(capacity.value)) {
                getItems("JSON/prices.json",(data)=>{
                let totalPrice = 0;
                data.forEach(artikal => {
                    if(nizArtikala.includes(artikal.id)) {
                     totalPrice += artikal.price;   
                    }
                    
                }) 
                div.innerHTML = `Total price of articles: ${totalPrice}`
                }, (msg)=>{});
            } else {
                div.innerHTML = "Not enough capacity in truck!!"
            }

        }, (msg) => {div.innerHTML = msg})


        console.log(nizArtikala);
    }, (msg) => {
        div.innerHTML = msg;
    })
}