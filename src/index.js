import Game from "./scripts/game"
import Wave from "./scripts/waves_view"

document.addEventListener("DOMContentLoaded", function() {
    
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // background image attempt

//     const backcanvas = document.querySelector('#layer2');
//     const backctx = canvas.getContext('2d')
//     backcanvas.width = window.innerWidth;
//     backcanvas.height = window.innerHeight;
//     var background = new Image();
//     background.src = "src/images/galaxy.png";

//     // Make sure the image is loaded first otherwise nothing will draw.
//     background.onload = function(){
//     backctx.drawImage(background,0,0);   
// }
    
    
    
    window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    })


    const waves = new Wave(canvas, ctx)
    const game = new Game(canvas, waves ,ctx)
    waves.animateCorrect(ctx)
    // game.startGame()
    game.readyEventlistener()

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