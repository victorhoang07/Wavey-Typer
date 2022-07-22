import Game from "./scripts/game"


document.addEventListener("DOMContentLoaded", function() {
    let game = new Game
    game.startGame()

    window.addEventListener('keydown', function (e) {
    document.querySelector('p').innerHTML = `You pressed ${e.key}`;
    }, false);
})