class BoxCollider extends Collider {
    name;
    width;
    height;
    tolerance;

    /**
     * Box collider class
     * @param { number } width is the width of the collider (left to right)
     * @param { number } height is the height of the collider (bottom to top)
     * @param { { X, Y } } tolerance is the max tolerance of how much the collider may overlap inside another Collider
     * @param { string } name of the collider. Mainly for debugging use.
     * @param { boolean } trigger specifies if the collider triggers events or if it physically collides.
     * @param { [] } tags list of tags for collider
     * @param { string } name name of the collider
     */
    constructor(width, height, tolerance = {x: 9, y: 20}, trigger = false, tags = [], name = 'BoxCollider') {
        super();
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

    onCollision(other) {
        super.onCollision(other);
    }
}