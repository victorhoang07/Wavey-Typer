
import Dictionary from "./dictionary"

// const typebox = document.querySelector(".box")
// console.log(typebox)    

export default class Game {

    constructor () {
        this.started = false
        this.wordArea = document.querySelector(".word-area")
        this.inputArea = document.querySelector(".input-field")
    }

    start () {
        this.generateWords()
        this.started = true
        this.inputEventListener()

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
        console.log('hi')
    }

    inputEventListener (){
        this.inputArea.addEventListener("keydown", this.initTyping)
    }

}
