// variable declaration
let milisec = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let started = false;
let ms;
let sec;
let min;
let hr;

// code for displaying time count on page loading
function htmlDisplay() {
  ms = document.getElementById("Milisec");
  sec = document.getElementById("Sec");
  min = document.getElementById("Minute");
  hr = document.getElementById("Hour");
}

window.onload = (event) => {
  htmlDisplay();
};


// code for stopwatch
let interval;

function displayWatch() {
 
  if (milisec == 99) {
    seconds++;
    milisec = 0;
    if (seconds < 10) {
      sec.innerHTML = "0" + seconds;
    } else {
      sec.innerHTML = seconds;
    }
  }
  if (seconds == 60) {
    minutes++;
    seconds = 0;
    if (minutes < 10) {
      min.innerHTML = "0" + minutes;
    } else {
      min.innerHTML = minutes;
    }
  }
  if (minutes == 60) {
    hours++;
    minutes = 0;
    hr.innerHTML = hours;
  }
  ms.innerHTML = milisec;
  milisec++;
}

// code for event action on click of Start Button

function startStopwatch() {
  if (started == false) {
    interval = setInterval(displayWatch, 10);
    started = true;
  }
}


// code for event action on click of Stop Button
function stopStopwatch() {
  clearInterval(interval);
  started = false;
}


// code for event action on click of Reset Button
function resetStopwatch() {
  started = false;
  clearInterval(interval);
  milisec = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  sec.innerHTML = "00";
  min.innerHTML = "00";
  hr.innerHTML = "00";
  ms.innerHTML = "00";
}
