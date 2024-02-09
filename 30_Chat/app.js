import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let ul = document.querySelector("ul");
let msgInput = document.querySelector("#messageInput");
let btnSend = document.querySelector("#send");
let navRooms = document.querySelector("nav");

let userInput = document.querySelector("#usernameInput");
let btnUpdate = document.querySelector("#update");

let chatui = new ChatUI(ul);
let chatroom = new Chatroom("js", "Stefan");

let oldUsername = chatroom.takeUsername();
if (oldUsername) {
  chatroom.updateUsername(oldUsername);
} else {
  chatroom.updateUsername("Anonymous");
}

chatroom.getChats((data) => {
  chatui.templateLI(data);
});

btnSend.addEventListener("click", () => {
  chatroom.addChat(msgInput.value);
});

btnUpdate.addEventListener("click", () => {
  chatroom.updateUsername(userInput.value);
});

navRooms.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    let newRoom = e.target.textContent;
    chatroom.updateRoom(newRoom);
    chatui.clearChat();
    chatroom.getChats((data) => {
      chatui.templateLI(data);
    });
  }
});
