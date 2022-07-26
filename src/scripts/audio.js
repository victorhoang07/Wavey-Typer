

export default class Audio {

    constructor () {
        this.correct = document.querySelectorAll(".correct-audio")
        this.incorrect = document.querySelector(".incorrect-audio")
        this.lofi = document.querySelector(".lofi")
        this.lofiButton = document.querySelector(".lofi-button")
        this.muteButton = document.querySelector(".mute-button")
        this.mutedMusic = true 
        this.mutedSound = false 
    }

    playCorrect(){
        if (!this.mutedSound){
        let index = Math.floor(Math.random() * (5))
        this.correct.forEach(audio => audio.volume = .2)
        this.correct[index].play()
        }
    }

    playIncorrect() {
            if (!this.mutedSound){
            this.incorrect.volume = .5
            this.incorrect.play()
        }
    }

    lofiEventlistener () {
        this.lofiButton.addEventListener("click", () => {
            if (this.mutedMusic) {
                this.lofi.currentTime = 0
                this.lofi.play()
                this.lofiButton.innerText = "Mute Music"
                this.mutedMusic = false
            } else {
                this.lofi.pause()
                this.lofiButton.innerText = "Play Music"
                this.mutedMusic = true
            }
        })
    }

    muteEventlistener() {
        this.muteButton.addEventListener("click", () => {
            if (!this.mutedSound){
            this.mutedSound = true
            this.muteButton.innerText = "Unmute Sounds"
            } else {
                this.mutedSound = false
                this.muteButton.innerText = "Mute Sounds"
            }
        })
    }

    handleEventlistener () {
        this.lofiEventlistener()
        this.muteEventlistener()
    }
}

//modal 