let getJSON = (resource, callback) => {};
//1.kreiranje XML objekta
const request = new XMLHttpRequest();
request.addEventListener("readystatechange", function () {
  if (request.readyState == 4 && request.status == 200) {
    //sve je ok
    let data = JSON.parse(request.responseText);
    callback(data, undefined);
  } else if (request.readyState == 4) {
    //nesto nije ok
    callback(undefined, "Desila se greska");
  }
});

//2. otvaramo kreirani zahtev
request.open("GET", resource);
//3. slanje zahteva
request.send();

getJSON("prvi.json", (data, err) => {
  if (data) {
    console.log(data);
    getJSON("drugi.json",(data,err)=>{
      
      if(data) {
        console.log(data);
        getJSON("treci.json",(data,err) => {
          if(data) {
            console.log(data);
          } else {
            console.log(err);
          }
        })
      } else {
      console.log(err);
      }
      
    })
  } else {
      console.log(err);
  }
});
getJSON("drugi.json", (data, err) => {
  if (data) {
    console.log(data);
  } else {
    console.log(err);
  }
});
