const options = { 
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

const setTime = function setTime() {
    const time = $('<h3>' + Intl.DateTimeFormat('en-US', options).format(new Date()) + '</h3>');
    $('#clock').html(time);
}

window.setInterval(setTime, 1000);

$(document).ready(setTime);
