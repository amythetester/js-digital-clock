const setTime = function setTime() {
    const time = $('<h3>' + Date() + '</h3>');
    $('#clock').html(time);
}

let intervalID = window.setInterval(setTime, 1000);

$(document).ready(setTime);
