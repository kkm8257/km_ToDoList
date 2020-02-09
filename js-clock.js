const clock = document.querySelector('.Clock');


let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');


function gettimeNow() {
    var nowDay = new Date();
    hours = nowDay.getHours();
    minutes = nowDay.getMinutes();
    seconds = nowDay.getSeconds();
    clock.innerHTML = `${hours < 10 ? `0${hours}`:hours}시 ${minutes < 10 ? `0${minutes}` : minutes}분 ${seconds < 10 ? `0${seconds}`:seconds}초`;
    

}

function init() {
    setInterval(gettimeNow, 1000);

}

init();