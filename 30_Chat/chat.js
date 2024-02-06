let data = db.collection("chats");
let datum1 = new Date("2024-06-02 19:04:00");

class Chatroom {
  constructor(r, un) {
    this.room = r;
    this.username = un;
    this.chats = db.collection("chats");
  }
  set room(r) {
    this._room = r;
  }
  set username(un) {
    if (this.checkUsername(un)) {
      this._username = un;
    } else {
      alert(
        "Invalid username. Your username must be between 3 and 10 characters and to not be having any spaces or tabs."
      );
    }
  }
  get room() {
    return this._room;
  }
  get username() {
    return this._username;
  }

  checkUsername(username) {
    return (
      username.trim().length >= 3 &&
      username.trim().length <= 10 &&
      !/^\s+$/.test(username)
    );
  }

  async addChat(mess) {
    let docChat = {
      message: mess,
      username: this.username,
      room: this.room,
      created_at: new Date(),
    };
    return await this.chats.add(docChat);
  }
  // async getChat() {
  //   const snapshot = await this.chats
  //     .where("room", "==", this.room)
  //     .orderBy("created_at", "asc")
  //     .get()
  //     .then(
  //       snapshot.forEach((doc) => {
  //         const data = doc.data();
  //         console.log(`${data.username}: ${data.message}`);
  //       })
  //     )
  //     .catch((err) => {
  //       console.log(`There is an error : ${err}`);
  //     });
  // }
  getChats(callback) {
    this.chats
      .where("room", "==", this.room)
      .orderBy("created_at")
      .onSnapshot((snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            callback(change.doc.data());
          }
          console.log(change.type);
        });
      });
  }
}

let myChatroom1 = new Chatroom("#js", "Baki");
let myChatroom2 = new Chatroom("#general", "Baki");
let myChatroom3 = new Chatroom("#random", "Baki");

console.log(myChatroom3.room, myChatroom3.username);

myChatroom1.room = "#js_updated";
myChatroom2.username = "Bakiii";
console.log(myChatroom1);
console.log(myChatroom2);

myChatroom1.addChat("Hello World!").then().catch();
myChatroom1.getChats((data) => {
  console.log(data);
});
