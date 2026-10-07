class UI extends GameObject {
    //health bar
    width = 200;
    height = 50;
    //position = {x: 20, y: this.height + 20};
    health = 100;

    gameOver = false;

    start() {
    }

    update() {
        let player = SceneManager.currentScene.get('Player')
        this.health = !player ? 0 : player.health;

        if (this.health <= 0 && !this.gameOver) {
            this.gameOver = true;
            console.log('game over')
            const text = new TextLabel('Game Over', 'red');
            this.addComponent(text);
            text.transform.position = {x: 300, y: 300}
            //text.transform.scale = {x: 50, y: 50};
        }
    }

    draw(ctx) {
        this.drawHealthBar(ctx);
    }

    drawHealthBar(ctx) {
        const point = {x: 20, y: 70}
        ctx.beginPath();
        ctx.lineTo(point.x, point.y);
        ctx.lineTo(point.x, -this.height + point.y);
        ctx.lineTo(this.width + point.x, -this.height + point.y);
        ctx.lineTo(this.width + point.x, point.y);

        ctx.fillStyle = "black";
        ctx.fill();

        ctx.beginPath();
        ctx.lineTo(point.x, point.y);
        ctx.lineTo(point.x, -this.height + point.y);
        ctx.lineTo(point.x + (this.health * 2), -this.height + point.y);
        ctx.lineTo(point.x + (this.health * 2), point.y);

        ctx.fillStyle = "green";
        ctx.fill();
    }
}