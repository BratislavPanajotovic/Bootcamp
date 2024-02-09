class ChatUI {
  constructor(ul) {
    this.ulChat = ul;
  }
  set ulChat(ul) {
    this._ulChat = ul;
  }
  get ulChat() {
    return this._ulChat;
  }
  formatDate = (timestamp) => {
    const { seconds, nanoseconds } = timestamp;
    const miliseconds = seconds * 1000 + nanoseconds / 1e6;
    return new Date(miliseconds).toLocaleString();
  };

  templateLI = (data) => {
    let li = document.createElement("li");
    li.innerHTML = `${data.username}: ${data.message} <br> ${this.formatDate(
      data.created_at
    )}`;
    this.ulChat.appendChild(li);
  };

  clearChat = () => {
    this.ulChat.innerHTML = "";
  };
}

export { ChatUI };
