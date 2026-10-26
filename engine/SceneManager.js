class SceneManager {
    static currentScene;
    static nextScene;

    static start(scene) {
        this.currentScene = scene;
        SceneManager.currentScene.start();
    }

    static update(){
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