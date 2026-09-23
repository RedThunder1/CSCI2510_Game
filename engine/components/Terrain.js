class Terrain extends GameObject {
    position;
    width;
    height;
    collider;
    color;
    name;

    constructor(position, width, height, color, name = 'Terrain') {
        super();
        this.position = position;
        this.width = width;
        this.height = height;
        this.color = color;
        this.name = name;

        this.collider = new BoxCollider(this.position, this.width, this.height, name + ' Collider');
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

        this.collider.draw(ctx);
    }
}