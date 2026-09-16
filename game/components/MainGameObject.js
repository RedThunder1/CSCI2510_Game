class MainGameObject extends GameObject {
    constructor() {
        super();
        this.addComponent(new UpdateComponent());
        this.addComponent(new Terrain({x: 0, y: window.innerHeight - 100}, window.innerWidth, 100), 'black');
        this.addComponent(new Terrain({x: 0, y: 500 - 20}, 200, 20), 'black');

        //Custom Objects
        this.addComponent(new Player({x: 100, y: 0}));
        //this.addComponent(new Enemy({x: 500, y: 500}));
    }
}