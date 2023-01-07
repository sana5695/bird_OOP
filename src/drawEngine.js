class DrawEngine {
    rotate() {}

    drawImage({ spriteSheet, image, x, y, width, height }) {}

    clear() {}
}

class CanvasDrawEngine extends DrawEngine {
    constructor({ canvas }) {
        super();
        this._canvas = canvas;
        this._context = canvas.getContext("2d");
    }

    rotate(x, y, deg) {
        this._context.save();
        this._context.translate(x, y);
        this._context.rotate(deg);
    }

    drawText({ x, y, text }) {
        this._context.font = "32px serif";
        this._context.fillText(text, x, y);
    }

    drawImage({ spriteSheet, image, x, y, width, height }) {
        super.drawImage({
            spriteSheet,
            image,
            x,
            y,
            width,
            height,
        });

        this._context.drawImage(
            spriteSheet,
            image.x,
            image.y,
            image.w,
            image.h,
            x,
            y,
            width,
            height
        );
    }

    restore() {
        this._context.restore();
    }

    clear() {
        super.clear();
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height);
    }
}
