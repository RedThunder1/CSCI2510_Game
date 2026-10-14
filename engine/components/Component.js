class Component {
    gameObject

    didStart = false

    get transform() {
        return this.gameObject.transform;
    }

    get position() {
        return this.gameObject.position;
    }
}