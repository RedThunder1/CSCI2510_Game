class Boss extends Character {

    bulletDelay = 1;
    shooting = false;

    player;

    burstTimer = 5;
    burstDuration = 1.5;

    constructor(
        width = 100,
        height = 100,
        health = 300,
        speed = 0,
        accel = 0,
        name = 'boss') {
        super(width, height, health, speed, accel, name);
        this.tags.push('enemy')

        this.collider.onCollision = function (other) {

        }
    }

    start() {
        super.start();
    }

    update() {
        super.update();

        this.player = SceneManager.currentScene.get('Player')

        if (this.bulletDelay <= 0) {
            this.bulletDelay = 1;
            this.shooting = false;
        } else if (this.shooting) {
            this.bulletDelay -= Time.deltaTime;
        }

        if (this.burstTimer > 0) {
            this.burstTimer -= Time.deltaTime;
        }

        if (this.burstTimer <= 0 && this.burstDuration > 0) {
            this.burstDuration -= Time.deltaTime;
        }

        if (!this.shooting) {
            if (this.burstTimer <= 0 && this.burstDuration > 0) {
                this.bulletDelay = 0.2;
            }

            SceneManager.currentScene.instantiate(new Bullet('enemy', 1), {x: this.position.x + this.width/2, y: this.player ? this.player.position.y + 30: 50});
            this.shooting = true;
        }
        console.log(this.burstDuration, this.burstTimer);

        if (this.burstTimer <= 0 && this.burstDuration <= 0) {
            this.burstTimer = 5;
            this.burstDuration = 1.5;
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
}