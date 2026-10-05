class Bullet extends GameObject{
    direction
    speed = 15;
    lifeTime = 100;
    width = 20;
    height = 10;
    collider;
    damage = 10;
    parentTag

    constructor(parentTag, position, direction) {
        super();
        this.parentTag = parentTag;
        this.transform.position = position;
        this.direction = direction;

        const collider = new BoxCollider(this.width, this.height, undefined, true);
        collider.tags.push('bullet')
        this.collider = collider;
        this.addComponent(this.collider);

        this.collider.onCollision = this.onCollision.bind(this);
    }

    update() {
        this.lifeTime--;

        this.transform.position.x += this.speed * this.direction;

        if (this.lifeTime < 0) {
            Engine.currentScene.destroy(this);
        }
        const collisionData = Physics.isBoxColliding(this.collider);
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.lineTo(this.transform.position.x, this.transform.position.y);
        ctx.lineTo(this.transform.position.x, -this.height + this.transform.position.y);
        ctx.lineTo(this.width + this.transform.position.x, -this.height + this.transform.position.y);
        ctx.lineTo(this.width + this.transform.position.x, this.transform.position.y);

        ctx.fillStyle = "blue";
        ctx.fill();
    }

    onCollision(other) {
        if (!other.tags.includes(this.parentTag) && !other.tags.includes('bullet')) {
            if (other.gameObject instanceof Character) {
                other.gameObject.health -= this.damage;
            }
            Engine.currentScene.destroy(this);
        }
    }
}