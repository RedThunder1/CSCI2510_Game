class Drawing {

    static drawBox(x, y, width, height, color, ctx) {
        ctx.beginPath();
        ctx.lineTo(x, y);
        ctx.lineTo(x, y - height);
        ctx.lineTo(x + width, y - height);
        ctx.lineTo(x + width, y)

        ctx.fillStyle = color;
        ctx.fill();
    }

}