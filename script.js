let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalId;
let isRunning = false;

function formatStopWatch(num) {
    return num < 10 ? `0${num}` : num;
}

document.getElementById('stopWatch').innerHTML = formatStopWatch(hours) + ':' + formatStopWatch(minutes) + ':' + formatStopWatch(seconds)

function attStopWatch() {
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes ++;
        if(minutes == 60) {
            minutes = 0;
            hours++;
            if(hours == 24) {
                hours = 0;
                minutes = 0;
                seconds = 0;
            }
        }
    }

    document.getElementById('stopWatch').innerHTML = formatStopWatch(hours) + ':' + formatStopWatch(minutes) + ':' + formatStopWatch(seconds)
}

function start() {
    if (!intervalId) {
        intervalId = setInterval(attStopWatch, 1000);
    }
};

function pause() {
    clearInterval(intervalId)
    intervalId = null;
}

function reset() {
    clearInterval(intervalId)
    intervalId = null
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById('stopWatch').innerHTML = formatStopWatch(hours) + ':' + formatStopWatch(minutes) + ':' + formatStopWatch(seconds)
}