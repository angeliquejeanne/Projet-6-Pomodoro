const workDisplay = document.querySelector('.workDisplay');
const breakDisplay = document.querySelector('.breakDisplay');
const buttonStart = document.querySelector('.b1');
const buttonPause = document.querySelector('.b2');
const buttonReset = document.querySelector('.b3');
const cycle = document.querySelector('h2');

let checkInterval = false;
let initialTime = 1200; //1200 = 20min 
let timeOut = 300; // 300/60=5 donc 5min
let pause = false;
let numberOfCycles = 0;
cycle.innerText = `Nombre de cycle ${numberOfCycles}`;

workDisplay.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60}`; //trunc donne le temps sans virgule
breakDisplay.innerText = `${Math.trunc(timeOut/60)} : ${(timeOut % 60 < 10) ? `0${timeOut % 60}` : timeOut % 60}`;

buttonStart.addEventListener('click', () => {
    
    if(checkInterval === false) {

    checkInterval = true;

    initialTime--;
    workDisplay.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60}`;

    let timer = setInterval(() => {

        if( pause === false && initialTime > 0) {
            initialTime--;
            workDisplay.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60}`;
        } 
        else if (pause === false && timeOut === 0 && initialTime === 0) {
            initialTime = 1200;
            timeOut = 300;
            numberOfCycles++;
            cycle.innerText = `Nombre de cycle ${numberOfCycles}`;
            workDisplay.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60}`;
            breakDisplay.innerText = `${Math.trunc(timeOut/60)} : ${(timeOut % 60 < 10) ? `0${timeOut % 60}` : timeOut % 60}`;
        }
        else if (pause === false && initialTime === 0) {
            timeOut--;
            breakDisplay.innerText = `${Math.trunc(timeOut/60)} : ${(timeOut % 60 < 10) ? `0${timeOut % 60}` : timeOut % 60}`;
        } 
    }, 1000)
    // Reset
    buttonReset.addEventListener('click', () => {
        clearInterval(timer);
        checkInterval = false;
        initialTime = 1200;
        timeOut = 300;
        workDisplay.innerText = `${Math.trunc(initialTime/60)} : ${(initialTime % 60 < 10) ? `0${initialTime % 60}` : initialTime % 60}`;
        breakDisplay.innerText = `${Math.trunc(timeOut/60)} : ${(timeOut % 60 < 10) ? `0${timeOut % 60}` : timeOut % 60}`;
    })
    } else {
        return;
    }
})