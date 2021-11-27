class InputGroup {
    $containerEl;
    $labelEl;
    $inputEl;
    $errorEl;

    _errorValue ="";
  
    constructor(type, lableName, placeholder) {
      this.$containerEl = document.createElement("div");
      this.$containerEl.setAttribute("class", "flex flex-col mb-4");
  
      this.$labelEl = document.createElement("label");
      this.$labelEl.textContent = lableName;
      this.$labelEl.setAttribute("class", "text-white font-bold mb-2");
  
      this.$inputEl = document.createElement("input");
      this.$inputEl.type = type;
      this.$inputEl.placeholder = placeholder;
      this.$inputEl.setAttribute("class", "py-2 px-4 rounded-md");

      this.$errorEl = document.createElement('p')
      this.$errorEl.textContent = this._errorValue;
    }
  
    getInputValue() {
        return this.$inputEl.value;
    }
    
    setError(message){
        if (message !=="") {
            this.$errorEl.textContent = message;
            this.$errorEl.setAttribute('class', "text-red-700 text-md mt-2")
        } else {
            this._errorValue = "";
            this.$errorEl.textContent= "";
        }
    }
    render() {
      this.$containerEl.appendChild(this.$labelEl);
      this.$containerEl.appendChild(this.$inputEl);
      this.$containerEl.appendChild(this.$errorEl)
  
      return this.$containerEl;
    }
  }
  
  export default InputGroup;