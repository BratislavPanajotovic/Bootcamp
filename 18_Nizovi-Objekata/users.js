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
