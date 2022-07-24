import Game from "./scripts/game"
import Wave from "./scripts/waves_view"

document.addEventListener("DOMContentLoaded", function() {
    
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const waves = new Wave(canvas, ctx)
    const game = new Game(canvas, waves ,ctx)
    game.startGame()
    
    // waves.draw1(ctx)
    // waves.draw2(ctx)
    // let yes = tru
    // function animate () {
    // requestAnimationFrame(animate)
    // waves.incorrectWave1(ctx)
    // waves.incorrectWave2(ctx)
    // }
    // window.addEventListener("keydown",() => waves.animateIncorrect(ctx), {once: true})
    // animate()
    


    // window.addEventListener('keydown', function (e) {
    // document.querySelector('p').innerHTML = `You pressed ${e.key}`;
    // }, false);

    
})