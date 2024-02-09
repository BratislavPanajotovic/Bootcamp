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
    try {
      let docChat = {
        message: mess,
        username: this.username,
        room: this.room,
        created_at: new Date(),
      };
      let response = await this.chats.add(docChat);
      return response;
    } catch {
      console.error();
      "Doslo je do greske!", error;
    }
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
          if (change.type == "added") {
            callback(change.doc.data());
          }
        });
      });
  }

  updateUsername(newUsername) {
    if (!newUsername) {
      newUsername = "Anonymous";
    }
    this.username = newUsername;
    this.saveUsername();
  }

  updateRoom(newRoomId) {
    this.chats
      .where("room", "==", this.room)
      .get()
      .then((this.room = newRoomId))
      .then()
      .catch((error) =>
        console.log(`Error in getting room id to be updated ${error}`)
      );
  }

  saveUsername() {
    localStorage.setItem("username", this.username);
  }

  takeUsername() {
    return localStorage.getItem("username");
  }

  clearChat() {
    list.innerHtml = "";
  }
}

export { Chatroom };
