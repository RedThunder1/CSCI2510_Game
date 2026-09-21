class Player extends Character {
    sprintMultiplier = 1.5; //Sprint multiplier when this holds shift
    jumpPower = 1.2; //Power of this jump
    jumping = false; //Is this currently jumping
    jumpingTimer = 20; //Duration of jumping

    bulletDelay = 10;
    shooting = false;
    
    constructor(position) {
        super();
        this.position = position;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.lineTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x, this.height + this.position.y);
        ctx.lineTo(this.width + this.position.x, this.height + this.position.y);
        ctx.lineTo(this.width + this.position.x, this.position.y);

        ctx.fillStyle = "red";
        ctx.fill();
    }

    update() {
        this.move();
        this.jump();

        if (this.bulletDelay <= 0) {
            this.bulletDelay = 10;
            this.shooting = false;
        } else if (this.shooting) {
            this.bulletDelay -= 1;
        }

        if (Input.keysDown.includes('KeyF') && !this.shooting) {
            Engine.currentScene.instantiate(new Bullet({x: this.position.x, y: this.position.y + 25}, 1));
            this.shooting = true;
        }

        super.update();
    }

    move() {
        const sprint = Input.keysDown.includes("ShiftLeft") ? this.sprintMultiplier : 1;

        this.prevPosition = this.position;

        if (Input.keysDown.includes('KeyA')) {
            if (this.accel < 1) this.accel += .1;
            this.position.x -= (this.speed * this.accel * sprint);
        }
        else if (Input.keysDown.includes('KeyD')) {
            if (this.accel < 1) this.accel += .1;
            this.position.x += (this.speed * this.accel * sprint);
        }
        else {
            if (this.accel > 0.1) {
                this.accel -= 0.1;
            } else if (this.accel <= 0.1) {
                this.accel = 0.1
            }
        }
    }

    jump() {
        if ((this.jumping || (Input.keysDown.includes('Space') && !this.jumping && this.grounded))) {
            this.jumping = true;
            this.jumpingTimer--;
            if (this.jumpingTimer > 0) {
                this.position.y -= this.jumpPower * this.jumpingTimer;
            } else {
                this.jumping = false;
                this.jumpingTimer = 20;
            }
        }

    }
}