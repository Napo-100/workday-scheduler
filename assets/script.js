var today = document.querySelector('#currentDay');
var currentTime = moment();

today.textContent = currentTime.format("dddd MMM DD, YYYY")

