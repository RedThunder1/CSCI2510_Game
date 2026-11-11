class UI extends GameObject {
    //health bar
    width = 200;
    height = 50;

    maxHealth = 100;
    health = 100;
    healthWidth = 1;

    gameOver = false;

    start() {
        this.addComponent(new TextLabel('-/-', 'white', 20, false, {x: 300, y: 0}))
    }

    update() {
        let player = SceneManager.currentScene.get('Player')
        this.health = !player ? 0 : player.health;

        this.healthWidth = this.health / this.maxHealth;
    }

    draw(ctx) {
        this.drawHealthBar(ctx);
    }

    drawHealthBar(ctx) {
        const point = {x: 20, y: window.innerHeight - 20};
        ctx.beginPath();
        ctx.lineTo(point.x, point.y);
        ctx.lineTo(point.x, -this.height + point.y);
        ctx.lineTo(this.width + point.x, -this.height + point.y);
        ctx.lineTo(this.width + point.x, point.y);

        ctx.fillStyle = "white";
        ctx.fill();

        ctx.beginPath();
        ctx.lineTo(point.x, point.y);
        ctx.lineTo(point.x, -this.height + point.y);
        ctx.lineTo(point.x + (this.width * this.healthWidth), -this.height + point.y);
        ctx.lineTo(point.x + (this.width * this.healthWidth), point.y);

        ctx.fillStyle = "green";
        ctx.fill();
    }
}