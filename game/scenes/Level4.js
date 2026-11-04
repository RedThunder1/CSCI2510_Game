class Level4 extends Scene {

    constructor() {
        super();
    }

    start() {
        this.instantiate(new Terrain(window.innerWidth, 100, 'black', 'floor'), {x: 0, y: window.innerHeight - 100});
        this.instantiate(new Terrain(20, window.innerHeight, 'black', 'left_wall'), {x: 0, y: 0});
        this.instantiate(new Terrain(20, window.innerHeight, 'black', 'right_wall'), {x: window.innerWidth - 20, y: 0});
        this.instantiate(new Terrain(window.innerWidth, 20, 'black', 'ceiling'), {x: 0, y: 0});

        this.instantiate(new Terrain(window.innerWidth - 150, 20, 'black', 'shelf'), {x: 20, y: window.innerHeight - 300});
        this.instantiate(new Terrain(100, 20, 'black', 'shelf'), {x: window.innerWidth - 120, y: window.innerHeight - 200});
        this.instantiate(new Terrain(window.innerWidth - 150, 20, 'black', 'shelf'), {x: 180, y: window.innerHeight - 500});
        this.instantiate(new Terrain(100, 20, 'black', 'shelf'), {x: 20, y: window.innerHeight - 400});
        this.instantiate(new Terrain(window.innerWidth - 150, 20, 'black', 'shelf'), {x: 20, y: window.innerHeight - 700});
        this.instantiate(new Terrain(100, 20, 'black', 'shelf'), {x: window.innerWidth - 120, y: window.innerHeight - 600});

        this.instantiate(new BreakableTerrain(50, 50, ), {x: 100, y: window.innerHeight - 150});

        this.instantiate(new Player(), {x: 20, y: window.innerHeight - 160});

        this.instantiate(new Enemy([300, 1500]), {x: 1500, y: window.innerHeight - 160});
        this.instantiate(new Enemy([1500, 300]), {x: 300, y: window.innerHeight - 360});
        this.instantiate(new Enemy([300, 1500]), {x: 1500, y: window.innerHeight - 560});
        this.instantiate(new Enemy([1500, 300]), {x: 300, y: window.innerHeight - 760});

        this.instantiate(new UI())

        super.start();
    }

}