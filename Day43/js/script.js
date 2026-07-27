let seconds = 0;
let minutes = 0;
let hours = 0;

let timer = null;

function updateDisplay() {

    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(seconds).padStart(2, '0');

    document.getElementById("display").textContent =
        `${h}:${m}:${s}`;
}


function runTimer() {


    seconds++;

    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }

    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    updateDisplay();
}

function startTimer() {
if (timer !== null) 
    return;
 timer = setInterval(runTimer, 1000)
}


function pauseTimer() {
    clearInterval(timer);
    timer = null;
}

function resetTimer() {

    clearInterval(timer);
    timer = null;

    seconds = 0;
    minutes = 0;
    hours = 0;

    updateDisplay();

    document.getElementById("laps").innerHTML = "";
}

function saveLap() {

    const lapTime = document.getElementById("display").textContent;

    const li = document.createElement("li");

    li.textContent = "Lap:" + lapTime;
    document.getElementById("laps").appendChild(li)
}

updateDisplay();