import { Node } from "./core"
export class Shape extends Node {
    x: number;
    y: number;
    color: string;
    ctx: CanvasRenderingContext2D;
}
export class Vector2 {
    x: number;
    y: number;
    constructor(x: number = 0, y: number = 0) {
        this.x = x;
        this.y = y;
    }
    norm(): Vector2 {
        if (this.x == 0 && this.y == 0)
            return new Vector2(1, 0);
        length = Math.sqrt(this.x * this.x + this.y * this.y);
        return new Vector2(this.x / length, this.y / length);
    }
    angle(): number {
        if (this.x == 0 && this.y == 0)
            return 0;
        return Math.atan2(this.y, this.x);
    }
    length(): number {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    zero(): boolean {
        return this.x == 0 && this.y == 0
    }
    clear(): void {
        this.x = 0;
        this.y = 0;
    }

}
export class Circle extends Shape {
    radius: number;


    constructor(x: number, y: number, radius: number, color: string) {
        super();
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;

    }
    update_position(dx: number, dy: number): void {
        this.x += Math.round(dx);
        this.y += Math.round(dy);
    }

    public draw(): void {
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.ctx.fillStyle = this.color;
        this.ctx.fill();
        this.ctx.restore();
    }
}