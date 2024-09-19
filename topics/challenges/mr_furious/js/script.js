/**
 * Mr.Furious Challenge
 * Ellie "DASH" Desjardins
 * 
 * Septembre 19 challenge with our friend Mr.Furious to practice using variables
 *
 */

"use strict";

// Our friend Mr. Furious
let mrFurious = {
    // Position and size
    x: 200,
    y: 200,
    size: 100,
    // Colour
    fill: {
        r: 255,
        g: 225,
        b: 225
    }
};

let sky = {
    r: 160,
    g: 180,
    b: 200
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw (and update) Mr. Furious
 */
function draw() {
    // Sky changing
    sky.r = sky.r - 0.5;
    sky.g = sky.g - 0.5;
    sky.b = sky.b - 0.5;
    // Sky colour
    background(sky.r, sky.g, sky.b);
    // Constrain sky colour
    sky.r = constrain(sky.r, 0, 255)
    sky.g = constrain(sky.g, 0, 255)
    sky.b = constrain(sky.b, 0, 255)

    // Mr.Furious get more and more red
    mrFurious.fill.g = mrFurious.fill.g - 0.5;
    mrFurious.fill.b = mrFurious.fill.b - 0.5;

    // Constrain Mr.Furious skin problem
    mrFurious.fill.g = constrain(mrFurious.fill.g, 0, 255);
    mrFurious.fill.b = constrain(mrFurious.fill.b, 0, 255);


    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(mrFurious.x, mrFurious.y, mrFurious.size);
    pop();
}