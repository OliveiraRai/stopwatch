let initialValue = '00';
let isRunning = false;
let intervalId;

document.getElementById('stopWatch').innerHTML = initialValue;

function start() {
    if(isRunning) return;

    document.getElementById("startBtn").style.display = "none";
    document.getElementById("pauseBtn").style.display = "inline";

    intervalId = setInterval(() => {
        initialValue = (parseInt(initialValue) + 1).toString().padStart(2, '0')
        document.getElementById("stopWatch").innerHTML = initialValue;

        if(initialValue == "99"){
            initialValue = '00'
        }
    }, 1000)

    isRunning = true;
}

function pause() {
    clearInterval(intervalId)
    isRunning = false;
    
    document.getElementById("startBtn").style.display = "inline";
    document.getElementById("pauseBtn").style.display = "none";
}

function reset() {
    clearInterval(intervalId)
    initialValue = '00';

    document.getElementById("stopWatch").innerHTML = initialValue;
    document.getElementById("startBtn").style.display = "inline";
    document.getElementById("pauseBtn").style.display = "inline";

    isRunning = false;
}