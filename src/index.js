import Game from "./scripts/game"
import Wave from "./scripts/waves_view"
import Music from "./scripts/audio"
document.addEventListener("DOMContentLoaded", function() {
    
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
     
    
    window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    })


    const music = new Music ()
    const waves = new Wave(canvas, ctx)
    const game = new Game(canvas, waves ,ctx, music)

    waves.animateCorrect(ctx)
    game.readyEventlistener()
    music.handleEventlistener()
        var i = 0;
        var txt = 'Wavey Typer';
        function typeWriter() {
                if (i < txt.length) {
                document.querySelector("h1").innerHTML += txt.charAt(i);
                i++;
                setTimeout(typeWriter, 250);
            }
        }
        typeWriter()
    
    // window.addEventListener('keydown', function (e) {
    // document.querySelector('p').innerHTML = `You pressed ${e.key}`;
    // }, false);
})