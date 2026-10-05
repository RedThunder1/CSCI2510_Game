class Player extends Character {
    sprintMultiplier = 1.5; //Sprint multiplier when this holds shift
    jumpPower = 1.5; //Power of this jump
    jumping = false; //Is this currently jumping
    jumpingTimer = 20; //Duration of jumping

    bulletDelay = 10;
    shooting = false;
    right = true; //Is the player facing right, used for shooting direction
    
    constructor(position) {
        super();
        this.name = 'Player'
        this.transform.position = position;

        this.collider.onCollision = function (other) {

        }
    }

    start() {
        this.collider.tags.push('player')
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.lineTo(this.transform.position.x, this.transform.position.y);
        ctx.lineTo(this.transform.position.x, this.height + this.transform.position.y);
        ctx.lineTo(this.width + this.transform.position.x, this.height + this.transform.position.y);
        ctx.lineTo(this.width + this.transform.position.x, this.transform.position.y);

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
            Engine.currentScene.instantiate(new Bullet('player', {x: this.right ? this.transform.position.x + this.width/2 : this.transform.position.x, y: this.transform.position.y + 25}, this.right ? 1 : -1));
            this.shooting = true;
        }

        super.update();
    }

    move() {
        const sprint = Input.keysDown.includes("ShiftLeft") ? this.sprintMultiplier : 1;

        this.prevPosition = this.transform.position;

        if (Input.keysDown.includes('KeyA')) {
            if (this.accel < 1) this.accel += .1;
            this.transform.position.x -= (this.speed * this.accel * sprint);
            this.right = false;
        }
        else if (Input.keysDown.includes('KeyD')) {
            if (this.accel < 1) this.accel += .1;
            this.transform.position.x += (this.speed * this.accel * sprint);
            this.right = true;
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
                this.transform.position.y -= this.jumpPower * this.jumpingTimer;
            } else {
                this.jumping = false;
                this.jumpingTimer = 20;
            }
        }
    }

    destroy() {
        Engine.currentScene.instantiate(new Empty({x: window.innerWidth/2 - 100}, [new TextLabel('Game Over', 'red')]))
        super.destroy();
    }
}