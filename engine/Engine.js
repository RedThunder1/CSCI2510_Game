class Engine {
    static canvas;
    static ctx;

    static layers = ["default", "UI"]

    static start(nextScene, settings) {
        Engine.canvas = document.getElementById("canv");
        Engine.ctx = Engine.canvas.getContext("2d");

        addEventListener("keydown", Input.keyDown);
        addEventListener("keyup", Input.keyUp);

        SceneManager.nextScene = nextScene;

        if(settings){
            Engine.layers = settings.layers
        }

        requestAnimationFrame(Engine.gameLoop);
    }

    static gameLoop() {
        SceneManager.update();

        Engine.update();
        Engine.draw();
        requestAnimationFrame(Engine.gameLoop);
    }

    static draw() {
        Engine.canvas.width = window.innerWidth;
        Engine.canvas.height = window.innerHeight;
        SceneManager.currentScene.draw(this.ctx);
    }

    static update() {
        SceneManager.currentScene.update();
    }
}