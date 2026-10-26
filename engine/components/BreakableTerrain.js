class BreakableTerrain extends Terrain {

    colorIndex = 0
    health = 30;
    colorStages = ['rgb(206 173 104)', 'rgb(171 145 88)', 'rgb(108 92 59)']

    constructor(width, height, name = 'Terrain') {
        super(width, height, 'rgb(141 119 72)', name);
    }

    start() { super.start(); }

    update() {
        super.update();
        console.log(this.health, this.colorIndex);
        if (this.health === 20) { this.colorIndex = 1; }
        else if (this.health === 10) { this.colorIndex = 2; }
        else if (this.health <= 0) { SceneManager.currentScene.destroy(this); }
        else { this.colorIndex = 0; }
    }

    draw(ctx) {
        this.color = this.colorStages[this.colorIndex];
        super.draw(ctx);
    }
}