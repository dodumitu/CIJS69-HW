export default class Content {
    $container
    $conversationName
    
    constructor() {
        this.$container = document.createElement("div");
        this.$container.setAttribute("class", "bg-white w-full");

        this.$conversationName = document.createElement("h2");
        this.$conversationName.setAttribute("class", "font-bold text-xl text-white");
        this.$conversationName.textContent = "Chat-App"
    }
    getValue() {
        return this.$conversationName.textContent;
    }
    setValue(data) {
        this.$conversationName.textContent = data;
    }

    render(conversationContainer) {
        this.$container.appendChild(this.$conversationName);
        conversationContainer.appendChild(this.$container);
    }
}