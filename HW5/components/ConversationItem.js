export default class ConversationItem {
  constructor(){}
  render(conversationsContainer){
    const test = document.createElement('h2');
    test.textContent = 'conversation item'

    conversationsContainer.appendChild(test)

  }
}