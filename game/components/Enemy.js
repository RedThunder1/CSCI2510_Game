class Enemy extends Character {

    patrolPoints;
    currentPoint;
    currentIndex = 0;

    constructor(
        position = {x: 50, y: 50},
        patrolPoints = [],
        width = 50,
        height = 50,
        health = 100,
        speed = 2,
        accel = 0.1) {
        super();
        this.position = position;
        this.width = width;
        this.height = height;
        this.health = health;
        this.speed = speed;
        this.accel = accel;
        this.patrolPoints = patrolPoints;
        this.currentPoint = patrolPoints[0];
        this.collider.tags.push('enemy')
    }

    update() {
        super.update();
        this.move();
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