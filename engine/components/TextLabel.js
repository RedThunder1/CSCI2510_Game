class TextLabel extends Component {
    fillStyle = "black"
    text  = "[BLANK]"
    font = "20px Arial"

    draw(ctx) {
        ctx.save()

        ctx.fillStyle = this.fillStyle

        ctx.font = this.font
        ctx.fillText(this.text, 0, 0)

        ctx.restore()
    }
}