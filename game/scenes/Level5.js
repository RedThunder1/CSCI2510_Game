class Level5 extends Scene {

    constructor() {
        super();
    }

    start() {
        this.gameObjects = [this.gameObjects.at(0)]
        this.instantiate(new Terrain(window.innerWidth, 100, 'black', 'floor'), {x: 0, y: window.innerHeight - 100});
        this.instantiate(new Terrain(20, window.innerHeight, 'black', 'left_wall'), {x: 0, y: 0});
        this.instantiate(new Terrain(20, window.innerHeight, 'black', 'right_wall'), {x: window.innerWidth - 20, y: 0});
        this.instantiate(new Terrain(window.innerWidth, 20, 'black', 'ceiling'), {x: 0, y: 0});

        this.instantiate(new Player(), {x: window.innerWidth - 80, y: 99});

        this.instantiate(new Boss(), {x: 20, y: 199});

        this.instantiate(new UI('UI', ['UI'], 'UI'));
        this.instantiate(new BossUI('UI', ['UI'], 'UI'));
    }

}