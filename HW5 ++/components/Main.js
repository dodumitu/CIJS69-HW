import Content from "./content.js";
import ConversationList from "./ConversationList.js";
class Main {
  $mainContainer;
  $conversationList;
  $content;
  constructor() {
    this.$mainContainer = document.createElement("div");
    this.$mainContainer.setAttribute(
      "class",
      "flex w-screen h-screen bg-gray-400"
    );
    this.$conversationList = new ConversationList(this.changeActive);

    this.$content = new Content();
    this.$content.setValue("Chat-App");
  }

  changeActive = (data) => {
    this.$content.setValue("");
    this.$content.setValue(data);
  };

  render(container) {
    this.$conversationList.render(this.$mainContainer);

    this.$content.render(this.$mainContainer);

    container.appendChild(this.$mainContainer);
  }
}

export default Main;
