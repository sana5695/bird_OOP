class Bg extends Entity {
    constructor(params) {
        super(params);
    }

    update(delta) {
        const backgroudX = Math.ceil(delta) * 2;
        if (-this.x >= this.width) {
            this.x = 0;
        }
        this.x -= backgroudX;
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

            this._drawEngine.drawImage({
                spriteSheet: sprites,
                image: this._frames[this._frameIndex],
                x: this.x + this.width,
                y: this.y,
                width: this.width,
                height: this.height,
            });
        });
    }
}
