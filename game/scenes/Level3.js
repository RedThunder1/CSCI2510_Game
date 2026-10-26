class Level3 extends Scene {
    constructor() {
        super();
    }

    start() {
        this.gameObjects = [this.gameObjects.at(0)]
        this.instantiate(new Terrain(window.innerWidth, 100, 'black', 'floor'), {x: 0, y: window.innerHeight - 100});
        this.instantiate(new Terrain(20, window.innerHeight, 'black', 'left_wall'), {x: 0, y: 0});
        this.instantiate(new Terrain(20, window.innerHeight, 'black', 'right_wall'), {x: window.innerWidth - 20, y: 0});
        this.instantiate(new Terrain(window.innerWidth, 20, 'black', 'ceiling'), {x: 0, y: 0});
        this.instantiate(new Spikes(window.innerWidth - 40, 50), {x: 20, y: window.innerHeight - 150})
        this.instantiate(new Terrain(200, 20, 'black', 'platform'), {x: 20, y: 550});
        this.instantiate(new Terrain(200, 20, 'black', 'platform'), {x: 350, y: 550});
        this.instantiate(new Terrain(200, 20, 'black', 'platform'), {x: 700, y: 550});
        this.instantiate(new Terrain(200, 20, 'black', 'platform'), {x: 1050, y: 550});
        this.instantiate(new Terrain(200, 20, 'black', 'platform'), {x: 1400, y: 550});
        this.instantiate(new Terrain(200, 20, 'black', 'platform'), {x: 1750, y: 550});

        this.instantiate(new BreakableTerrain(50, 100), {x: 775, y: 450})
        this.instantiate(new Terrain(50, 450, 'black', 'platform'), {x: 775, y: 0})

        this.instantiate(new Player(), {x: 21, y: 500});

        this.instantiate(new Background(50, 50,  'grey'), {x: 100, y: 100});
        const helpText = new GameObject('helpText');
        helpText.addComponent(new TextLabel('F to shoot'));
        this.instantiate(helpText, {x: 80, y: 180});

        super.start();
    }
}