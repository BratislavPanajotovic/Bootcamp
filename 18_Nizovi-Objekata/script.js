let arrObjBlogs = [
  { title: "AAA", likes: 30, dislikes: 3 },
  { title: "BBB", likes: 25, dislikes: 26 },
  { title: "CCC", likes: 50, dislikes: 2 },
];
let blog1 = {
  title: " IF naredba grananja !",
  likes: 50,
  dislikes: 21,
};
let blog2 = {
  title: " While petlja ",
  likes: 25,
  dislikes: 36,
};
let blog3 = {
  title: " For petlja ",
  likes: 100,
  dislikes: 12,
};

let arrBlogs = [blog1, blog2, blog3];
console.log(arrBlogs);
for (let i = 0; i, i < arrBlogs.length; i++) {
  console.log(arrBlogs[i]);
}
arrBlogs.forEach((obj) => {
  console.log(obj.title);
});

let sum = 0;
arrBlogs.map((obj) => {
  sum += obj.likes;
});
console.log(`Suma lajkova je ${sum}`);

let sumLikes = (arr) => {
  let sum = 0;
  arr.forEach((obj) => {
    sum += obj.likes;
  });
  return sum;
};
console.log(`Suma lajkova je ${sumLikes(arrBlogs)}`);

let avgLikes = (arr) => {
  return sumLikes(arr) / arr.length;
};

// let posTitles = (arr) => {
//   let pozNaslovi = "";
//   arr.forEach((obj) => {
//     if (obj.likes > obj.dislikes) {
//       pozNaslovi = obj.title;
//     }
//   });
//   return pozNaslovi;
// };
// console.log(posTitles(arrBlogs));
let posTitles = (arr) => {
  let titlovi = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].likes > arr[i].dislikes) {
      titlovi.push(arr[i].title);
    }
  }
  return titlovi;
};
console.log(posTitles(arrBlogs));

let doublePosTitles = (arr) => {
  let titlovi = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].likes > arr[i].dislikes * 2) {
      titlovi.push(arr[i].title);
    }
  }
  return titlovi;
};
console.log(doublePosTitles(arrBlogs));

let titlesSpecial = (arr) => {
  arr.forEach((arr) => {
    if (arr.title.includes("!")) {
      console.log(arr.title);
    }
  });
};
titlesSpecial(arrBlogs);
