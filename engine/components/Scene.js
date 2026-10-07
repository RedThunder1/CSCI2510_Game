class Scene {
    gameObjects = [];

    constructor() {
        let cameraGameObject = new GameObject("MainCamera", ["MainCamera"])
        cameraGameObject.addComponent(new Camera())
        this.instantiate(cameraGameObject)
    }

    instantiate(gameObject, position = new Vector2(0, 0), rotation = 0) {
        this.gameObjects.push(gameObject)
        gameObject.transform.position = position
        gameObject.transform.rotation = rotation
        return gameObject
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
        ctx.fillStyle = Camera.main.components[1].backgroundColor;
        ctx.fillRect(0, 0, Engine.canvas.width, Engine.canvas.height)

        //Start Camera code
        ctx.save()

        for (const layer of Engine.layers.filter(l=>l !== "UI")) {
            for (const gameObject of this.gameObjects.filter(go => go.layer === layer)) {
                gameObject.draw(ctx)
            }
        }


        ctx.restore()
        //Stop camera code

        //UI Layer
        for (const gameObject of this.gameObjects.filter(go => go.layer === "UI")) {
            gameObject.draw(ctx)
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