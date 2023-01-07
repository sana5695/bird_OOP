class Bird extends Entity {
    constructor(params) {
        super(params);
        this._flapSpeed = params.flapSpeed;
        this._rotateSpeed = params.rotateSpeed;
        this._physicsEngine = params.physicsEngine;
        this._maxDeg = params.maxDeg;
        this.falling = true;
        this.rotate = true;
        this.i = 1;
        this._animationFrameSpeed = params.animationFrameSpeed;
        this.A = [this.x - this.width / 3, this.y - this.height / 3];
        this.B = [this.x + this.width / 3, this.y - this.height / 3];
        this.C = [this.x + this.width / 3, this.y + this.height / 3];
        this.D = [this.x - this.width / 3, this.y + this.height / 3];
    }

    draw() {
        this._spriteSheet.then((sprites) => {
            this._drawEngine.rotate(this.x, this.y, this.deg);
            this._drawEngine.drawImage({
                spriteSheet: sprites,
                image: this._frames[this._frameIndex],
                x: -this.width / 2,
                y: -this.height / 2,
                width: this.width,
                height: this.height,
            });
            this._drawEngine.restore();
        });
    }

    collisionBox(XY) {
        let deg = this.deg;
        let x =
            this.x +
            (XY[0] - this.x) * Math.cos(deg) -
            (XY[1] - 200) * Math.sin(deg);
        XY[3] =
            this.y +
            (XY[0] - this.x) * Math.sin(deg) -
            (XY[1] - 200) * Math.cos(deg);
        XY[2] = x;
    }

    update(delta) {
        this._physicsEngine.update(this, delta);
        if (this.deg > this._maxDeg) {
            this.deg = this._maxDeg;
        }
        if (this.deg < -this._maxDeg) {
            this.deg = -this._maxDeg;
        }
        this.collisionBox(this.A);
        this.collisionBox(this.B);
        this.collisionBox(this.C);
        this.collisionBox(this.D);
        if (this.y < this.width / 2) {
            this.y = this.width / 2;
        }
        if (this.y + this.width / 2 >= this._game.height) {
            this._game.gameOver();
        }
        if (this.i > this._animationFrameSpeed) {
            this._frameIndex =
                (this._frameIndex + Math.ceil(delta)) % this._frames.length;
            this.i = 1;
        }
        this.i++;
    }

    flap() {
        this.speed = -this._flapSpeed;
        this.speedDeg = -this.rotateSpeed;
    }
}
