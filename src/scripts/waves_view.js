
export default class Wave {

    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.width
        this.height = canvas.height
        this.wave1 = {
            y: this.height,
            length: 0.01,
            amplitude: 40,
            frequency: 0.025
        }   
        this.frequency = this.wave1.frequency
        this.oppositeDir = 1 // work on this as well
        this.color = 200
        this.white = 100
        // this.color = {
        //     h: 200,
        //     s: 50,
        //     l: 50
        // }
        // this.startCorrect = requestAnimationFrame(() => this.animateCorrect(ctx))
        // this.animateCorrect = this.animateCorrect.bind(this)
        
    }

    animateCorrect (ctx) {
        requestAnimationFrame(() => this.animateCorrect(ctx))
        setTimeout(this.correctWave1(ctx), 2000)
        setTimeout(this.correctWave2(ctx), 2000)
   
    }

    correctWave1 (ctx) {

        ctx.fillRect(0,0, this.width, this.height)
        ctx.beginPath()
        ctx.moveTo(-20, this.height / 11)
        for (let i = 1; i < this.width; i++) {
            ctx.lineTo(i, this.height / 11 + Math.sin(i * this.wave1.length - (this.oppositeDir * this.frequency)) * this.wave1.amplitude * Math.sin(this.frequency)) 
        }                                                            // look here ^^ for backwards, MAKE IT NEGATIVE  maybe create a helper function
        ctx.lineWidth = 5
        ctx.strokeStyle = `hsl(${this.color * Math.sin(this.frequency)}, 50%, ${this.white}%)`
        ctx.fillStyle = 'rgba(0,0,0,0.03)'

        ctx.stroke()
        this.frequency += this.wave1.frequency
    }

    correctWave2 (ctx) {

        ctx.beginPath()
        ctx.moveTo(-20, this.height / 1.1 )
        for (let i = 1; i < this.width; i++) {
            ctx.lineTo(i,this.height / 1.1 + Math.sin(i * this.wave1.length + (this.oppositeDir * this.frequency)) * this.wave1.amplitude * Math.sin(this.frequency))
        }
        ctx.stroke()
    }

    // correctWave3 (ctx) {
    
    //     ctx.fillRect(0,0, this.width, this.height)
    //     ctx.beginPath()
    //     ctx.moveTo(this.width / 1.1, -20)
    //     for (let i = 1; i < this.width; i++) {
    //         ctx.lineTo(this.width / 1.1 + Math.sin(i * this.wave1.length + this.frequency) * this.wave1.amplitude * Math.sin(this.frequency), i) 
    //     }
    //     ctx.lineWidth = 5
    //     ctx.strokeStyle = `hsl(${this.color.h * Math.sin(this.frequency)}, 50%, 50%)`
    //     ctx.fillStyle = 'rgba(0,0,10,0.10)'
    //     ctx.stroke()
    //     this.frequency += this.wave1.frequency
    // }

    // correctWave4 (ctx) {
    
    //     ctx.fillRect(0,0, this.width, this.height)
    //     ctx.beginPath()
    //     ctx.moveTo(this.width / 10, -20)
    //     for (let i = 1; i < this.width; i++) {
    //         ctx.lineTo(this.width / 10 + Math.sin(i * this.wave1.length - this.frequency) * this.wave1.amplitude * Math.sin(this.frequency), i) 
    //     }
    //     ctx.lineWidth = 5
    //     ctx.strokeStyle = `hsl(${this.color.h * Math.sin(this.frequency)}, 50%, 50%)`
    //     ctx.fillStyle = 'rgba(0,0,10,0.10)'
    //     ctx.stroke()
    //     this.frequency += this.wave1.frequency
    // }
    

}