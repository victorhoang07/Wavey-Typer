import Dictionary from "./dictionary"

export default class Game {

    constructor (canvas, waves, ctx, audio) {

        this.waves = waves
        this.ctx = ctx
        this.canvas = canvas
        this.audio = audio
        this.currentCharIndex = 0;
        this.mistakes = 0
        this.timer = 30
        this.numWords = 55
        this.numChars = 0
        this.wpm = 0
        this.accuracy = 0
        this.cpm = 0
        this.wordArea = document.querySelector(".word-area")
        this.inputArea = document.querySelector(".input-field")
        this.ready = document.querySelector("button")
        this.countdown = document.querySelector("b")
        this.instructions = document.querySelector(".instructions")
        this.decrementTimer = this.decrementTimer.bind(this)
    }
    
    readyEventlistener() {
        this.ready.addEventListener("click", () => this.startGame());
        this.inputEventListener();
        window.addEventListener("click", () => this.inputArea.focus());
    };

    startGame () {
        this.reset();
        this.instructions.remove();
        this.generateWords();
        this.inputArea.value = "";
        this.countdown.innerText = this.timer;
        this.inputArea.focus();
        this.ready.innerText = "Restart";
        this.inputArea.addEventListener("input",this.startTimer.bind(this), {once: true});
    };

    startTimer () {
        this.decrement = setInterval(this.decrementTimer, 1000);
    }

    decrementTimer() {
        if (this.timer > 0) {
            let countdown = document.querySelector("b");
            this.timer--;
            countdown.innerText = this.timer;
        } 
        else { 
            clearInterval(this.decrement)
            this.waves.white = 100;
            this.showResults();
            const characters = this.wordArea.querySelectorAll("span");
            characters.forEach( character => character.remove());
            const resultsBox = document.getElementById("results-box");
            resultsBox.classList.add("results-box");
        }
    }

    generateWords() {
        for (let i = 0; i < this.numWords; i++)  {
            let randomIndex = Math.floor(Math.random() * Dictionary.length);
            let word = Dictionary[randomIndex].split('')
            word.push(" ") 
            for (let j = 0; j < word.length; j++) {
                let createSpan = document.createElement("span")
                createSpan.innerText = word[j]
                if (j === 0 && i === 0) createSpan.classList.add("current")
                this.wordArea.appendChild(createSpan)
            }
        }
    }
    
    checkChars () {
 
        const characters = this.wordArea.querySelectorAll("span")
        this.numChars = characters.length
        let typedChars = this.inputArea.value.split('')[this.currentCharIndex]
        if (typedChars == null) {
            this.currentCharIndex--;
            characters[this.currentCharIndex].classList.remove("correct", "incorrect")
        } else {
            if (characters[this.currentCharIndex].innerText === typedChars) {
                characters[this.currentCharIndex].classList.add("correct")
                this.waves.color = 200
                this.waves.white = 50
                this.waves.direction = 1
                this.audio.playCorrect()
            } else {
                characters[this.currentCharIndex].classList.add("incorrect")
                this.mistakes++; 
                this.waves.color = 20
                this.waves.direction = -1
                this.audio.playIncorrect()
            }
            this.currentCharIndex++;
        }
        
        characters.forEach(span => span.classList.remove("current"))
        characters[this.currentCharIndex].classList.add("current")
    }
    
    
    inputEventListener (){
        this.inputArea.addEventListener("input", () => this.checkChars())

    }
    
    calculateResults (){
        const characters = this.wordArea.querySelectorAll("span")
        let correct = 0
        characters.forEach( char => {
            if (char.classList.contains("correct")) correct += 1
        })
        this.wpm = Math.round(correct / 4.7) * 2
        this.accuracy = 100 - Math.round(this.mistakes / this.currentCharIndex * 100);
        this.cpm = correct * 2;
    }
    
    showResults() {
        let resultsUl = document.querySelector(".results")
        let wpm = document.createElement("li");
        let accuracy = document.createElement("li");
        let cpm = document.createElement("li");
        this.calculateResults();
        resultsUl.innerText = "Your Results";
        wpm.innerText = "Words per Minute: " + this.wpm;
        accuracy.innerText = "Accuracy: " + this.accuracy + "%";
        cpm.innerText = "Characters per Minute: " + this.cpm;
        resultsUl.appendChild(wpm);
        resultsUl.appendChild(accuracy);
        resultsUl.appendChild(cpm);
    }

    reset() {
        clearInterval(this.decrement);
        this.decrement;
        this.currentCharIndex = 0;;
        this.mistakes = 0;
        this.timer = 30;
        this.numChars = 0;
        this.wpm = 0;
        this.accuracy = 0;
        this.cpm = 0;
        let countdown = document.querySelector("b");
        countdown.innerText = "";
        const characters = this.wordArea.querySelectorAll("span");
        characters.forEach( character => character.remove());
        const results = document.querySelectorAll("li");
        results.forEach(result => result.remove());
        let resultsUl = document.querySelector(".results");
        resultsUl.innerText = "";
        const resultsBox = document.getElementById("results-box");
        resultsBox.classList.remove("results-box");
    }
    
}
