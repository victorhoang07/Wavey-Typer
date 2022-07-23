import Game from "./scripts/game"
import Wave from "./scripts/waves_view"
// import * as dat from 'dat.gui';

document.addEventListener("DOMContentLoaded", function() {
    const game = new Game
    game.startGame()
    
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let waves = new Wave(canvas, ctx, game)
    waves.draw1(ctx)
    waves.draw2(ctx)


    function animate () {
    requestAnimationFrame(animate)
    waves.draw1(ctx)
    waves.draw2(ctx)
    }

    animate()


    window.addEventListener('keydown', function (e) {
    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
    }, false);

    
})