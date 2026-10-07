class TextLabel extends Component {
    fillStyle = "black"
    text  = "[BLANK]"

    constructor(text, color) {
        super();
        this.text = text;
        this.color = color;
    }

    draw(ctx) {
        console.log('fas')
        ctx.save()

        ctx.translate(this.position.x, this.position.y)
        ctx.scale(this.transform.scale.x, this.transform.scale.y)
        ctx.rotate(this.transform.rotation)

        ctx.font = '20px Arial';

        ctx.fillStyle = this.fillStyle

        ctx.fillText(this.text, 0, 0)

        ctx.restore()
    }
}