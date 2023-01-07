class Config {
    scale = 1;

    recordForBronze = 20
    recordForSilver = 50
    recordForGold = 100
    recordForPlatinum = 200

    gravity = 1000 * this.scale;

    canvas = {
        Id: "game",
        restartBtnId: "restart",
        width: 400 * this.scale,
        height: 320 * this.scale,
    };

    spriteSheet = {
        width: 606,
        height: 428,
        src: "assets/sprite.png",
    };

    bg = {
        x: 0,
        y: 0,
        width: this.canvas.width,
        height: this.canvas.height,
        frames: [{
            x: 0,
            y: 0,
            w: 275,
            h: 228,
        }, ],
    };

    tubes = {
        animationFrameSpeed: 3 * this.scale,

        x: this.canvas.width,
        y: 0,
        width: 68,
        height: 400,
        frames: [{
                x: 503,
                y: 1,
                w: 52,
                h: 400,
            },
            {
                x: 556,
                y: 1,
                w: 52,
                h: 400,
            },
        ],
    };

    bird = {
        animationFrameSpeed: 5 * this.scale,

        maxDeg: 1,

        x: 50 * this.scale,
        y: 200 * this.scale,
        width: 34 * this.scale,
        height: 26 * this.scale,

        flapSpeed: 300 * this.scale,

        frames: [{
                x: 276,
                y: 113,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 139,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 165,
                w: 34,
                h: 26,
            },
            {
                x: 276,
                y: 139,
                w: 34,
                h: 26,
            },
        ],
    };

    spaceTube = this.bird.height * 4;

    score = {
        x: 0,
        y: 0,
        width: 150,
        height: 40,
        frames: [{
            x: 282,
            y: 285,
            w: 100,
            h: 22,
        }, ],
    };

    interfaces = {
        gameOverWords: {
            x: this.canvas.width / 2 - 189 / 2,
            y: this.canvas.height / 2 - 39 / 0.5,
            width: 189,
            height: 39,
            frames: [{
                x: 193,
                y: 228,
                w: 189,
                h: 39,
            }, ],
        },

        startWords: {
            x: this.canvas.width / 2 - 174 / 2,
            y: this.canvas.height / 2 - 45 / 0.5,
            width: 174,
            height: 45,
            frames: [{
                x: 0,
                y: 228,
                w: 174,
                h: 45,
            }, ],
        },

        tapImg: {
            x: this.canvas.width / 2 - 114 / 2,
            y: this.canvas.height / 2 - 100 / 4,
            width: 114,
            height: 100,
            frames: [{
                x: 30,
                y: 281,
                w: 114,
                h: 100,
            }, ],
        },

        gameOverDesk: {
            x: this.canvas.width / 2 - 227 / 2,
            y: this.canvas.height / 2 - 117 / 4,
            width: 227,
            height: 117,
            frames: [{
                x: 174,
                y: 272,
                w: 227,
                h: 117,
            }, ],
            scoresX: 190,
            scoresY: 166,

            recordX: 190,
            recordY: 208,

            medals: {
                x: 112,
                y: 173,
                w: 45,
                h: 44,
                frames: [{
                        x: 312,
                        y: 112,
                        w: 45,
                        h: 44,
                    },
                    {
                        x: 312,
                        y: 158,
                        w: 45,
                        h: 44,
                    },
                    {
                        x: 359,
                        y: 112,
                        w: 45,
                        h: 44,
                    },
                    {
                        x: 359,
                        y: 158,
                        w: 45,
                        h: 44,
                    },
                ],
            },
        },
    };
}