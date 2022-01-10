const year = document.querySelector('.year');
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');
const displayWrapper = document.querySelector('.counter-wrapper');
const preloader = document.querySelector('.lds-hourglass');

let currentYear = new Date().getFullYear();
let nextYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function timeDisplay() {
    let currentTime = new Date;
    let difference = nextYear - currentTime;


    let daysValue = Math.floor(difference / 1000 / 60 / 60 / 24);
    let hoursValue = Math.floor(difference / 1000 / 60 / 60) % 24;
    let minutesValue = Math.floor(difference / 1000 / 60) % 60;
    let secondsValue = Math.floor(difference / 1000) % 60;


    year.textContent = currentYear + 1;
    days.textContent = daysValue < 10 ? '0' + daysValue : daysValue;
    hours.textContent = hoursValue < 10 ? '0' + hoursValue : hoursValue;
    minutes.textContent = minutesValue < 10 ? '0' + minutesValue : minutesValue;
    seconds.textContent = secondsValue < 10 ? '0' + secondsValue : secondsValue;
};

timeDisplay()

setInterval(timeDisplay, 1000);

setTimeout(() => {
    preloader.remove();
    displayWrapper.style.display = 'flex';
}, 2000);