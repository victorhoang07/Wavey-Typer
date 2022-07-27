
export default class Wave {

    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.wave1 = {
            y: this.height,
            length: 0.01,
            amplitude: 40,
            frequency: 0.025
        }   
        this.frequency = this.wave1.frequency;
        this.direction = 1;
        this.color = 10;
        this.white = 100;
       
    }

    animateCorrect (ctx) {
        requestAnimationFrame(() => this.animateCorrect(ctx))
        setTimeout(this.correctWave1(ctx), 2000)
        setTimeout(this.correctWave2(ctx), 2000)
   
    }

    correctWave1 (ctx) {

        ctx.fillRect(0,0, this.canvas.width, this.canvas.height)
        ctx.beginPath()
        ctx.moveTo(-20, this.canvas.height / 11)
        for (let i = 1; i < this.canvas.width; i++) {
            ctx.lineTo(i, this.canvas.height / 11 + Math.sin(i * this.wave1.length - (this.direction * this.frequency)) * this.wave1.amplitude * Math.sin(this.frequency)) 
        }
        ctx.lineWidth = 5
        ctx.strokeStyle = `hsl(${this.color * Math.sin(this.frequency)}, 50%, ${this.white}%)`
        ctx.fillStyle = 'rgba(0,0,0,0.03)'

        ctx.stroke()
        this.frequency += this.wave1.frequency
    }

    correctWave2 (ctx) {

        ctx.beginPath()
        ctx.moveTo(-20, this.canvas.height / 1.1 )
        for (let i = 1; i < this.canvas.width; i++) {
            ctx.lineTo(i,this.canvas.height / 1.1 + Math.sin(i * this.wave1.length + (this.direction * this.frequency)) * this.wave1.amplitude * Math.sin(this.frequency))
        }
        ctx.stroke()
    }
}