class PhysicsEngine {
    constructor({ gravity }) {
        this._gravity = gravity;
    }

    update(entity, delta) {
        if (entity.falling) {
            entity.speed += this._gravity * delta;
            entity.y += entity.speed * delta;
        }
        if (entity.rotate) {
            entity.deg += entity.speed * delta * 0.01;
        }
    }
}
