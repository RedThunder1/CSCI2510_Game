class Enemy extends Character {

    patrolPoints;
    currentPoint;
    currentIndex = 0;

    bulletDelay = 5;
    shooting = false;
    right = true;

    constructor(
        patrolPoints = [],
        width = 50,
        height = 50,
        health = 100,
        speed = 2,
        accel = 0.1) {
        super();
        this.name = "enemy"
        this.width = width;
        this.height = height;
        this.health = health;
        this.speed = speed;
        this.accel = accel;
        this.patrolPoints = patrolPoints;
        this.currentPoint = patrolPoints[0];
        this.tags.push('enemy')

        this.collider.onCollision = function (other) {

        }
    }

    update() {
        super.update();
        this.move();

        if (this.bulletDelay <= 0) {
            this.bulletDelay = 5;
            this.shooting = false;
        } else if (this.shooting) {
            this.bulletDelay -= 1;
        }

        if (!this.shooting) {
            SceneManager.currentScene.instantiate(new Bullet('enemy', this.right ? 1 : -1), {x: this.right ? this.position.x + this.width/2 : this.position.x, y: this.position.y + 25});
            this.shooting = true;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.lineTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x, this.height + this.position.y);
        ctx.lineTo(this.width + this.position.x, this.height + this.position.y);
        ctx.lineTo(this.width + this.position.x, this.position.y);

        ctx.fillStyle = "green";
        ctx.fill();
    }

    move() {
        const direction = this.position.x < this.currentPoint ? 1 : -1;
        this.right = direction > 0;

        if (direction > 0 && this.position.x < this.currentPoint) {
            if (this.accel < 1) this.accel += .1;
            this.position.x += (this.speed * this.accel);
        } else if (direction < 0 && this.position.x > this.currentPoint) {
            if (this.accel < 1) this.accel += .1;
            this.position.x -= (this.speed * this.accel);
        }

        if (direction > 0 && this.position.x > this.currentPoint || direction < 0 && this.position.x < this.currentPoint) {
            if (this.patrolPoints.length > this.currentIndex + 1) {
                this.currentIndex++;
                this.currentPoint = this.patrolPoints[this.currentIndex];
            } else {
                this.currentIndex = 0;
                this.currentPoint = this.patrolPoints[this.currentIndex];
            }
        }
    }
}