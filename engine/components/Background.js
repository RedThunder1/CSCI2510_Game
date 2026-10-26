class Background extends GameObject {
    width;
    height;
    color;

    constructor(width, height, color, name = 'Terrain') {
        super();
        this.width = width;
        this.height = height;
        this.color = color;
        this.name = name;
    }

    start() {
        super.start();
    }

    update() {
        super.update();
    }

    draw(ctx) {
        super.draw(ctx);
        ctx.beginPath();
        ctx.lineTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x, this.height + this.position.y);
        ctx.lineTo(this.width + this.position.x, this.height + this.position.y);
        ctx.lineTo(this.width + this.position.x, this.position.y);

        ctx.fillStyle = this.color;
        ctx.fill();
    }
}