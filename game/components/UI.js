class UI extends GameObject {
    //health bar
    width = 200;
    height = 50;
    position = {x: 20, y: this.height + 20};
    health = 100;

    start() {
        this.transform.position = this.position;
    }

    update() {
        let player = Engine.currentScene.get('Player')
        this.health = !player ? 0 : player.health;
    }

    draw(ctx) {
        this.drawHealthBar(ctx);
    }

    drawHealthBar(ctx) {
        ctx.beginPath();
        ctx.lineTo(this.transform.position.x, this.transform.position.y);
        ctx.lineTo(this.transform.position.x, -this.height + this.transform.position.y);
        ctx.lineTo(this.width + this.transform.position.x, -this.height + this.transform.position.y);
        ctx.lineTo(this.width + this.transform.position.x, this.transform.position.y);

        ctx.fillStyle = "black";
        ctx.fill();

        ctx.beginPath();
        ctx.lineTo(this.transform.position.x, this.transform.position.y);
        ctx.lineTo(this.transform.position.x, -this.height + this.transform.position.y);
        ctx.lineTo(this.transform.position.x + (this.health * 2), -this.height + this.transform.position.y);
        ctx.lineTo(this.transform.position.x + (this.health * 2), this.transform.position.y);

        ctx.fillStyle = "green";
        ctx.fill();
    }
}