console.log(db);
const customers = 'customers';

let users = db.collection("users");
console.log(users);

let d1 = users.doc("bpan")
// let d2 = users.collection('bpan');

let cust1 = {
    name: "Mika",
    age: 27,
    adresses: ["Loznica","Valjevo"],
    salary: 400.60
}
db.collection(customers).doc('cust1').set(cust1).then(
    () => {
        document.body.innerHTML += "Korisnik dodat u bazu."
    }
    
    ).catch(e => {
        document.body.innerHTML += `Greska: ${e}`
    })

db.collection(customers).doc().set({
    name: "Zika",
    

})
console.log(d1);
let cust2 = {
    name: "Pera",
    age: 40,
    adresses: ["Loznica","Valjevo"],
    salary: 4000.60
}

db.collection(customers).doc('cust2').set(cust2).then(
       () => {
        document.body.innerHTML += "Korisnik dodat u bazu."
        
    }
    ).catch(e => {
        document.body.innerHTML += `Greska: ${e}` })