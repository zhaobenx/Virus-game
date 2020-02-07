import { Node } from "./core"
import { Circle } from "./shapes"

export class CollisionManager extends Node {
    private grid_size: number;
    private width: number;
    private height: number;
    private grid: Array<Array<Array<Circle>>>

    constructor(grid_size: number, width: number, height: number) {
        super();
        this.grid_size = grid_size;
        this.width = width;
        this.height = height;
        this.grid = new Array<Array<Array<Circle>>>();
        this.children = new Array<Node>();
        for (let i = 0; i < Math.ceil(this.height / this.grid_size); i++) {
            let row = new Array<Array<Circle>>();
            for (let j = 0; j < Math.ceil(this.width / this.grid_size); j++) {
                row.push(new Array<Circle>());
            }

            this.grid.push(row);
        }

    }

    public add(node: Node) {
        this.children.push(node);
    }

    update(dt: number) {
        this.grid.forEach(row => {
            row.forEach(grid => {
                // grid.length = 0;// some problem after many times repeat
                grid.splice(0, grid.length)
                // grid = Array<Circle>();
            })

        });
        this.children.forEach(element => {
            if (element instanceof Circle) {
                let x = element.x / this.grid_size;
                x = Math.round(x);
                let y = element.y / this.grid_size;
                y = Math.round(y);
                if (!(x < 0 || x > Math.floor(this.height / this.grid_size) || y < 0 || y > Math.floor(this.width / this.grid_size)))
                    this.grid[Math.round(x)][Math.round(y)].push(element);
            }
        })
        this.grid.forEach(row => {
            row.forEach(grid => {
                if (grid.length > 1) {
                    for (let i = 0; i < grid.length - 1; i++) {
                        for (let j = 1; j < grid.length; j++) {
                            let s1 = grid[i];
                            let s2 = grid[j];
                            if ((s1.x - s2.x) * (s1.x - s2.x) + (s1.y - s2.y) * (s1.y - s2.y) < (s1.radius + s2.radius) * (s1.radius + s2.radius)) {
                                // collision detected
                                s1.on_collision(s2);
                            }
                        }
                    }
                }

            });

        });

    }

}