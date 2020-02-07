import { Circle, Shape, Vector2 } from './shapes';
import { Node } from './core';
import { Game } from './game'


const RADIUS = 4;

enum State {
    Health,
    Incubation,
    Sick,
    Immune,
}
class Human extends Circle {
    speed: number = 60;
    velocity: Vector2 = new Vector2(Math.random(), Math.random());
    state: State = State.Health;
    constructor(pos: Vector2, state: State = State.Health) {
        super(pos.x, pos.y, RADIUS, '');
        this.state = state;
        this.update_color();
    }

    update(dt: number): void {
        // this.velocity = this.velocity.norm();
        // let rand_angle = (Math.random()-0.5);
        // this.velocity.x = this.velocity.x * Math.cos(rand_angle) + this.velocity.y * Math.sin(rand_angle);
        // this.velocity.y = this.velocity.x * Math.sin(rand_angle) + this.velocity.y * Math.cos(rand_angle);
        // let dx = this.velocity.x * this.speed;
        // let dy = this.velocity.y * this.speed;

        // this.x += dx * dt;
        // this.y += dy * dt;
        if (this.velocity.zero()) {
            let dx = (Math.random() - 0.5) * this.speed;
            let dy = (Math.random() - 0.5) * this.speed;
        
            this.update_position(dx * dt, dy * dt);
        }
        else {
            // console.log("push away");
            this.update_position(this.velocity.x * dt, this.velocity.y * dt);
            this.velocity.clear();
        }

    }

    infect() {
        if (this.state == State.Health) {
            this.state = State.Incubation;
            this.update_color();
            setTimeout(() => { this.state = State.Sick; this.update_color() }, 2000);
        }
    }

    update_color() {
        if (this.state == State.Health)
            this.color = 'green';
        else if (this.state == State.Incubation)
            this.color = 'orange';
        else if (this.state == State.Sick)
            this.color = 'red';
        else if (this.state == State.Immune)
            this.color = 'blue';


    }
    on_collision(other: Human) {
        // console.log("Collision");
        // push away two circle
        // let dx = this.x - other.x;
        // let dy = this.y - other.y;
        // // this.update_position(dx, dy);
        // this.velocity.x = 20 * dx;
        // this.velocity.y = 20 * dy;

        if ((this.state == State.Sick || this.state == State.Incubation) && other.state == State.Health) {
            other.infect();
            console.log("infect");
        }
    }

}
function random_cicle(x: number, y: number, r: number): Vector2 {
    r = r * Math.random();
    let a = Math.random() * 2 * Math.PI;
    return new Vector2(x + r * Math.sin(a), y + r * Math.cos(a));

}

export class VirusGame extends Game {

    init() {
        this.detect_collision = RADIUS * 4;
        let h = new Human(random_cicle(300, 300, 200), State.Sick);
        this.add(h);
        for (let i = 0; i < 400; i++) {
            let h = new Human(random_cicle(300, 300, 200))
            this.add(h);
            // this.collision_manager.add(h);
        }


    }

}