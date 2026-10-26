class GameOverScene extends Scene {

    restartScene;

    constructor(restartScene) {
        super();
        this.restartScene = restartScene;
        this.gameObjects[0].components[0].backgroundColor = 'red';

        const text = new GameObject("GameOver", ["GameOver"]);
        text.addComponent(new TextLabel("GAME OVER", 'black', 100, true))
        this.instantiate(text, {x: (window.innerWidth / 2) - 250, y: (window.innerHeight / 2) - 50});
        const resetText = new GameObject("GameOver", ["GameOver"]);
        resetText.addComponent(new TextLabel("Press Space to Restart", 'black', 40, false))
        this.instantiate(resetText, {x: (window.innerWidth / 2) - 150, y: (window.innerHeight / 2) + 100});
    }

    update() {
        if (Input.keysDown.includes('Space')) {
            SceneManager.nextScene = this.restartScene;
        }
    }
}