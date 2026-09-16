class Terrain extends GameObject {
    position;
    width;
    height;
    collider;
    color;

    constructor(position, width, height, color) {
        super();
        this.position = position;
        this.width = width;
        this.height = height;
        this.color = color;

        this.collider = new BoxCollider(this.position, this.width, this.height, 'Terrain Collider');
        Physics.addCollider(this.collider);
    }

    start() {

    }

    update() {

    }

    draw(ctx) {
        ctx.beginPath();
        ctx.lineTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x, this.height + this.position.y);
        ctx.lineTo(this.width + this.position.x, this.height + this.position.y);
        ctx.lineTo(this.width + this.position.x, this.position.y);

        ctx.fillStyle = this.color;
        ctx.fill();
    }
}