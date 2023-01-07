class Tubes extends Entity {
    constructor(params) {
        super(params);
        this._SPEEDGAME = params.speedGame;

        this._index = params.index;

        this._minTallBottomTube = 300;
        this._maxTallBottomTube = 140;
        this.time = params.time;
        this.z = 1;
        this._spaceTube = this.height + params.spaceTube;
    }

    coordinateCalcX(a) {
        return -(this._index * this._SPEEDGAME) + this._game.width + a;
    }

    randomHight() {
        this.y = Math.floor(Math.random() * (300 - 150 + 1)) + 150;
    }

    resetTube(x) {
        if (x == 400) {
            this.randomHight();
        }

        if (x < -68) {
            this._index = 0;
            this.x = 400;
            this.z = 1;

            if (this.time > 0) {
                this.time = 0;
                this.x = 400;
            }
        }
    }

    collision(x, y) {
        if (this.x < x && this.x + this.width > x) {
            if (this.y < y || this.y - this._spaceTube + this.height > y) {
                this._game.gameOver();
            }
        }
    }

    update(delta) {
        this._index += Math.ceil(delta);

        this.resetTube(this.x);

        this.x = this.coordinateCalcX(this.time);

        if (this.x + this.width / 2 < this._game._config.bird.x && this.z) {
            this._game._score += 1;
            this.z = 0;
        }

        this.collision(this._game._bird.D[2], this._game._bird.A[3]);
        this.collision(this._game._bird.C[2], this._game._bird.B[3]);
        this.collision(this._game._bird.B[2], this._game._bird.C[3]);
        this.collision(this._game._bird.A[2], this._game._bird.D[3]);
    }

    draw() {
        this._spriteSheet.then((sprites) => {
            this._drawEngine.drawImage({
                spriteSheet: sprites,
                image: this._frames[0],
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height,
            });

            this._drawEngine.drawImage({
                spriteSheet: sprites,
                image: this._frames[1],
                x: this.x,
                y: this.y - this._spaceTube,
                width: this.width,
                height: this.height,
            });
        });
    }
}
