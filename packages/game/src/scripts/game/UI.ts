import { Container, Texture, Text, Sprite } from "pixi.js";

interface ExtendedSprite extends Sprite {
    originalX?: number;
    originalY?: number;
    originalAlpha?: number;
}

class UI extends Container {
    constructor() {
        super();
    }
}
