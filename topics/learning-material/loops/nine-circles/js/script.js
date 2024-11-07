/**
 * Nine circles
 * Pippin Barr
 * 
 * Draws a series of circles from the top to the bottom of the canvas.
 * Arguably not in the most efficient way.
 */

"use strict";

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

/**
 * Draw circles from the top to the bottom of the canvas
 */
function draw() {
    background(0);

    let x = 200;
    // let y = 0;
    let diameter = 50;

    let numberCircles = map(mouseY, 0, height, 0, 13);

    // for (let i = 0; i < numberCircles; i++) {
    //     const y = diameter * i;

    //     ellipse(x, y, diameter);
    //     // y += diameter;
    // }

    let i = 0;
    while (i < numberCircles) {
        const y = diameter * i;
        ellipse(x, y, diameter);
        i++;
    }

}