class Player extends Character {
    sprintMultiplier = 1.5; //Sprint multiplier when this holds shift
    jumpPower = 1000; //Power of this jump
    jumping = false; //Is this currently jumping
    jumpingTimer = 5; //Duration of jumping
    jumpingAccel = 1;

    bulletDelay = 0.5;
    shooting = false;
    right = true; //Is the player facing right, used for shooting direction
    
    constructor() {
        super();
        this.name = 'Player'
        this.tags.push('player')
    }

    start() {

    }

    draw(ctx) {
        super.draw(ctx);
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
            this.bulletDelay = 0.5;
            this.shooting = false;
        } else if (this.shooting) {
            this.bulletDelay -= Time.deltaTime;
        }

        if (Input.keysDown.includes('KeyF') && !this.shooting) {
            SceneManager.currentScene.instantiate(new Bullet('player', this.right ? 1 : -1), {x: this.right ? this.position.x + this.width/2 : this.position.x, y: this.position.y + 25});
            this.shooting = true;
        }

        if (this.health <= 0) {
            SceneManager.nextScene = new GameOverScene(SceneManager.currentScene);
        }
        super.update();
    }

    move() {
        const sprint = Input.keysDown.includes("ShiftLeft") ? this.sprintMultiplier : 1;

        this.prevPosition = this.position;

        if (Input.keysDown.includes('KeyA')) {
            if (this.accel < 1) this.accel += 5 * Time.deltaTime;
            this.position.x -= (this.speed * this.accel * sprint * Time.deltaTime);
            this.right = false;
        }
        else if (Input.keysDown.includes('KeyD')) {
            if (this.accel < 1) this.accel += 5 * Time.deltaTime;
            this.position.x += (this.speed * this.accel * sprint * Time.deltaTime);
            this.right = true;
        }
        else {
            if (this.accel > 0.1) {
                this.accel -= 5;
            } else if (this.accel < 0.1) {
                this.accel = 0.1
            }
        }
    }

    jump() {
        if ((this.jumping || (Input.keysDown.includes('Space') && !this.jumping && this.grounded))) {
            this.jumping = true;

            if (this.jumpingAccel > 0) {
                this.position.y -= this.jumpPower * this.jumpingAccel * Time.deltaTime;
                this.jumpingAccel -= Time.deltaTime;
            }

            if (this.grounded && this.jumpingAccel <= 0) {
                this.jumpingAccel = 1;
                this.jumping = false;
            }
        }
    }

    destroy() {
        super.destroy();
    }
}