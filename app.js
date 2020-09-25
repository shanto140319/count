const newYears = "1 jan 2021";
const singleItems = document.querySelectorAll(".single-item");
const day = document.querySelector('.day');
const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

function countDown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = (newYearsDate - currentDate) /1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const mins  = Math.floor(totalSeconds / 60) % 60; 
    const seconds = Math.floor(totalSeconds)%60;
    day.textContent = formateTime(days);
    hour.textContent = formateTime(hours);
    min.textContent = formateTime(mins);
    sec.textContent = formateTime(seconds);
}
function formateTime(time){
    return time<10 ? (`0${time}`) : time;
}



setInterval(countDown, 1000);