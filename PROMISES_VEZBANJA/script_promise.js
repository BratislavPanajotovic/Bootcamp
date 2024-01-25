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

function tableMaker(niz, data,totalPrice) {
    
    let tr = '';
    niz.forEach((itemId) => {
        const itemData = data.find(item => item.id === itemId);

        if (itemData) {
            tr += `<tr> <td>${itemData.item}</td> <td>${itemData.price}</td> </tr>
             `;
        }
        
    })
    let html = `<tbody>${tr}<tr> <td> UKUPNO: </td> <td> ${totalPrice} </td> </tr> </tbody>`
    table.innerHTML += html;


}
function submitFormVarijanta2(event) {
    event.preventDefault();
 
    btnSbmt.disabled = true;
    form.removeEventListener("submit", submitFormVarijanta2);
   
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
                    console.log(nizArtikala);
                    
                }
                
            })
    
            tableMaker(nizArtikala, data,totalPrice);
    
        }
        
    })
    .catch(msg=> {
        div.innerHTML = msg;
    
    });

    }

form.addEventListener("submit",submitFormVarijanta2)
