class SceneManager {
    static currentScene;
    static nextScene;
    static saveScene;

    static start() {
        const save = JSON.parse(localStorage.getItem('save'));
        this.currentScene = (SceneManager.saveScene = save ? save : new Level1());
        SceneManager.currentScene.start();
    }

    static update(){
        //dev purposes
        if (Input.keysDown.includes('Digit1')) {
            this.nextScene = new Level1();
        } else if (Input.keysDown.includes('Digit2')) {
            this.nextScene = new Level2();
        } else if (Input.keysDown.includes('Digit3')) {
            this.nextScene = new Level3();
        } else if (Input.keysDown.includes('Digit4')) {
            this.nextScene = new Level4();
        } else if (Input.keysDown.includes('Digit5')) {
            this.nextScene = new Level5();
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