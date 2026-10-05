class TextLabel extends Component{
    /** @type{string} The fill color of the text */
    fillStyle = "black"

    /** @type{string} The string to display */
    text  = "[BLANK]"

    constructor(text, color) {
        super();
        this.text = text;
        this.color = color;
    }

    draw(ctx) {
        ctx.save()

        ctx.translate(this.transform.position.x, this.transform.position.y)
        ctx.scale(this.transform.scale.x, this.transform.scale.y)
        ctx.rotate(this.transform.rotation)

        ctx.fillStyle = this.fillStyle

        ctx.fillText(this.text, 0, 0)

        ctx.restore()
    }
}