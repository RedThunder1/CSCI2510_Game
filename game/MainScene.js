class MainScene extends Scene {
    constructor() {
        super();
        this.instantiate(new MainGameObject());

        this.instantiate(new Terrain(window.innerWidth, 100, 'black', 'floor'), {x: 0, y: window.innerHeight - 100});
        this.instantiate(new Terrain(20, window.innerHeight, 'black', 'left_wall'), {x: 0, y: 0});
        this.instantiate(new Terrain(20, window.innerHeight, 'black', 'right_wall'), {x: window.innerWidth - 20, y: 0});
        this.instantiate(new Terrain(window.innerWidth, 20, 'black', 'ceiling'), {x: 0, y: 0});
        this.instantiate(new Terrain(200, 20, 'black', 'shelf'), {x: 0, y: 750 - 20});
        this.instantiate(new Terrain(200, 20, 'black', 'shelf 2'), {x: 300, y: 650 - 20});
        this.instantiate(new Terrain(200, 500, 'black', 'wall'), {x: 400, y: 550});
        this.instantiate(new MovingTerrain(300, 50, 'black', 2, [window.innerWidth - 320, 600]), {x: 600, y: 550});

        //Custom Objects
        this.instantiate(new Enemy([1000, 600.1]), {x: 700, y: window.innerHeight - 150});
        this.instantiate(new Player(), {x: 100, y: 0});

        this.instantiate(new UI('UI', ['UI'], 'UI'));

        const empty = new Empty();
        empty.addComponent(new TextLabel('Test'))
        this.instantiate(empty, {x: 300, y: 400});
    }
}