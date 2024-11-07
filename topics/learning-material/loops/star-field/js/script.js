/**
 * Star-Field
 * Ellie "DASH" Desjardins
 * 
 * Description of the project
 *
 */

"use strict";

const numberStars = 100;

/**
 * Setup of the project
*/
function setup() {
    createCanvas(800, 400);

}


/**
 * Draws OBJECT
*/
function draw() {
    background(0);

    randomSeed(2);
    for (let i = 0; i < numberStars; i++) {
        drawStar();
    }

}

function drawStar() {
    const x = random(0, width);
    const y = random(0, height);
    const diameter = random(2, 5);

    push();
    fill(255);
    noStroke;
    ellipse(x, y, diameter);
    pop();
}
