class BoxCollider extends Collider {
    name;
    position;
    width;
    height;
    tolerance;

    /**
     * Box collider class
     * @param { GameObject } gameObject is a reference to the parent GameObject
     * @param { Vector2 } position is the coordinates of the bottom left corner
     * @param { number } width is the width of the collider (left to right)
     * @param { number } height is the height of the collider (bottom to top)
     * @param { { X, Y } } tolerance is the max tolerance of how much the collider may overlap inside another Collider
     * @param { string } name of the collider. Mainly for debugging use.
     */
    constructor(gameObject, position, width, height, tolerance = {x: 9, y: 20}, trigger = false, tags = [], name = 'BoxCollider') {
        super();
        this.gameObject = gameObject;
        this.position = position;
        this.width = width;
        this.height = height;
        this.name = name;
        this.tolerance = tolerance;
        this.trigger = trigger;
        this.tags = tags;
        Physics.addCollider(this);
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

    onCollision(other) {
        super.onCollision(other);
    }
}