import InputGroup from "./InputGroup.js";
export default class CreateNewConversationModal {
  $modalContainer;

  $sendTo;
  $sendLabel;
  $sendInput

  $message;
  $messLabel;
  $messInput;
  $sendBtn;
  constructor(container) {

    this.$modalContainer = document.createElement("div");
    this.$modalContainer.setAttribute(
      "class",
      "modal fixed w-1/2 h-1/2 hidden top-1/2 left-1/2 bg-red-200 rounded-2xl"
    );

    this.$sendTo = new InputGroup('text', 'Receiver', "Enter reiceiver");
    // this.$sendTo.setAttribute("class", "px-4 py-4")
    this.$message = new InputGroup ('text', "Your message", 'Write your message')
    // this.$sendTo = document.createElement('div')
    // this.$sendLabel=document.createElement('label')
    // this.$sendLabel.textContent = "To"

    this.$sendBtn = document.createElement('button');
    this.$sendBtn.type = 'submit';
    this.$sendBtn.textContent = 'Send'
    this.$sendBtn.setAttribute('class', "bg-white rounded-xl m-4 py-2 px-4")
  }

  openModal() {
    this.$modalContainer.classList.toggle('hidden')
  }
  
  render(conversationListContainer) {
    conversationListContainer.appendChild(this.$modalContainer);
    this.$modalContainer.appendChild(this.$sendTo.render());
    this.$modalContainer.appendChild(this.$message.render());
    this.$modalContainer.appendChild(this.$sendBtn);

    
}
}
