

export default class Audio {

    constructor () {
        this.correct = document.querySelectorAll(".correct-audio")
        this.lofi = document.querySelector(".lofi")
        this.lofiButton = document.querySelector(".lofi-button")
        this.muted = true 
    }

    playCorrect(){
        
        let index = Math.floor(Math.random() * (5))
        this.correct.forEach(audio => audio.volume = .2)
        this.correct[index].play()
        console.log(index)
    }

    lofiEventlistener () {
        this.lofiButton.addEventListener("click", () => {
            if (this.muted) {
                this.lofi.currentTime = 0
                this.lofi.play()
                this.lofiButton.innerText = "Mute Music"
                this.muted = false
            } else {
                this.lofi.pause()
                this.lofiButton.innerText = "Play Music"
                this.muted = true
            }
        })
    }
}

//modal 