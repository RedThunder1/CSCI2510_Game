class TextLabel extends Component {
    fillStyle;
    text;
    font;
    offset;

    constructor(text = '[BLANK]', color = 'black', fontsize = 20, bold = false, offset = {x: 0, y: 0}) {
        super();
        this.text = text;
        this.fillStyle = color;
        this.font = (bold ? 'bold ' : '') + fontsize + 'px Arial';
        this.offset = offset;
    }

    draw(ctx) {
        ctx.save()

        ctx.fillStyle = this.fillStyle

        ctx.font = this.font
        ctx.fillText(this.text, this.position.x + this.offset.x, this.position.y + this.offset.y);

        ctx.restore()
    }
}