class Enemy extends Character {
    update() {

    }

    draw(ctx) {
        ctx.beginPath();
        ctx.lineTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x, -this.height + this.position.y);
        ctx.lineTo(this.width + this.position.x, -this.height + this.position.y);
        ctx.lineTo(this.width + this.position.x, this.position.y);

        ctx.fillStyle = "green";
        ctx.fill();
    }
}