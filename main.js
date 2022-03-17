const week = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    7: 'Sunday'
};

const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
};

const dayI = document.querySelector('#day');
const hoursI = document.querySelector('#hours');
const minutesI = document.querySelector('#minutes');
const secondsI = document.querySelector('#seconds');
const monthI = document.querySelector('#month');
const dateI = document.querySelector('#date');
const yearI = document.querySelector('#year');

setInterval(() => {
    var dNow = new Date();
    var day = week[dNow.getDay()];
    var monthsN = months[dNow.getMonth()+1];
    var date = dNow.getDate();
    var year = dNow.getFullYear();
    var seconds = dNow.getSeconds();
    var minutes = dNow.getMinutes();
    var hours = dNow.getHours();

    if (minutes < 10) {
        minutes = '0' + minutes;
    };
    if (seconds < 10) {
        seconds = '0' + seconds;
    };

    dayI.textContent = day;

    hoursI.textContent = hours;
    minutesI.textContent = minutes;
    secondsI.textContent = seconds;

    monthI.textContent = monthsN;
    dateI.textContent = date;
    yearI.textContent = year;


})