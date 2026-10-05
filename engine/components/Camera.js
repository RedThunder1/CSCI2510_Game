class Camera extends Component {
    backgroundColor = "white"

    static get main() {
        return GameObject.find("MainCamera")
    }
}