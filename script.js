let startTime;
let elapsedTime = 0;
let stopwatchInterval;

const display = document.getElementById("display");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");

function timeToString(time) {
    let hours = Math.floor(time / 3600000);
    let minutes = Math.floor((time % 3600000) / 60000);
    let seconds = Math.floor((time % 60000) / 1000);
    let milliseconds = time % 1000;

    let formattedHours = hours.toString().padStart(2, '0');
    let formattedMinutes = minutes.toString().padStart(2, '0');
    let formattedSeconds = seconds.toString().padStart(2, '0');

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function startStopwatch() {
    startTime = Date.now() - elapsedTime;
    stopwatchInterval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        display.innerText = timeToString(elapsedTime);
    }, 1000);

    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    elapsedTime = 0;
    display.innerText = "00:00:00";
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}

startButton.addEventListener("click", startStopwatch);
stopButton.addEventListener("click", stopStopwatch);
resetButton.addEventListener("click", resetStopwatch);