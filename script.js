function refreshTime() {
    const display = document.querySelector('.display')
    const now = new Date();
    const hours = correctHours(now.getHours()) + ':' + correctHours(now.getMinutes()) + ':' + correctHours(now.getSeconds());

    display.textContent = hours;

}

function correctHours(number) {
    if (number < 10) {
        number = '0' + number
    }
    return number;
}

refreshTime();
setInterval(refreshTime, 1000);

console.log(hours);
