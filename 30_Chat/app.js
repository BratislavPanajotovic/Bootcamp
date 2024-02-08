import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

let myChatroom1 = new Chatroom("#js", "Baki");
let myChatroom2 = new Chatroom("#general", "Baki");
let myChatroom3 = new Chatroom("#random", "Baki");

let sectionMessages = document.querySelector("#messages");
let showMessage = document.querySelector("#msgList");

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

let ChatUI1 = new ChatUI(showMessage);
console.log(ChatUI1.ulChat);
console.log(ChatUI1);

myChatroom1.getChats((data) => {
  //   ChatUI1.ulChat.
});
