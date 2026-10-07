class Terrain extends GameObject {
    width;
    height;
    collider;
    color;
    name;

    constructor(width, height, color, name = 'Terrain') {
        super();
        this.width = width;
        this.height = height;
        this.color = color;
        this.name = name;

        this.collider = new BoxCollider(this.width, this.height, name + ' Collider');
        this.addComponent(this.collider);
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