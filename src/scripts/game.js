import Dictionary from "./dictionary"

// const typebox = document.querySelector(".box")
// console.log(typebox)    

export default class Game {

    constructor () {
        this.started = false
        this.currentCharIndex = 0;
        this.mistakes = 0
        this.timer = 15
        this.numChars = 0
        this.wordArea = document.querySelector(".word-area")
        this.inputArea = document.querySelector(".input-field")
        this.decrementTimer = this.decrementTimer.bind(this)
    }
    
    startGame () {
        this.generateWords();
        this.started = true;
        this.inputEventListener();
        this.inputArea.focus()
    }
    
    startTimer () {
        this.decrement = setInterval(this.decrementTimer, 1000)
    }

    // stopTimer () {
    //     clearInterval(this.decrement)
    // }

    decrementTimer() {
        if (this.timer > 0) {
        let countdown = document.querySelector("b")
        this.timer--;
        countdown.innerText = this.timer;
        } 
        else { 
            clearInterval(this.decrement)
            this.showResults()
        }
    }



    generateWords() {
        for (let i = 0; i < 25; i++)  {
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
    initTyping() {
 
        const characters = this.wordArea.querySelectorAll("span")
        this.numChars = characters.length
        let typedChars = this.inputArea.value.split('')[this.currentCharIndex]
        if (typedChars == null) {
            this.currentCharIndex--;
            characters[this.currentCharIndex].classList.remove("correct", "incorrect")
        } else {
            if (characters[this.currentCharIndex].innerText === typedChars) {
                characters[this.currentCharIndex].classList.add("correct")
            } else {
                characters[this.currentCharIndex].classList.add("incorrect")
                this.mistakes++; 
            }
            this.currentCharIndex++;
        }

        characters.forEach(span => span.classList.remove("current"))
        characters[this.currentCharIndex].classList.add("current")
    }
    
    
    inputEventListener (){
        this.inputArea.addEventListener("input",() => this.initTyping())
        
        this.inputArea.addEventListener("input",this.startTimer.bind(this), {once: true})

    }
    
    calculateResults (){
        const characters = this.wordArea.querySelectorAll("span")
        let correct = 0
        characters.forEach( char => {
            if (char.classList.contains("correct")) correct +=1
        })
        this.wpm = (correct / 4.7) * 4
        this.accuracy = 100 - Math.round(this.mistakes / this.currentCharIndex * 100)
        console.log(this.wpm)
        console.log(this.accuracy)
        
    }

    showResults() {
        let li = document.createElement("li")
        let resultsUl = document.querySelector(".results")
        li.innerText = this.mistakes
        resultsUl.appendChild(li)
        this.calculateResults()
    }

}
