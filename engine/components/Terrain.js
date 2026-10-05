class Terrain extends GameObject {
    position;
    width;
    height;
    collider;
    color;
    name;

    constructor(position, width, height, color, name = 'Terrain') {
        super();
        this.transform.position = position;
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
        ctx.lineTo(this.transform.position.x, this.transform.position.y);
        ctx.lineTo(this.transform.position.x, this.height + this.transform.position.y);
        ctx.lineTo(this.width + this.transform.position.x, this.height + this.transform.position.y);
        ctx.lineTo(this.width + this.transform.position.x, this.transform.position.y);

        ctx.fillStyle = this.color;
        ctx.fill();
    }
}