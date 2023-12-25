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

let user1 = {
  username: "BakiP",
  age: 26,
  blogs: [blog1, blog3],
};

let user2 = {
  username: "BakiM",
  age: 20,
  blogs: [blog2],
};
let user3 = {
  username: "BakiJ",
  age: 16,
  blogs: [blog2],
};
let user4 = {
  username: "JohnDoe",
  age: undefined,
  blogs: [blog1, blog3],
};
///
let blogs = [blog1, blog2, blog3];
let users = [user1, user2, user3, user4];

users.forEach((u) => {
  let userBlogs = u.blogs;
  userBlogs.forEach((b) => {
    console.log(b.title);
  });
});
users.forEach((u) => {
  let userBlogs = u.blogs;
  userBlogs.forEach((b) => {
    if (b.likes > 50) {
      console.log(b.title);
    }
  });
});
users.forEach((u) => {
  if (u.age < 18) {
    console.log(u.username);
  }
});
users.forEach((u) => {
  if (u.username == "JohnDoe") {
    console.log(u.blogs);
  }
});
users.forEach((u) => {
  let sumLikes = 0;
  u.blogs.forEach((b) => {
    sumLikes += b.likes;
  });
  if (sumLikes > 100) {
    console.log(u.username);
  }
});
let sumLikes = 0;
let br = 0;
users.forEach((u) => {
  u.blogs.forEach((b) => {
    sumLikes += b.likes;
    br++;
  });
});
//* Zadaci 6. i 7.
let prosek = sumLikes / br;
users.forEach((u) => {
  u.blogs.forEach((b) => {
    if (b.likes > prosek) {
      console.log(b.title);
    }
  });
});

let sumDis = 0;
let brN = 0;
users.forEach((u) => {
  u.blogs.forEach((b) => {
    sumDis += b.dislikes;
    brN++;
  });
});
let prosekN = sumDis / brN;

let naslovi = [];
users.forEach((u) => {
  u.blogs.forEach((b) => {
    if (b.likes > prosek && b.likes < prosekN) {
      naslovi.push(b.title);
    }
  });
});
console.log(naslovi);
///////////////////////////////////////
let dan1 = {
  datum: "2023/12/22",
  kisa: true,
  sunce: false,
  oblacno: true,
  temperature: [-3, -4, -6, -7, -6, -4, -10, 0],
};
let dan2 = {
  datum: "2023/12/24",
  kisa: false,
  sunce: true,
  oblacno: false,
  temperature: [3, 4, 6, 7, 9, 8, 5, 3],
};
let dan3 = {
  datum: "2023/12/25",
  kisa: false,
  sunce: true,
  oblacno: true,
  temperature: [3, 4, 6, 6, 7, 5, 4, 3],
};
let dani = [dan1, dan2, dan3];
let datum = "";
let maxMeasure = dani[0].temperature.length;
console.log(maxMeasure);
let dateTemp = (niz) => {
  for (let i = 0; i < niz.length; i++) {
    if (niz[i].temperature.length >= maxMeasure) {
      console.log((datum = niz[i].datum));
    }
  }
};
