class Star {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 10 + Math.random() * 15;
        this.baseSize = this.size;
        this.wiggleSpeed = 0.05 + Math.random() * 0.05;
        this.phase = Math.random() * Math.PI * 2;
        this.char = "x"; // User requested 'x'
    }

    update() {
        this.phase += this.wiggleSpeed;
        // Twinkle effect: modify size and maybe opacity (via color in draw)
        this.size = this.baseSize + Math.sin(this.phase) * 3;
    }

    draw(ctx, cameraY) {
        const drawY = this.y - cameraY;
        if (drawY > ctx.canvas.height + 50 || drawY < -50) return;

        // Twinkle opacity
        const opacity = 0.5 + Math.abs(Math.sin(this.phase)) * 0.5;
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.font = `${this.size}px Arial`;
        ctx.fillText(this.char, this.x, drawY);
    }
}
