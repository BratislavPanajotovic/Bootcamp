// db.collection("customers")
// .where("salary","<=",800)
// .where("age","==",27).get().then(snapshot => {
//     snapshot.forEach(doc => {
//         let data = doc.data();
//         console.log(data);
//     })
// }
//     ).catch(err => {
//     console.log(`There is an error : ${err}`);
// })
db.collection("customers").where('age','in',[22,25,28])
.get()
.then(snapshot=>{
    snapshot.forEach(doc => {
        let data = doc.data();
        console.log(data);
    })
}).catch(err => {
    console.log(`There is an error : ${err}`);
});

db.collection("tasks").orderBy("description").get().then(
        snapshot => {
            snapshot.forEach( doc => {
                let data = doc.data();
                console.log(data);
            })
        }
    ).catch(err=> {
        console.log(`There is an error: ${err}`);
    })

    db.collection("tasks").where("priority ", "==" , "false").get().then(
        snapshot => {
            snapshot.forEach( doc => {
                let data = doc.data();
                console.log(data);
            })
        }
    ).catch(err=> {
        console.log(`There is an error: ${err}`);
    })

    let datum = new Date();
    let godina = datum.getFullYear();
    let datum1 = new Date(godina, 0 , 1) // 1. januar tekuce godine
    let datum2 = new Date (godina + 1,0,1) // 1. januar sledece godine
    let ts1 = firebase.firestore.Timestamp.fromDate(datum1);
    let ts2 = firebase.firestore.Timestamp.fromDate(datum2);

    db.collection('tasks')
    .where('due_date', '>=', ts1 )
    .where('due_date', '<' , ts2)
    .get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            let data = doc.data();
            console.log(data);
        })
    }).catch(err => {
        console.log(`There is an error: ${err}`);
    })