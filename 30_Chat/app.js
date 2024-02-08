import { Chatroom } from "./chat.js";

let myChatroom1 = new Chatroom("#js", "Baki");
let myChatroom2 = new Chatroom("#general", "Baki");
let myChatroom3 = new Chatroom("#random", "Baki");

let showMessage = document.querySelector("#msgList");
let li = document.createElement("li");

let formatDate = (timestamp) => {
  const { seconds, nanoseconds } = timestamp;
  const miliseconds = seconds * 1000 + nanoseconds / 1e6;
  return new Date(miliseconds).toLocaleString();
};

let templateLI = (data) => {
  li.innerHTML = `${data.username}: ${data.message} <br> ${formatDate(
    data.created_at
  )}`;
  showMessage.appendChild(li);
};

console.log(myChatroom3.room, myChatroom3.username);

myChatroom1.addChat("Hello World!").then().catch();
myChatroom1.getChats((data) => {
  console.log(data);
});

myChatroom1
  .addChat("Zdravo svima!")
  .then(console.log("Zdravo svima!"))
  .catch((err) => {
    console.log(`Error while adding chat: ${err}`);
  });

myChatroom1.getChats((data) => {
  templateLI(data);
});
