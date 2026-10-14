class Spikes extends Terrain {
    triCount = 4;
    maxWidth = 50;
    triWidth = 50;

    constructor(width, height, name = 'spikes') {
        super(width, height, 'red', name);

        const smallestCount = Math.ceil(this.width / this.maxWidth);
        this.triWidth = this.width / smallestCount;
        this.triCount = smallestCount

        this.collider.onCollision = this.onCollision.bind(this);
    }

    draw(ctx) {
        for (let i = 0; i < this.triCount; i++) {
            this.drawTri(ctx, (i * this.triWidth) + this.position.x);
        }
    }

    drawTri(ctx, point) {
        ctx.beginPath();
        ctx.lineTo(point, this.position.y + this.height);
        ctx.lineTo(point + (this.triWidth / 2), this.position.y);
        ctx.lineTo(point + this.triWidth, this.position.y + this.height);

        ctx.fillStyle = 'red';
        ctx.fill();
    }

    onCollision(other) {
        if (other.gameObject.tags.includes('player')) {
            other.gameObject.health = 0;
        }
    }
}