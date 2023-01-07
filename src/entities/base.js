class Entity {
    constructor({
        x,
        y,
        width,
        height,
        frames,
        spriteSheet,
        drawEngine,
        game
    }) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.falling = false;
        this.rotate = false;
        this.speed = 0;
        this.speedDeg = 0;
        this.deg = 0;
        this._frames = frames;
        this._frameIndex = 0;
        this._spriteSheet = spriteSheet;
        this._drawEngine = drawEngine;
        this._game = game;
    }

    draw() {
        this._spriteSheet.then((sprites) => {
            this._drawEngine.drawImage({
                spriteSheet: sprites,
                image: this._frames[this._frameIndex],
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height,
            });
        });
    }
}
