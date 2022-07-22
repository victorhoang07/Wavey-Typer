
import Dictionary from "./dictionary"

// const typebox = document.querySelector(".box")
// console.log(typebox)    

export default class Game {

    constructor () {
        this.started = false
        this.currentCharIndex = 0;
        this.wordArea = document.querySelector(".word-area")
        this.inputArea = document.querySelector(".input-field")
    }

    start () {
        this.generateWords();
        this.started = true;
        this.inputEventListener();

    }
    generateWords() {
        for (let i=0; i < 25; i++)  {
            let randomIndex = Math.floor(Math.random() * Dictionary.length)
            let word = Dictionary[randomIndex].split('')
            word.push(" ") 
            word.forEach((character) => {
                let createSpan = document.createElement("span")
                createSpan.innerText = character
                this.wordArea.appendChild(createSpan)
            })
        }
    }

    initTyping() {
        const characters = this.wordArea.querySelectorAll("span")
        let typedChars = this.inputArea.value.split('')[this.currentCharIndex]
        if (typedChars == null) {
            this.currentCharIndex--;
            characters[this.currentCharIndex].classList.remove("correct", "incorrect")
        } else {

            if (characters[this.currentCharIndex].innerText === typedChars) {
                characters[this.currentCharIndex].classList.add("correct")
            } else {
                characters[this.currentCharIndex].classList.add("incorrect")
            }
            // console.log(typedChars)
            this.currentCharIndex++;
        }
    }
    
    
    inputEventListener (){
        this.inputArea.addEventListener("input",() => this.initTyping())
    }

}
