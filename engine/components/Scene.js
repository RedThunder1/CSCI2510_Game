class Scene {
    gameObjects = [];

    instantiate(gameObject) {
        this.gameObjects.push(gameObject);
    }

    start() {
        for (const gameObject of this.gameObjects) {
            gameObject.start();
        }
    }

    update() {
        for (const gameObject of this.gameObjects) {
            gameObject.update();
        }
    }

    draw(ctx) {
        for (const gameObject of this.gameObjects) {
            gameObject.draw(ctx);
        }
    }

    destroy(gameObject) {
        gameObject.destroy();
        this.gameObjects.splice(this.gameObjects.indexOf(gameObject), 1);
    }

    get(name) {
        for (const obj of this.gameObjects) {
            if (obj.name === name) return obj;
        }
        return null;
    }

}