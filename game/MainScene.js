class MainScene extends Scene {
    constructor() {
        super();
        this.instantiate(new MainGameObject());

        this.instantiate(new Terrain({x: 0, y: window.innerHeight - 100}, window.innerWidth, 100, 'black', 'floor'));
        this.instantiate(new Terrain({x: 0, y: 0}, 20, window.innerHeight, 'black', 'left_wall'));
        this.instantiate(new Terrain({x: window.innerWidth - 20, y: 0}, 20, window.innerHeight, 'black', 'right_wall'));
        this.instantiate(new Terrain({x: 0, y: 0}, window.innerWidth, 20, 'black', 'ceiling'));
        this.instantiate(new Terrain({x: 0, y: 750 - 20}, 200, 20, 'black', 'shelf'));
        this.instantiate(new Terrain({x: 300, y: 650 - 20}, 200, 20, 'black'), 'shelf 2');
        this.instantiate(new Terrain({x: 400, y: 550}, 200, 500, 'black', 'wall'));
        this.instantiate(new MovingTerrain({x: 600, y: 550}, 300, 50, 'black', 2, [window.innerWidth - 320, 600]));

        //Custom Objects
        this.instantiate(new Enemy({x: 700, y: window.innerHeight - 150}, [1000, 600.1]));
        this.instantiate(new Player({x: 100, y: 0}));

        this.instantiate(new UI());
    }
}