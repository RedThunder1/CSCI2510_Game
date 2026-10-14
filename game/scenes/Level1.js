class Level1 extends Scene {
    constructor() {
        super();

        this.instantiate(new Terrain(window.innerWidth, 100, 'black', 'floor'), {x: 0, y: window.innerHeight - 100});
        this.instantiate(new Terrain(20, window.innerHeight, 'black', 'left_wall'), {x: 0, y: 0});
        this.instantiate(new Terrain(20, window.innerHeight, 'black', 'right_wall'), {x: window.innerWidth - 20, y: 0});
        this.instantiate(new Terrain(window.innerWidth, 20, 'black', 'ceiling'), {x: 0, y: 0});
        this.instantiate(new Terrain(200, 20, 'black', 'shelf'), {x: 0, y: 750 - 20});
        this.instantiate(new Terrain(200, 20, 'black', 'shelf 2'), {x: 300, y: 650 - 20});
        this.instantiate(new Spikes(380, 50), {x: 20, y: window.innerHeight - 150})
        this.instantiate(new Terrain(200, 500, 'black', 'wall'), {x: 400, y: 550});
        this.instantiate(new MovingTerrain(300, 50, 'black', 2, [window.innerWidth - 520, 600]), {x: 600, y: 550});
        this.instantiate(new Terrain(200, 20, 'black', 'goal platform'), {x: window.innerWidth - 220, y: 550});
        const nextScene = new GoalScene();
        this.instantiate(new Goal(20, 100, nextScene), {x: window.innerWidth - 40, y: 450});

        //Custom Objects
        this.instantiate(new Enemy([1000, 600.1]), {x: 700, y: window.innerHeight - 150});
        this.instantiate(new Player(), {x: 100, y: 0});

        this.instantiate(new UI('UI', ['UI'], 'UI'));

        this.instantiate(new Empty('empty', 'text', 'UI'), {x: 300, y: 400}, 0, [new TextLabel()]);
    }
}