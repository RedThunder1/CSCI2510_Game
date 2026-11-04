class Level1 extends Scene {

    constructor() {
        super();
    }

    start () {
        this.gameObjects = [this.gameObjects.at(0)]
        this.instantiate(new Terrain(window.innerWidth, 100, 'black', 'floor'), {x: 0, y: window.innerHeight - 100});
        this.instantiate(new Terrain(20, window.innerHeight, 'black', 'left_wall'), {x: 0, y: 0});
        this.instantiate(new Terrain(20, window.innerHeight, 'black', 'right_wall'), {x: window.innerWidth - 20, y: 0});
        this.instantiate(new Terrain(window.innerWidth, 20, 'black', 'ceiling'), {x: 0, y: 0});
        this.instantiate(new Terrain(20, 300, 'black', 'ceiling'), {x: 100, y: 0});
        this.instantiate(new Terrain(20, 300, 'black', 'ceiling'), {x: 180, y: 0});
        this.instantiate(new Terrain(50, 50, 'black'), {x: 600, y: window.innerHeight - 150});
        this.instantiate(new Terrain(50, 80, 'black'), {x: 1200, y: window.innerHeight - 180});

        this.instantiate(new Player(), {x: 125, y: 50});

        this.instantiate(new Background(50, 50, 'grey'), {x: 300, y: 100});
        this.instantiate(new Background(50, 50, 'grey'), {x: 360, y: 100});
        const helpText = new GameObject('helpText');
        helpText.addComponent(new TextLabel('A and D to move'));
        this.instantiate(helpText, {x: 280, y: 200});

        this.instantiate(new Background(110, 50, 'grey'), {x: 600, y: 100});
        const helpText2 = new GameObject('helpText');
        helpText2.addComponent(new TextLabel('Space to jump'));
        this.instantiate(helpText2, {x: 590, y: 200});

        this.instantiate(new Background(110, 50, 'grey'), {x: 900, y: 100});
        const helpText3 = new GameObject('helpText');
        helpText3.addComponent(new TextLabel('Shift to sprint'));
        this.instantiate(helpText3, {x: 900, y: 200});

        this.instantiate(new Goal(100, 100, new Level2()), {x: window.innerWidth - 120, y: window.innerHeight - 200});

        this.instantiate(new UI('UI', ['UI'], 'UI'));
        super.start();
    }
}