declare var require: any;
require('../main.css');


import { VirusGame } from './main';

class App {
    private _game: VirusGame;
    private _lastTime: number;
    constructor(game: VirusGame) {
        this._game = game;
    }

    public setup(): void {
        // Any setup that is required that only runs once before game loads goes here

        requestAnimationFrame(this.gameLoop.bind(this));
    }

    private gameLoop(time: number): void {
        // need to bind the current this reference to the callback
        requestAnimationFrame(this.gameLoop.bind(this));
        // console.log(time);
        if (!this._lastTime) { this._lastTime = time; }
        let dt = (time - this._lastTime) / 1000;
        this._lastTime = time;
        document.getElementById("fps").innerText = `FPS:  ${(1 / dt).toFixed(2)}`;

        this._game.update(dt);
    }
}

window.onload = () => {
    let app = new App(new VirusGame());

    app.setup();
}