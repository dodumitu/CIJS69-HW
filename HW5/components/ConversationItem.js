export default class ConversationItem {
  $container;
  $proPicEl;
  $nameEl;
  constructor(){
    this.$container = document.createElement('div')
    this.$container.setAttribute('class', 'flex bg-red-200 mt-4 rounded-full');
    this.$proPicEl = document.createElement('img')
    this.$proPicEl.setAttribute('src','https://tapchianhdep.com/wp-content/uploads/2021/05/anh-avatar-cho-con-gai-cuc-dep.jpg')
    this.$proPicEl.setAttribute('class', "h-12 w-12 self-center rounded-full ")
    this.$nameEl
  }
  render(conversationsContainer){
    // const test = document.createElement('h2');
    // test.textContent = 'conversation item'
    this.$container.appendChild(this.$proPicEl)
    conversationsContainer.appendChild(this.$container)

  }
}