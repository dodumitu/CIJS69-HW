import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

import InputGroup from "./InputGroup.js";

class login {
  $formEl;
  $emailEl;
  $passwordEl;
  $loginButtonEl;
  $createAccButtonEl;

  constructor() {
    this.$formEl = document.createElement("form");
    this.$formEl.setAttribute(
      "class",
      "w-1/3 bg-green-400 py-12 px-4 mx-auto mt-24 rounded-xl"
    );

    this.$emailEl = new InputGroup("email", "Email", "Enter your email");

    this.$passwordEl = new InputGroup(
      "password",
      "Password",
      "Enter your password"
    );

    this.$loginButtonEl = document.createElement("button");
    this.$loginButtonEl.type = "submit";
    this.$loginButtonEl.textContent = "Login";
    this.$loginButtonEl.setAttribute("class", "bg-white py-2 px-4 rounded-md");
    this.$loginButtonEl.addEventListener("click", this.handleSubmit);

    this.$createAccButtonEl = document.createElement("p");
    this.$createAccButtonEl.textContent = "Create an account";
    this.$createAccButtonEl.setAttribute(
      "class",
      "bg-white py-2 px-4 rounded-md"
    );
    this.$createAccButtonEl.addEventListener("click", this.OnGoToReg);
  }
  OnGoToReg = () => {
    window.location.href = "./Register.html";
  };
  handleSubmit = (e) => {
    e.preventDefault();

    const validated = this.validation();

    if (validated !== null) {
      createUserWithEmailAndPassword(auth, validated.email, validated.password)
        .then((user) => {})
        .catch((error) => {
          alert(error.message);
        });
    }
  };
  validation() {
    const email = this.$emailEl.getInputValue();
    const password = this.$passwordEl.getInputValue();

    let flag = true;

    if (email.trim().length === 0) {
      this.$emailEl.setError("Email can not be empty");
      flag = false;
    } else {
      this.$emailEl.setError("");
    }
    if (password.trim().length === 0) {
      this.$passwordEl.setError("Password can not be empty");
      flag = false;
    } else {
      this.$passwordEl.setError("");
    }
    if (flag === true) {
      return {
        email: email,
        password: password,
      };
    }
    return null;
  }

  render() {
    this.$formEl.appendChild(this.$emailEl.render());
    this.$formEl.appendChild(this.$passwordEl.render());
    this.$formEl.appendChild(this.$loginButtonEl);
    this.$formEl.appendChild(this.$createAccButtonEl);

    return this.$formEl;
  }
}

const loginComponent = new login();

document.getElementById("app").appendChild(loginComponent.render());

export default login;
