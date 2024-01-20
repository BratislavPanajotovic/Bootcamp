const request = new XMLHttpRequest();
request.addEventListener("readystatechange", () => {
  if (request.readyState == 4 && request.status == 200) {
    let data = JSON.parse(request.responseText);
    console.log(data);
  } else if (request.readyState == 4) {
    console.log("Desila se greska");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/todos");
request.send();
