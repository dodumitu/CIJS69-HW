class input{
    $inputEl;
    constructor(type, placeholder){
        this.$inputEl= document.createElement('input');
        this.$inputEl.type = type;
        this.$inputEl.placeholder  = placeholder;
    }
    render() {
        return this.$inputEl
    }
}
let userName = new input('name', 'Enter your account name')
document.getElementById('name_box').appendChild(userName.render())

let email = new input("email", 'Enter your email')
document.getElementById('email_box').appendChild(email.render())

let password = new input('password', 'Enter your password')
document.getElementById('password_box').appendChild(password.render())

let passConfirm = new input('password', 'Re-enter you password')
document.getElementById('confirm_box').appendChild(passConfirm.render())