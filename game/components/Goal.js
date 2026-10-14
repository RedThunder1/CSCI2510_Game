class Goal extends Terrain {

    nextScene;

    constructor(width, height, nextScene, name = 'Goal') {
        super();
        this.width = width;
        this.height = height;
        this.nextScene = nextScene;
        this.color = 'lime';
        this.name = name;

        const collider = new BoxCollider(this.width, this.height, undefined, true);
        this.collider = collider;
        this.addComponent(collider);
        this.collider.onCollision = this.onCollision.bind(this);
    }

    draw(ctx) {
        super.draw(ctx);
    }

    onCollision(other) {
        if (!other.gameObject.tags.includes('player')) return;
        SceneManager.nextScene = this.nextScene;
    }
}