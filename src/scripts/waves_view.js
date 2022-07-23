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
        // this.wave2 = {
        //     y: this.height/2,
        //     length: 0.01,
        //     amplitude: 100
        // }   
        this.gui.add(this.wave1, 'y', 0, this.height)
        this.gui.add(this.wave1, 'length', -0.01, 0.10)
        this.gui.add(this.wave1, 'amplitude', -300, 300)
        this.gui.add(this.wave1, 'frequency', -0.01, 1 )
    }

    draw1 (ctx) {
        // ctx.clearRect(0,0, this.width, this.height)
        ctx.fillRect(0,0, this.width, this.height)
        ctx.beginPath()
        ctx.moveTo(0, this.height / 4)
        for (let i = 1; i < this.width; i++) {
            ctx.lineTo(i, this.wave1.y / 4 + Math.sin(i * this.wave1.length - this.frequency) * this.wave1.amplitude)
        }
        ctx.lineWidth = 10
        ctx.strokeStyle = 'hsl(100, 50%, 50%)'
        ctx.fillStyle = 'rgba(0,0,10,0.05)'
        ctx.stroke()
    }

    draw2 (ctx) {
        // ctx.clearRect(0,0, this.width, this.height)
        ctx.beginPath()
        ctx.moveTo(0, this.height / 4 )
        for (let i = 1; i < this.width; i++) {
            ctx.lineTo(i,this.wave1.y /1.3 + Math.sin(i * this.wave1.length + this.frequency) * this.wave1.amplitude)
        }
        
        ctx.stroke()
        this.frequency += this.wave1.frequency
    }

}