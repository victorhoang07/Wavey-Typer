import Dictionary from "./dictionary"

// const typebox = document.querySelector(".box")
// console.log(typebox)    

export default class Game {

    constructor (canvas, waves,ctx) {
        this.started = false
        this.waves = waves
        this.ctx = ctx
        this.canvas = canvas
        this.currentCharIndex = 0;
        this.mistakes = 0
        this.timer = 15
        this.numChars = 0
        this.wpm = 0
        this.accuracy = 0
        this.cpm = 0
        this.wordArea = document.querySelector(".word-area")
        this.inputArea = document.querySelector(".input-field")
        this.ready = document.querySelector("button")
        this.decrementTimer = this.decrementTimer.bind(this)
    }
    
    readyEventlistener() {
        // this.ready.preventDefault();
        this.ready.addEventListener("click", () => this.startGame() )
    }

    startGame () {
        // this.started = true;
        this.reset()
        const characters = this.wordArea.querySelectorAll("span")
        characters.forEach( character => character.remove())
        this.generateWords();
        this.inputEventListener();
        this.inputArea.value = ""
        this.inputArea.focus()
        this.ready.innerText = "Restart!"
    }

    
    startTimer () {
        this.decrement = setInterval(this.decrementTimer, 1000)
    }

    

    decrementTimer() {
        if (this.timer > 0) {
        let countdown = document.querySelector("b")
        this.timer--;
        countdown.innerText = this.timer;
        } 
        else { 
            clearInterval(this.decrement)
            this.waves.white = 100
            this.showResults()
            const characters = this.wordArea.querySelectorAll("span")
            characters.forEach( character => character.remove())
        }
    }



    generateWords() {
        for (let i = 0; i < 40; i++)  {
            let randomIndex = Math.floor(Math.random() * Dictionary.length)
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
                // this.waves.animateCorrect(this.ctx)
                this.waves.color = 200
                this.waves.white = 50
                this.waves.oppositeDir = 1
                
            } else {
                characters[this.currentCharIndex].classList.add("incorrect")
                this.mistakes++; 
                // this.ctx.clearRect()
                // this.waves.animateIncorrect(this.ctx)
                this.waves.color = 20
                this.waves.oppositeDir = -1
                // this.waves.frequency = this.frequency * -1
                // this.waves.frequence  FIX THIS SOON 
            }
            this.currentCharIndex++;
        }
        
        characters.forEach(span => span.classList.remove("current"))
        characters[this.currentCharIndex].classList.add("current")
    }
    
    
    inputEventListener (){
        this.inputArea.addEventListener("input",() => this.checkChars())
        // this.inputArea.addEventListener("input",() => this.waves.animateCorrect(this.ctx), {once:true} )
        this.inputArea.addEventListener("input",this.startTimer.bind(this), {once: true})
        
    }
    
    calculateResults (){
        const characters = this.wordArea.querySelectorAll("span")
        let correct = 0
        characters.forEach( char => {
            if (char.classList.contains("correct")) correct +=1
        })
        this.wpm = Math.round(correct / 4.7) * 4
        this.accuracy = 100 - Math.round(this.mistakes / this.currentCharIndex * 100)
        this.cpm = correct * 4
        
        
    }
    
    showResults() {
        let resultsUl = document.querySelector(".results")
        let wpm = document.createElement("li")
        let accuracy = document.createElement("li")
        let cpm = document.createElement("li")
        this.calculateResults()
        resultsUl.innerText = "Your"
        wpm.innerText = "Words Per Minute: " + this.wpm
        accuracy.innerText = "Accuracy: " + this.accuracy
        cpm.innerText = "Characters per Minute: " + this.cpm    
        resultsUl.appendChild(wpm)
        resultsUl.appendChild(accuracy)
        resultsUl.appendChild(cpm)
    }

    reset() {
        clearInterval(this.decrement)
        this.decrement
        this.currentCharIndex = 0;
        this.mistakes = 0
        this.timer = 15
        this.numChars = 0
        this.wpm = 0
        this.accuracy = 0
        this.cpm = 0
        let countdown = document.querySelector("b")
        countdown.innerText = ""
        const characters = this.wordArea.querySelectorAll("span")
        characters.forEach( character => character.remove())
        const results = document.querySelectorAll("li")
        results.forEach(result => result.remove())
        let resultsUl = document.querySelector(".results")
        resultsUl.innerText = ""
    }
    
}
