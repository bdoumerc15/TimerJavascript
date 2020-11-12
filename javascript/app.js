//primeramente creamos una clase Timer
//donde vamos a hacer todo nuestro codigo
class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
        // this.durationInput.addEventListener('input', this)
    }
    start() {
        // return `Vamos a comenzar nuestro Timer!`;
        console.log('Vamos a comenzar nuestro timer!');
        return 'El timer ha comenzado'
    }
    pause() {
        // return `El timer se ha pausado.`;
        console.log('El timer se ha pausado');
        return "El timer se ha pausado"
    }
    onDurationChange() {

    }
    tick() {

    }

}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);