import ConversationItem from "./ConversationItem.js";
import CreateNewConversationModal from "./CreateNewConversationModal.js";

export default class ConversationList {
  $newConversationButton;
  $createConversationModal;
  $conversationItem;

  constructor() {
    this.$conversationItem = new ConversationItem()
    this.$createConversationModal = new CreateNewConversationModal();

    this.$newConversationButton = document.createElement('button')
    this.$newConversationButton.textContent = "New conversation"
    this.$newConversationButton.setAttribute('class', "bg-white py-2 px-4 rounded-full")
    this.$newConversationButton.addEventListener('click', () => {
      this.$createConversationModal.openModal()
    })
  }

  render(mainContainer) {
    const conversationsListContainer = document.createElement("div");
    conversationsListContainer.setAttribute(
      "class",
      "w-1/4 h-full py-8 px-4 bg-blue-400"
    );
    conversationsListContainer.appendChild(this.$newConversationButton)
    conversationsListContainer.app;
    this.$createConversationModal.render(conversationsListContainer)
    
    this.$conversationItem.render(conversationsListContainer)
    mainContainer.appendChild(conversationsListContainer);
  }
}
