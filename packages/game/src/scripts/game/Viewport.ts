import PIXI from 'pixi.js';
import { Viewport } from "pixi-viewport"

async function createViewport(renderer: PIXI.Renderer, container: PIXI.Container) {
    const viewport = new Viewport({
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        worldWidth: 1000,
        worldHeight: 1000,
        events: renderer.events
    });
    viewport.drag().pinch().wheel().decelerate().clampZoom({ minScale: 0.5, maxScale: 2 });
    viewport.fitWidth(container.width);
    viewport.fitHeight(container.height);
    container.addChild(viewport);
    return viewport;
}

export { createViewport };