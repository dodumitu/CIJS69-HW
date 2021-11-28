import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.5.0/firebase-auth.js";

import InputGroup from "./InputGroup.js";
class Register {
  $formEl;
  $displayNameEl;
  $emailEl;
  $passwordEl;
  $confirmPasswordEl;
  $submitButtonEl;
  $loginButtonEl;

  constructor() {
    this.$formEl = document.createElement("form");
    this.$formEl.setAttribute(
      "class",
      "w-1/3 bg-green-400 py-12 px-4 mx-auto mt-24 rounded-xl"
    );

    this.$displayNameEl = new InputGroup(
      "text",
      "Full name",
      "Enter your full name"
    );

    this.$emailEl = new InputGroup("email", "Email", "Enter your email");

    this.$passwordEl = new InputGroup(
      "password",
      " Password",
      "Enter your password"
    );

    this.$confirmPasswordEl = new InputGroup(
      "password",
      "Confirm your password",
      "Re-enter your password"
    );

    this.$submitButtonEl = document.createElement("button");
    this.$submitButtonEl.type = "submit";
    this.$submitButtonEl.textContent = "Submit";
    this.$submitButtonEl.setAttribute("class", "bg-white py-2 px-4 rounded-md");
    this.$submitButtonEl.addEventListener("click", this.handleSubmit);

    this.$loginButtonEl = document.createElement("button");
    this.$loginButtonEl.type = 'button';
    this.$loginButtonEl.textContent = "Already have an account";
    this.$loginButtonEl.setAttribute(
      "class",
      "bg-white mx-20 py-2 px-4 rounded-md"
    );
    this.$loginButtonEl.addEventListener("click", this.onGoTologin);
  }
  onGoTologin = () => {
    window.location.href = "./login.html";
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
    const displayName = this.$displayNameEl.getInputValue();
    const email = this.$emailEl.getInputValue();
    const password = this.$passwordEl.getInputValue();
    const confirmPassword = this.$confirmPasswordEl.getInputValue();

    let flag = true;
    if (displayName.trim().length === 0) {
      this.$displayNameEl.setError("Full name can not be empty");
      flag = false;
    } else {
      this.$displayNameEl.setError("");
    }

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
    if (confirmPassword.trim().length === 0) {
      this.$confirmPasswordEl.setError("Confirm Password can not be empty");
      flag = false;
    } else {
      this.$confirmPasswordEl.setError("");
    }
    if (password !== confirmPassword) {
      this.$confirmPasswordEl.setError("Password does not match");
      flag = false;
    } else {
      this.$confirmPasswordEl.setError("");
    }
    if (flag === true) {
      return {
        displayName: displayName,
        email: email,
        password: password,
        confirmPassword: confirmPassword,
      };
    }
    return null;
  }

  render() {
    this.$formEl.appendChild(this.$displayNameEl.render());
    this.$formEl.appendChild(this.$emailEl.render());
    this.$formEl.appendChild(this.$passwordEl.render());
    this.$formEl.appendChild(this.$confirmPasswordEl.render());
    this.$formEl.appendChild(this.$submitButtonEl);
    this.$formEl.appendChild(this.$loginButtonEl);

    return this.$formEl;
  }
}

export default Register;
