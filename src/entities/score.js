class Score extends Entity {
    constructor(params) {
        super(params);
    }

    draw() {
        this._spriteSheet.then((sprites) => {
            this._drawEngine.drawImage({
                spriteSheet: sprites,
                image: this._frames[0],
                x: this._game.width - this.width,
                y: this._game.height - this.height,
                width: this.width,
                height: this.height,
            });
            this._drawEngine.drawText({
                x: this._game.width - this.width + 5,
                y: this._game.height - this.height + 29,
                text: this._game._score,
            });
        });
    }
}
