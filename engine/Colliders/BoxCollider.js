class BoxCollider extends Collider {
    name;
    position;
    width;
    height;

    /**
     * Box collider class
     * @param { Vector2 } position is the coordinates of the bottom left corner
     * @param { number } width is the width of the collider (left to right)
     * @param { number } height is the height of the collider (bottom to top)
     */
    constructor(position, width, height, name = 'BoxCollider') {
        super();
        this.position = position;
        this.width = width;
        this.height = height;
        this.name = name;
    }

    update() {

    }

    draw(ctx) {
        ctx.beginPath();

        ctx.lineWidth = 10;
        ctx.lineTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x, this.height + this.position.y);
        ctx.lineTo(this.width + this.position.x, this.height + this.position.y);
        ctx.lineTo(this.width + this.position.x, this.position.y);

        ctx.strokeStyle = 'blue'
    }
}