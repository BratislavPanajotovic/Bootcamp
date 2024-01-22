function getUsers(resolve, reject) {
  let request = new XMLHttpRequest();
  request.addEventListener("readystatechange", function () {
    if (request.readyState === 4 && request.status === 200) {
      let data = JSON.parse(request.responseText);
      resolve(data);
    } else if (request.readyState === 4) {
      reject("desila se greska");
    }
  });
  request.open("GET", "http://jsonplaceholder.typicode.com/users");
  request.send();
}
function zad2(niz) {
  niz.forEach((u) => {
    if (u.website.includes(".com")) {
      document.body.innerHTML += UserActivation.website + "<br>";
    }
  });
}
function ispisStringa(str) {
  document.body.innerHTML += str + "<br>";
}
getUsers(zad2, ispisStringa);
