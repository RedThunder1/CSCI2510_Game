class MainScene extends Scene {
    constructor() {
        super();
        this.instantiate(new MainGameObject())

        this.instantiate(new Terrain({x: 0, y: window.innerHeight - 100}, window.innerWidth, 100, 'black', 'floor'));
        this.instantiate(new Terrain({x: 0, y: 750 - 20}, 200, 20, 'black', 'shelf'));
        this.instantiate(new Terrain({x: 300, y: 650 - 20}, 200, 20, 'black'), 'shelf 2')
        this.instantiate(new Terrain({x: 400, y: 550}, 200, 500, 'black', 'wall'));

        //Custom Objects
        this.instantiate(new Player({x: 100, y: 0}));
        this.instantiate(new Enemy({x: 700, y: 200}, [1000, 700]));
    }
}