class GameObject {
    components = [];
    name = "";
    collider;

    addComponent(component) {
        this.components.push(component);
        component.gameObject = this;
    }

    start() {
        for (const component of this.components) {
            component.start?.();
        }
    }

    update() {
        for (const component of this.components) {
            component.update?.();
        }
    }

    draw(ctx) {
        for (const component of this.components) {
            component.draw?.(ctx);
        }
    }

    destroy() {
        if (this.collider) {
            const index = Physics.colliders.indexOf(this.collider);
            Physics.colliders.splice(index, 1);
        }
    }
}