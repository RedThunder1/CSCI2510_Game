class Bullet extends GameObject{
    position;
    direction
    speed = 15;
    lifeTime = 100;

    constructor(position, direction) {
        super();
        this.position = position;
        this.direction = direction;
    }

    update() {
        this.lifeTime--;

        this.position.x += this.speed * this.direction;

        if (this.lifeTime < 0) {
            Engine.currentScene.destroy(this);
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.lineTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x, -10 + this.position.y);
        ctx.lineTo(20 + this.position.x, -10 + this.position.y);
        ctx.lineTo(20 + this.position.x, this.position.y);

        ctx.fillStyle = "blue";
        ctx.fill();
    }
}