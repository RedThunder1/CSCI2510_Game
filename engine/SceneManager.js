class SceneManager {
    static currentScene;
    static nextScene;

    static start(scene) {
        this.currentScene = scene;
        SceneManager.currentScene.start();
    }

    static update(){
        //dev purposes
        if (Input.keysDown.length > 0) console.log(Input.keysDown);
        if (Input.keysDown.includes('Digit1')) {
            this.nextScene = new Level1();
        } else if (Input.keysDown.includes('Digit2')) {
            this.nextScene = new Level2();
        } else if (Input.keysDown.includes('Digit3')) {
            this.nextScene = new Level3();
        }

        if(SceneManager.nextScene) {
            SceneManager.currentScene = SceneManager.nextScene;
            Physics.colliders = [];
            SceneManager.nextScene = undefined;
            SceneManager.currentScene.start();
        }
    }

    static loadScene(nextScene, additive = false){
        if(!additive) {
            SceneManager.nextScene = nextScene;
        }
        else {
            const tempScene = new nextScene();
            for(const gameObject of tempScene.gameObjects) {
                SceneManager.currentScene.gameObjects.push(gameObject);
            }
        }

    }
}