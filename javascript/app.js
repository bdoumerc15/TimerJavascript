const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");
const circle = document.querySelector('#circle');

const perimeter = 2 * Math.PI * circle.getAttribute('r');
circle.setAttribute('stroke-dasharray', perimeter);
console.log(perimeter);
let currentOffSet = 0;

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        let value = perimeter * timeRemaining / duration - perimeter
        circle.setAttribute('stroke-dashoffset', value);
    },
    onComplete() {
        console.log('Timer is completed');
    }
});