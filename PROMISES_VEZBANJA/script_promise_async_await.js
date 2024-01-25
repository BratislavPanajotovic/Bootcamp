const form = document.querySelector('#order');
const capacity = document.querySelector('#capacity');
const div = document.querySelector('#result')
const table = document.querySelector('.tabela');
const btnSbmt = document.querySelector('.sbmt')

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

   async function clickGetItems() {
        let data1 = await getItems("json/stock.json")
        let nizArtikala = [];
        data1.forEach(artikal => {
            if(artikal.stock == 0) {
                nizArtikala.push(artikal.id)
            }
        })

        let data2 = await getItems("json/weights.json")
        let totalWeight =0;
        data2.forEach(artikal => {
            if(nizArtikala.includes(artikal.id)) {
                totalWeight += artikal.weight;
            }
        })
        if(totalWeight <= Number(capacity.value)) {
            let data3 = await getItems("json/prices.json")
            let totalPrice =0;
            data3.forEach(artikal => {
                if(nizArtikala.includes(artikal.id)) {
                    totalPrice += artikal.price
                }
            })

            return totalPrice;

        } else {
            return "Not enough capacity in truck!"
        }
    }
function submitFormVarijanta3(e) {
    e.preventDefault();
    clickGetItems().then(data=> {
        div.innerHTML = data;
    }).catch(err => {
        div.innerHTML = `Greska: ${err}`
    });
}

form.addEventListener("submit",submitFormVarijanta3);