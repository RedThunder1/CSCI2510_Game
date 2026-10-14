class GoalScene extends Scene {
    constructor() {
        super();
    }

    start() {
        this.instantiate(new Terrain(window.innerWidth, 100, 'black', 'floor'), {x: 0, y: window.innerHeight - 100});
        this.instantiate(new Terrain(20, window.innerHeight, 'black', 'left_wall'), {x: 0, y: 0});
        this.instantiate(new Terrain(20, window.innerHeight, 'black', 'right_wall'), {x: window.innerWidth - 20, y: 0});
        this.instantiate(new Terrain(window.innerWidth, 20, 'black', 'ceiling'), {x: 0, y: 0});
        this.instantiate(new Spikes(window.innerWidth - 40, 50), {x: 20, y: window.innerHeight - 150})
        this.instantiate(new Terrain(200, 20, 'black', 'goal platform'), {x: 20, y: 550});
        this.instantiate(new Player(), {x: 21, y: 500});
    }
}