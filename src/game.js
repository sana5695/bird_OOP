class Game {
    constructor() {
        this._config = new Config();

        this.canvas = document.getElementById(this._config.canvas.Id);
        this._canvasListener = null;
        this.canvas.width = this._config.canvas.width;
        this.canvas.height = this._config.canvas.height;
        this._restartBtn = document.getElementById(
            this._config.canvas.restartBtnId
        );

        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this._score = 0;
        this._record = !localStorage.getItem("record")
            ? 0
            : localStorage.getItem("record");

        this._drawEngine = new CanvasDrawEngine({
            canvas: this.canvas,
        });
        this._physicsEngine = new PhysicsEngine({
            gravity: this._config.gravity,
        });
        this._resourseLoader = new ResourseLoader();
        this._inputHandler = new MouseInputHandler({
            left: ({ x, y }) => {
                this._bird.flap();
            },
        });
    }

    async prepare() {
        this._spriteSheet = this._resourseLoader.load({
            type: RESOURCE_TYPE.IMAGE,
            src: this._config.spriteSheet.src,
            width: this._config.spriteSheet.width,
            height: this._config.spriteSheet.height,
        });
    }

    reset() {
        this._score = 0;

        this._bg = new Bg({
            x: this._config.bg.x,
            y: this._config.bg.y,
            width: this._config.bg.width,
            height: this._config.bg.height,
            frames: this._config.bg.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,
        });

        this._bird = new Bird({
            x: this._config.bird.x,
            y: this._config.bird.y,
            width: this._config.bird.width,
            height: this._config.bird.height,
            spriteSheet: this._spriteSheet,
            flapSpeed: this._config.bird.flapSpeed,
            physicsEngine: this._physicsEngine,
            drawEngine: this._drawEngine,
            game: this,
            frames: this._config.bird.frames,
            animationFrameSpeed: this._config.bird.animationFrameSpeed,
            rotateSpeed: this._config.bird.rotateSpeed,
            maxDeg: this._config.bird.maxDeg
        });

        this._tubes = new Tubes({
            x: this._config.tubes.x,
            y: this._config.tubes.y,
            width: this._config.tubes.width,
            height: this._config.tubes.height,
            frames: this._config.tubes.frames,
            spriteSheet: this._spriteSheet,
            speedGame: this._config.tubes.animationFrameSpeed,
            drawEngine: this._drawEngine,
            game: this,
            spaceTube: this._config.spaceTube,
            index: 0,
            time: 0,
        });
        this._tubes2 = new Tubes({
            x: this._config.tubes.x,
            y: this._config.tubes.y,
            width: this._config.tubes.width,
            height: this._config.tubes.height,
            frames: this._config.tubes.frames,
            spriteSheet: this._spriteSheet,
            speedGame: this._config.tubes.animationFrameSpeed,
            drawEngine: this._drawEngine,
            game: this,
            spaceTube: this._config.spaceTube,
            index: 0,
            time: 156,
        });
        this._tubes3 = new Tubes({
            x: this._config.tubes.x,
            y: this._config.tubes.y,
            width: this._config.tubes.width,
            height: this._config.tubes.height,
            frames: this._config.tubes.frames,
            spriteSheet: this._spriteSheet,
            speedGame: this._config.tubes.animationFrameSpeed,
            drawEngine: this._drawEngine,
            game: this,
            spaceTube: this._config.spaceTube,
            index: 0,
            time: 156 * 2,
        });

        this.score = new Score({
            x: this._config.score.x,
            y: this._config.score.y,
            width: this._config.score.width,
            height: this._config.score.height,
            frames: this._config.score.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,
        });

        this._gameOverWords = new GameOverWords({
            x: this._config.interfaces.gameOverWords.x,
            y: this._config.interfaces.gameOverWords.y,
            width: this._config.interfaces.gameOverWords.width,
            height: this._config.interfaces.gameOverWords.height,
            frames: this._config.interfaces.gameOverWords.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,
        });

        this._startWords = new StartWords({
            x: this._config.interfaces.startWords.x,
            y: this._config.interfaces.startWords.y,
            width: this._config.interfaces.startWords.width,
            height: this._config.interfaces.startWords.height,
            frames: this._config.interfaces.startWords.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,
        });

        this._tapImg = new TapImg({
            x: this._config.interfaces.tapImg.x,
            y: this._config.interfaces.tapImg.y,
            width: this._config.interfaces.tapImg.width,
            height: this._config.interfaces.tapImg.height,
            frames: this._config.interfaces.tapImg.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,
        });

        this._gameOverDesk = new GameOverDesk({
            x: this._config.interfaces.gameOverDesk.x,
            y: this._config.interfaces.gameOverDesk.y,
            width: this._config.interfaces.gameOverDesk.width,
            height: this._config.interfaces.gameOverDesk.height,
            frames: this._config.interfaces.gameOverDesk.frames,
            spriteSheet: this._spriteSheet,
            drawEngine: this._drawEngine,
            game: this,

            scoresX: this._config.interfaces.gameOverDesk.scoresX,
            scoresY: this._config.interfaces.gameOverDesk.scoresY,

            recordX: this._config.interfaces.gameOverDesk.recordX,
            recordY: this._config.interfaces.gameOverDesk.recordY,

            medalX: this._config.interfaces.gameOverDesk.medals.x,
            medalY: this._config.interfaces.gameOverDesk.medals.y,
            medalW: this._config.interfaces.gameOverDesk.medals.w,
            medalH: this._config.interfaces.gameOverDesk.medals.h,
            medalFrames: this._config.interfaces.gameOverDesk.medals.frames,

            recordForBronze: this._config.recordForBronze,
            recordForSilver: this._config.recordForSilver,
            recordForGold: this._config.recordForGold,
            recordForPlatinum: this._config.recordForPlatinum,
        });
    }

    update(delta) {
        this._bg.update(delta);
        this._bird.update(delta);
        this._tubes.update(delta);
        this._tubes2.update(delta);
        this._tubes3.update(delta);
        //this.score.update()
    }

    draw() {
        this._bg.draw();
        this._bird.draw();
        this._tubes.draw();
        this._tubes2.draw();
        this._tubes3.draw();
        this.score.draw();
    }

    _loop() {
        const now = Date.now();
        const delta = now - this._lastUpdate;

        this.update(delta / 1000);

        if (this._playing) {
            this._drawEngine.clear();
            this.draw();

            this._lastUpdate = now;

            requestAnimationFrame(this._loop.bind(this));
        }
    }

    start() {
        this.canvas.removeEventListener("click", this._canvasListener);
        this._playing = true;
        this._inputHandler.subscribe();
        this._lastUpdate = Date.now();
        this.reset();
        this._loop();
    }
    preview() {
        this.canvas.removeEventListener("click", this._canvasListener);
        this._drawEngine.clear();
        this.reset();
        this._bg.draw();
        this._startWords.draw();
        this._tapImg.draw();
        this._canvasListener = (event) => {
            this.start();
        };
        this.canvas.addEventListener("click", this._canvasListener);
    }

    gameOver() {
        if (this._score > this._record) {
            localStorage.setItem("record", this._score);
            this._record = this._score;
        }
        this._gameOverWords.draw();
        this._gameOverDesk.draw();
        this._canvasListener = (event) => {
            this.preview();
        };
        this.canvas.addEventListener("click", this._canvasListener);
        this._playing = false;
    }
}
