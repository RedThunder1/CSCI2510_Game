class TextLabel extends Component {
    fillStyle;
    text;
    fon;

    constructor(text = '[BLANK]', color = 'black', fontsize = 20, bold = false) {
        super();
        this.text = text;
        this.fillStyle = color;
        this.font = (bold ? 'bold ' : '') + fontsize + 'px Arial';
    }

    draw(ctx) {
        ctx.save()

        ctx.fillStyle = this.fillStyle

        ctx.font = this.font
        ctx.fillText(this.text, this.position.x, this.position.y);

        ctx.restore()
    }
}