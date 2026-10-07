class MovingTerrain extends Terrain {
    speed;
    points;
    currentPoint;
    currentIndex;

    constructor(width, height, color, speed, points, name = 'Terrain') {
        super(width, height, color, name);
        this.speed = speed;
        this.points = points;
        this.currentPoint = this.points[0];
        this.currentIndex = 0;
    }

    draw(ctx) {
        super.draw(ctx);
    }

    update() {
        const direction = this.position.x < this.currentPoint ? 1 : -1;

        if (direction > 0 && this.position.x < this.currentPoint) {
            this.position.x += this.speed;
        } else if (direction < 0 && this.position.x > this.currentPoint) {
            this.position.x -= this.speed;
        }

        if (direction > 0 && this.position.x >= this.currentPoint || direction < 0 && this.position.x <= this.currentPoint) {
            if (this.points.length > this.currentIndex + 1) {
                this.currentIndex++;
                this.currentPoint = this.points[this.currentIndex];
            } else {
                this.currentIndex = 0;
                this.currentPoint = this.points[this.currentIndex];
            }
        }
    }

}