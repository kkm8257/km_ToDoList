const bg = document.querySelector('.bg');

let fileNum = 1;
bg.style.backgroundImage = `url(src/img/${1}.jpg)`;

function addFileNum() {

    if ((fileNum < 5) && (fileNum >= 0)) {
        fileNum = fileNum + 1;
        bg.style.backgroundImage = `url(src/img/${fileNum}.jpg)`;


    } else {
        fileNum = 1;
        bg.style.backgroundImage = `url(src/img/${fileNum}.jpg)`;

    }
}

function init() {

    setInterval(addFileNum, 5000);
}

init();