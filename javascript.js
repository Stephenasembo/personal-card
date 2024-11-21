const button = document.querySelector('button')
const contact = document.querySelector('.contact')
button.addEventListener('click', () => populateForm())

const form = document.createElement('form');
const nameInput = document.createElement('input');
const nameLabel = document.createElement('label');
const messageInput = document.createElement('textarea');
const messageLabel = document.createElement('label');
const formButton = document.createElement('button');

const paraName = document.createElement('p')
const paraMsg = document.createElement('p')

function populateForm() {
    identifyFormElements()
    appendElements()
}

function identifyFormElements() {
    form.setAttribute('action', '/form-handling-example')
    nameInput.setAttribute('id', 'name')
    nameLabel.setAttribute('for', 'name')
    messageInput.setAttribute('id', 'message')
    messageLabel.setAttribute('for', 'message')

    nameInput.setAttribute('type', 'name')
    formButton.setAttribute('type', 'submit')

    nameInput.setAttribute('name', 'user_name')
    messageInput.setAttribute('name', 'user_message')

    form.setAttribute('method', 'post')
    formButton.innerText = 'Submit'

    nameInput.setAttribute('placeholder', 'John Smith')
    messageInput.setAttribute('placeholder', 'Keep improving and don\'t stop learning...')

    nameLabel.innerText = 'Name: ';
    messageLabel.innerText = 'Message: '
}

function appendElements() {
    paraName.appendChild(nameLabel);
    paraName.appendChild(nameInput);
    paraMsg.appendChild(messageLabel);
    paraMsg.appendChild(messageInput);
    form.appendChild(paraName);
    form.appendChild(paraMsg);
    form.appendChild(formButton);
    contact.appendChild(form);
}
