const form = document.querySelector('#order');
const capacity = document.querySelector('#capacity');
const div = document.querySelector('#result')
const table = document.querySelector('.tabela');

function getItems(resource) {

    return new Promise((resolve, reject) => {

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
    });

}

function submitFormVarijanta2(event) {
    event.preventDefault();

    let nizArtikala = [];

    getItems("JSON/stock.json")
    .then(data => {data.forEach(artikal => {
        if(artikal.stock == 0) {
            nizArtikala.push(artikal.id)
        }
    })
    return getItems("JSON/weights.json");
})
.then(data => {
    let totalWeight =0;
    data.forEach(artikal => {
        if(nizArtikala.includes(artikal.id) ) {
            totalWeight += artikal.weight;
        }
    })
    if(totalWeight < Number(capacity.value)) {
        return getItems("json/prices.json")
    } else {
        div.innerHTML = "Not enough capacity in truck!!"
    }
}).then(data => {
    if(data !== undefined) {
        let totalPrice =0;
        data.forEach(artikal => {
            if(nizArtikala.includes(artikal.id) ) {
                totalPrice += artikal.price;
            }
            function tableMaker (niz) {
                let tableB = `<ul>`
                let tableE = `</ul>`
                for(let i=0 ;i<niz.length;i++) {
                    let tr = ``
                }
            }
        })

        div.innerHTML = `Total price of articles: ${totalPrice}`

    }
})
.catch(msg=> {div.innerHTML = msg});
}

form.addEventListener("submit",submitFormVarijanta2)
