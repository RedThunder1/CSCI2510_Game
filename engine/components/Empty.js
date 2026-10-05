class Empty extends GameObject {
    constructor(position, components = []) {
        super();
        this.transform.position = position;
        this.components = components;
    }
}