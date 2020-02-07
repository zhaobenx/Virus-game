
export class Node {
    ctx: CanvasRenderingContext2D;
    children: Array<Node>;

    draw(): void { };
    update(time: number): void { };
    on_collision(other: Node) { };
    add(node: Node) { };
}

