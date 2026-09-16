class Character extends GameObject {
    prevPosition;
    position;
    collider;
    width;
    height;
    speed;
    health;
    accel;

    grounded = false;
    gravity = Physics.gravity;

    constructor(
        position = {x: 50, y: 50},
        width = 50,
        height = 50,
        health = 100,
        speed = 5,
        accel = 0.1) {
        super();
        this.position = position;
        this.width = width;
        this.height = height;
        this.health = health;
        this.speed = speed;
        this.accel = accel;

        this.collider = new BoxCollider(position, width, height, 'Character Collider');
        Physics.addCollider(this.collider);
    }

    update() {
        this.position.y += this.gravity;

        this.collider.position = this.position;
        const collisionData = Physics.isBoxColliding(this.collider);
        if (collisionData.colliding) {
            this.position.y -= collisionData.yMovement - 1;
        }
        this.grounded = collisionData.grounded;
    }

    start() {

    }

    move() {

    }
}