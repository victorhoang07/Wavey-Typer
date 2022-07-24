import * as dat from 'dat.gui';

export default class Wave {

    constructor(canvas, ctx, game) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.game = game;
        this.width = canvas.width
        this.height = canvas.height
        this.gui = new dat.GUI()
        this.wave1 = {
            y: this.height,
            length: 0.01,
            amplitude: 40,
            frequency: 0.05
        }   
        this.frequency = this.wave1.frequency
        this.color = {
            h: 200,
            s: 50,
            l: 50
        }
        this.gui.add(this.wave1, 'y', 0, this.height)
        this.gui.add(this.wave1, 'length', -0.01, 0.10)
        this.gui.add(this.wave1, 'amplitude', -300, 300)
        this.gui.add(this.wave1, 'frequency', -0.01, 1 )
    }

    draw1 (ctx) {
        // ctx.clearRect(0,0, this.width, this.height)
        ctx.fillRect(0,0, this.width, this.height)
        ctx.beginPath()
        ctx.moveTo(-20, this.height / 4)
        for (let i = 1; i < this.width; i++) {
            ctx.lineTo(i, this.height / 4 + Math.sin(i * this.wave1.length - this.frequency) * this.wave1.amplitude * Math.sin(this.frequency)) 
        }
        ctx.lineWidth = 5
        ctx.strokeStyle = `hsl(${this.color.h * Math.sin(this.frequency)}, 50%, 50%)`
        ctx.fillStyle = 'rgba(0,0,10,0.10)'
        ctx.stroke()
        this.frequency += this.wave1.frequency
    }

    draw2 (ctx) {
        // ctx.clearRect(0,0, this.width, this.height)
        ctx.beginPath()
        ctx.moveTo(-20, this.height / 1.1 )
        for (let i = 1; i < this.width; i++) {
            ctx.lineTo(i,this.height /1.1 + Math.sin(i * this.wave1.length + this.frequency) * this.wave1.amplitude * Math.sin(this.frequency))
        }
        
        ctx.stroke()
    }

}