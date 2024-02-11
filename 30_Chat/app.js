import { Chatroom } from "./chat.js";
import { ChatUI } from "./ui.js";

// DOM
let ul = document.querySelector("ul");
let msgInput = document.querySelector("#messageInput");
let btnSend = document.querySelector("#send");
let navRooms = document.querySelector("nav");
let divAlert = document.querySelector(".alert-success");
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
  if (msgInput.value == "") {
    alert("Ne mozete poslati praznu poruku!");
  } else {
    chatroom.addChat(msgInput.value);
  }
});

btnUpdate.addEventListener("click", () => {
  if (userInput.value.length < 4) {
    alert("Ne mozete da imate username koji ima manje od 4 karaktera.");
  } else {
    divAlert.innerHTML = `Success! <strong>${userInput.value}</strong>, you have been signed in successfully!`;
    divAlert.classList.add("show");
    divAlert.scrollIntoView({ behavior: "smooth" });
    console.log(`uso`);
    setTimeout(() => {
      divAlert.classList.remove("show");
    }, 3000);

    chatroom.updateUsername(userInput.value);
  }
});

navRooms.addEventListener("click", (e) => {
  if (e.target.tagName == "BUTTON") {
    const buttons = document.querySelectorAll(".rooms");
    buttons.forEach((button) => {
      button.style.border = "none";
    });

    e.target.style.border = "2px solid black";

    let newRoom = e.target.textContent;
    chatroom.updateRoom(newRoom);
    chatui.clearChat();
    chatroom.getChats((data) => {
      chatui.templateLI(data);
    });
  }
});
