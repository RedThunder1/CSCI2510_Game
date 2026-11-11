class BossUI extends GameObject {

    width = window.innerWidth - 80;
    height = 50;

    maxHealth = 300;
    health = 300;
    healthWidth = 1;

    constructor() {
        super();
    }

    update() {
        const boss = SceneManager.currentScene.get('boss');
        this.health = boss ? boss.health : 0;

        this.healthWidth = this.health / this.maxHealth;
    }

    draw(ctx) {
        this.drawHealthBar(ctx);
    }

    drawHealthBar(ctx) {
        const point = {x: 40, y: 100};
        ctx.beginPath();
        ctx.lineTo(point.x, point.y);
        ctx.lineTo(point.x, -this.height + point.y);
        ctx.lineTo(this.width + point.x, -this.height + point.y);
        ctx.lineTo(this.width + point.x, point.y);

        ctx.fillStyle = "gray";
        ctx.fill();

        ctx.beginPath();
        ctx.lineTo(point.x, point.y);
        ctx.lineTo(point.x, -this.height + point.y);
        ctx.lineTo(point.x + (this.width * this.healthWidth), -this.height + point.y);
        ctx.lineTo(point.x + (this.width * this.healthWidth), point.y);

        ctx.fillStyle = "red";
        ctx.fill();
    }

}