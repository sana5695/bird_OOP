const game = new Game();

game.prepare().then(() => {
    console.log("start");
    game.preview();
});
