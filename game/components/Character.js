class Character extends GameObject {
    prevPosition;
    width;
    height;
    speed;
    health;
    accel;

    grounded = false;
    gravity = Physics.gravity;

    constructor(
        width = 50,
        height = 50,
        health = 100,
        speed = 250,
        accel = 0.1,
        name = 'Character') {
        super();
        this.width = width;
        this.height = height;
        this.health = health;
        this.speed = speed;
        this.accel = accel;
        this.name = name;

        this.collider = new BoxCollider(width, height);
        this.addComponent(this.collider);
    }

    update() {
        super.update();

        if (this.health <= 0) {
            SceneManager.currentScene.destroy(this);
        }

        this.position.y += this.gravity * Time.deltaTime;

        this.collider.transform.position = this.position;
        const collisionData = Physics.isBoxColliding(this.collider);
        if (collisionData.length > 0) {
            collisionData.forEach(coll => {
                if (coll.colliding) {
                    this.position.y -= coll.yMovement;
                    this.position.x += coll.xMovement;
                }
                this.grounded = !this.grounded ? coll.collidingSides.bottom : this.grounded;
            })
        } else {
            this.grounded = false;
        }
    }

    start() {

    }

    move() {

    }
}