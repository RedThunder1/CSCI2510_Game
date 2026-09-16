class Physics {
    static colliders = [];
    static gravity = 10;

    static addCollider(collider) {
        this.colliders.push(collider);
    }

    static removeCollider(collider) {

    }

    static isBoxColliding(collider) {
        for(let other of this.colliders) {
            if (collider !== other) {
                const colliderRight = collider.position.x + collider.width + 1;
                const colliderLeft = collider.position.x - 1;
                const colliderTop = collider.position.y - 1;
                const colliderBottom = collider.position.y + collider.height + 1;

                const otherRight = other.position.x + other.width;
                const otherLeft = other.position.x;
                const otherTop = other.position.y;
                const otherBottom = other.position.y + other.height;

                const xMin = colliderLeft < otherRight;
                const xMax = colliderRight > otherLeft;
                const yMin = colliderTop < otherBottom;
                const yMax = colliderBottom > otherTop;

                const overlayX = Math.min(colliderRight, otherRight) - Math.max(colliderLeft, otherLeft);
                const overlayY = Math.min(colliderBottom, otherBottom) - Math.max(colliderTop, otherTop);

                console.log(overlayX, overlayY);

                if (xMin && xMax && yMin && yMax)
                    //collision data
                    return {
                        colliding: true,
                        grounded: true,
                        yMovement: overlayY > 0 ? overlayY : 0,
                    };
            }
        }
        return false;
    }

    static groundCheck(collider) {
        for(let other of this.colliders) {
            if (collider !== other) {

            }
        }
    }
}