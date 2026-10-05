class Empty extends GameObject {
    constructor(position, components = []) {
        super();
        this.position = position;
        this.components = components;
    }
}