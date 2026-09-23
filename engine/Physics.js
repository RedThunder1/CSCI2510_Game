class Physics {
    static colliders = [];
    static gravity = 10;

    static addCollider(collider) {
        this.colliders.push(collider);
    }

    static removeCollider(collider) {

    }

    static isBoxColliding(collider) {

        let collisions = [];

        for(let other of this.colliders) {
            if (collider !== other) {
                const colliderRight = collider.position.x + collider.width;
                const colliderLeft = collider.position.x;
                const colliderTop = collider.position.y;
                const colliderBottom = collider.position.y + collider.height;

                const otherRight = other.position.x + other.width;
                const otherLeft = other.position.x;
                const otherTop = other.position.y;
                const otherBottom = other.position.y + other.height;

                const xMin = colliderLeft < otherRight;
                const xMax = colliderRight > otherLeft;
                const yMin = colliderTop < otherBottom;
                const yMax = colliderBottom > otherTop;

                const overlayXDirection = Math.abs(colliderRight - otherLeft) < 9 ? -1 : 1;
                const overlayX = Math.min(colliderRight, otherRight) - Math.max(colliderLeft, otherLeft);

                const overlayYDirection = Math.abs(colliderBottom - otherTop) < 20 ? 1 : -1;
                const overlayY = Math.min(colliderBottom, otherBottom) - Math.max(colliderTop, otherTop);

                if (xMin && xMax && yMin && yMax)
                    //collision data
                    collisions.push({
                        colliding: true,
                        collidingSides: {
                            top: (colliderTop < otherBottom && colliderBottom > otherBottom),
                            left: (colliderLeft < otherRight && colliderRight > otherRight),
                            bottom: (colliderBottom > otherTop && colliderTop < otherBottom),
                            right: (colliderRight < otherLeft && colliderLeft > colliderLeft)
                        },
                        yMovement: (overlayY > 0 && overlayY < 20 ? overlayY : 0) * overlayYDirection,
                        xMovement: (overlayX > 0 && overlayX < 9 ? overlayX : 0) * overlayXDirection,
                    });
            }
        }
        return collisions;
    }
}