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
    },
    shakeAmount: 0
};

// Bird
let bird = {
    // Position and size
    x: 0,
    y: 200,
    w: 10,
    h: 10,
    angle: 0,

    // Colour
    fill: {
        r: 100,
        g: 100,
        b: 150
    },
    // Velocity
    velocity: {
        x: 0,
    },
    // Movement
    minVelocity: {
        x: 0,
    },
    maxVelocity: {
        x: 1,
    },
    acceleration: {
        x: 0.0175,
    }
}

let sky = {
    fill: {
        r: 160,
        g: 180,
        b: 200
    }
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
    sky.fill.r = sky.fill.r - 0.8;
    sky.fill.g = sky.fill.g - 0.8;
    sky.fill.b = sky.fill.b - 0.8;

    // Sky colour
    background(sky.fill.r, sky.fill.g, sky.fill.b);

    // Constrain sky colour
    sky.fill.r = constrain(sky.fill.r, 0, 255)
    sky.fill.g = constrain(sky.fill.g, 0, 255)
    sky.fill.b = constrain(sky.fill.b, 0, 255)

    // Mr.Furious get more and more red
    mrFurious.fill.g = mrFurious.fill.g - 0.5;
    mrFurious.fill.b = mrFurious.fill.b - 0.5;

    // Constrain Mr.Furious skin problem
    mrFurious.fill.g = constrain(mrFurious.fill.g, 0, 255);
    mrFurious.fill.b = constrain(mrFurious.fill.b, 0, 255);

    // Mr.Furious shaking
    mrFurious.shakeAmount += 0.01;
    mrFurious.shakeAmount = constrain(mrFurious.shakeAmount, 0, 10)

    const x = mrFurious.x + random(-mrFurious.shakeAmount, mrFurious.shakeAmount);
    const y = mrFurious.y + random(-mrFurious.shakeAmount, mrFurious.shakeAmount);


    // // Constrain Mr.Furious shaking
    mrFurious.x = constrain(mrFurious.x, 190, 210)
    mrFurious.y = constrain(mrFurious.y, 190, 210)

    // Draw Mr. Furious as a coloured circle
    push();
    noStroke();
    fill(mrFurious.fill.r, mrFurious.fill.g, mrFurious.fill.b);
    ellipse(x, y, mrFurious.size);
    pop();

    // Bird velocity
    bird.velocity.x = bird.velocity.x + bird.acceleration.x;

    bird.velocity.x = constrain(bird.velocity.x, bird.minVelocity.x, bird.maxVelocity.x);

    bird.x = bird.x + bird.velocity.x;

    // Draw the bird
    push();
    // To make the wings move
    bird.h = map(sin(bird.angle), -1, 1, 0, 10);
    // Stroke to see the point
    stroke("red");
    fill(bird.fill.r, bird.fill.g, bird.fill.b);
    triangle(bird.x - bird.w, bird.y - bird.h, bird.x - bird.w, bird.y + bird.h, bird.x + bird.w, bird.y)
    // Point at the centre of the triangle
    point(bird.x, bird.y);
    // Bird angle
    bird.angle += 0.06;
    pop();
}