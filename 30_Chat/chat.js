let data = db.collection("chats");
let datum1 = new Date("2024-06-02 19:04:00");

class Chatroom {
  constructor(room, username, chats) {
    this._room = room;
    this._username = username;
    this._chats = db.collection("chats");
  }
  set room(newRoom) {
    this._room = newRoom;
  }
  set username(newUsername) {
    if (this.checkUsername(newUsername)) {
      this._username = newUsername;
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

  async addChat(message) {
    db.collection("chats")
      .add({
        message: message,
        username: this.username,
        room: this.room,
        created_at: firebase.firestore.Timestamp.fromDate(datum1),
      })
      .then(() => {
        console.log("Uspesno dodat task");
      })
      .catch((e) => {
        console.log(`Greska: ${e}`);
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
