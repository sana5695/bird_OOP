class GameOverDesk extends Entity {
    constructor(params) {
        super(params);
        this._scoresX = params.scoresX;
        this._scoresY = params.scoresY;

        this._recordX = params.recordX;
        this._recordY = params.recordY;

        this._medalX = params.medalX;
        this._medalY = params.medalY;
        this._medalW = params.medalW;
        this._medalH = params.medalH;
        this._medalFrames = params.medalFrames;

        this._recordForBronze = params.recordForBronze;
        this._recordForSilver = params.recordForSilver;
        this._recordForGold = params.recordForGold;
        this._recordForPlatinum = params.recordForPlatinum;
    }

    drawScores() {
        this._spriteSheet.then((sprites) => {
            this._drawEngine.drawText({
                x: this._scoresX,
                y: this._scoresY,
                text: this._game._score,
            });

            this._drawEngine.drawText({
                x: this._recordX,
                y: this._recordY,
                text: this._game._record,
            });
        });

        if (+this._game._score >= this._recordForBronze) {
            if (+this._game._score >= this._recordForSilver) {
                if (+this._game._score >= this._recordForGold) {
                    if (+this._game._score >= this._recordForPlatinum) {
                        this.drawMedal(0);
                    } else {
                        this.drawMedal(1);
                    }
                } else {
                    this.drawMedal(2);
                }
            } else {
                this.drawMedal(3);
            }
        }
    }

    drawMedal(medalNum) {
        this._spriteSheet.then((sprites) => {
            this._drawEngine.drawImage({
                spriteSheet: sprites,
                image: this._medalFrames[medalNum],
                x: this._medalX,
                y: this._medalY,
                width: this._medalW,
                height: this._medalH,
            });
        });
    }

    draw() {
        console.log(this._game._record);
        super.draw();
        this.drawScores();
    }
}
