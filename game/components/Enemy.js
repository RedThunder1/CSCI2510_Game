class Enemy extends Character {

    patrolPoints;
    currentPoint;
    currentIndex = 0;

    bulletDelay = 100;
    shooting = false;
    right = true;

    constructor(
        position = {x: 50, y: 50},
        patrolPoints = [],
        width = 50,
        height = 50,
        health = 100,
        speed = 2,
        accel = 0.1) {
        super();
        this.name = "enemy"
        this.transform.position = position;
        this.width = width;
        this.height = height;
        this.health = health;
        this.speed = speed;
        this.accel = accel;
        this.patrolPoints = patrolPoints;
        this.currentPoint = patrolPoints[0];
        this.collider.tags.push('enemy')

        this.collider.onCollision = function (other) {

        }
    }

    update() {
        super.update();
        this.move();

        if (this.bulletDelay <= 0) {
            this.bulletDelay = 100;
            this.shooting = false;
        } else if (this.shooting) {
            this.bulletDelay -= 1;
        }

        if (!this.shooting) {
            Engine.currentScene.instantiate(new Bullet('enemy', {x: this.right ? this.transform.position.x + this.width/2 : this.transform.position.x, y: this.transform.position.y + 25}, this.right ? 1 : -1));
            this.shooting = true;
        }
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.lineTo(this.transform.position.x, this.transform.position.y);
        ctx.lineTo(this.transform.position.x, this.height + this.transform.position.y);
        ctx.lineTo(this.width + this.transform.position.x, this.height + this.transform.position.y);
        ctx.lineTo(this.width + this.transform.position.x, this.transform.position.y);

        ctx.fillStyle = "green";
        ctx.fill();
    }

    move() {
        const direction = this.transform.position.x < this.currentPoint ? 1 : -1;
        this.right = direction > 0;

        if (direction > 0 && this.transform.position.x < this.currentPoint) {
            if (this.accel < 1) this.accel += .1;
            this.transform.position.x += (this.speed * this.accel);
        } else if (direction < 0 && this.transform.position.x > this.currentPoint) {
            if (this.accel < 1) this.accel += .1;
            this.transform.position.x -= (this.speed * this.accel);
        }

        if (direction > 0 && this.transform.position.x > this.currentPoint || direction < 0 && this.transform.position.x < this.currentPoint) {
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