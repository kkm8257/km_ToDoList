const form = document.querySelector('.nameForm');

const userName = document.querySelector('.UserName');
let nameInput = document.querySelector('input');


function askForName() {
    form.addEventListener('submit', submitHandler);

}

function submitHandler(event) {
    event.preventDefault();
    const userTemp = nameInput.value;

    saveName(userTemp);
    paintName(userTemp);

}

function saveName(text) {
    localStorage.setItem('currentUser', text);

}

function paintName(text) {
    userName.innerHTML = text;
    userName.style.opacity = 1;
    nameInput.style.display = 'none';
}

function loadName() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser === null) {
        askForName();
    } else {
        paintName(currentUser);
    }
}


function init() {
    loadName();

}

init();