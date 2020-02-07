import { Node } from './core';
import { CollisionManager } from './collision'
export class Game extends Node {
    private canvas: HTMLCanvasElement;
    private contex: CanvasRenderingContext2D;
    private height: number = 1000;
    private width: number = 800;
    detect_collision = 0;
    collision_manager: CollisionManager;


    constructor() {
        super();
        this.canvas = <HTMLCanvasElement>document.getElementById('canvas');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.contex = this.canvas.getContext("2d");
        this.children = new Array<Node>();
        this.init();
        if (this.detect_collision) {
            this.collision_manager = new CollisionManager(this.detect_collision, this.width, this.height);
            this.children.forEach(element => {
                this.collision_manager.add(element);
            });
        };
    }

    public init() {

    }

    public add(shape: Node) {
        shape.ctx = this.contex;
        this.children.push(shape)
    }

    public update(dt?: number): void {
        if (this.detect_collision) {
            this.collision_manager.update(dt);
        }
        this.contex.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.children.forEach(element => {
            element.update(dt);
            element.draw();
        });
    }
}

