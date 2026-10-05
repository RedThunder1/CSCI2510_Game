class Transform extends Component{
    position = new Vector2(0, 0);
    scale = new Vector2(1, 1);
    rotation = 0;
    parent;

    setParent(parentTransform){
        this.parent = parentTransform;
    }
}