
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
            frequency: 0.05
        }   
        this.frequency = this.wave1.frequency
        this.color = 200
        // this.color = {
        //     h: 200,
        //     s: 50,
        //     l: 50
        // }
        // this.startCorrect = requestAnimationFrame(() => this.animateCorrect(ctx))

        // this.animateCorrect = this.animateCorrect.bind(this)
        
    }

    animateCorrect (ctx) {
        let meh = requestAnimationFrame(() => this.animateCorrect(ctx))
        // this.startCorrect
        // setTimeout(this.correctWave1(ctx), 2000)
        // setTimeout(this.correctWave2(ctx), 2000)
        this.correctWave1(ctx)
        this.correctWave2(ctx)
        // cancelAnimationFrame(meh)
        // ctx.clearRect(0,0, this.width, this.height)
    }

    animateIncorrect (ctx) {
        requestAnimationFrame(() => this.animateIncorrect(ctx))
       
        this.incorrectWave1(ctx)
        this.incorrectWave2(ctx)
    }


    correctWave1 (ctx) {
        // ctx.clearRect(0,0, this.width, this.height)
        ctx.fillRect(0,0, this.width, this.height)
        ctx.beginPath()
        ctx.moveTo(-20, this.height / 4)
        for (let i = 1; i < this.width; i++) {
            ctx.lineTo(i, this.height / 4 + Math.sin(i * this.wave1.length - this.frequency) * this.wave1.amplitude * Math.sin(this.frequency)) 
        }
        ctx.lineWidth = 5
        ctx.strokeStyle = `hsl(${this.color * Math.sin(this.frequency)}, 50%, 50%)`
        ctx.fillStyle = 'rgba(0,0,10,0.10)'
        ctx.stroke()
        this.frequency = 
        this.frequency += this.wave1.frequency
    }

    correctWave2 (ctx) {
        // ctx.clearRect(0,0, this.width, this.height)
        ctx.beginPath()
        ctx.moveTo(-20, this.height / 1.1 )
        for (let i = 1; i < this.width; i++) {
            ctx.lineTo(i,this.height /1.1 + Math.sin(i * this.wave1.length + this.frequency) * this.wave1.amplitude * Math.sin(this.frequency))
        }
        
        ctx.stroke()
    }

    incorrectWave1 (ctx) {
        // ctx.clearRect(0,0, this.width, this.height)
        ctx.fillRect(0,0, this.width, this.height)
        ctx.beginPath()
        ctx.moveTo(-20, this.height / 4)
        for (let i = 1; i < this.width; i++) {
            ctx.lineTo(i, this.height / 4 + Math.sin(i * this.wave1.length + this.frequency) * this.wave1.amplitude * Math.sin(this.frequency)) 
        }
        ctx.lineWidth = 5
        ctx.strokeStyle = `hsl(${this.color.h * Math.sin(this.frequency)}, 50%, 50%)`
        ctx.fillStyle = 'rgba(0,0,10,0.10)'
        ctx.stroke()
        this.frequency += this.wave1.frequency
    }

    incorrectWave2 (ctx) {
        ctx.beginPath()
        ctx.moveTo(-20, this.height / 1.1 )
        for (let i = 1; i < this.width; i++) {
            ctx.lineTo(i,this.height /1.1 + Math.sin(i * this.wave1.length - this.frequency) * this.wave1.amplitude * Math.sin(this.frequency))
        }
        
        ctx.stroke()
    }

}