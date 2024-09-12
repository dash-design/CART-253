/**
 * drawing-practice
 * Ellie "DASH" Desjardins
 *
 * 
 * A drawing practice, where we are drawing a vinyl record
 * 
 * Credit to Pippin Barr for the original code
 * 
 * Uses:
 * p5.js
 * https://p5js.org/
 */

"use strict";

/**
 * Create a square canvas
*/
function setup() {
    // A blank square canvas
    createCanvas(640, 640);

}


/**
 * Create ellipses to represent a record
*/
function draw() {
    // A grey background
    background(150, 150, 150);

    // A circle (a vinyl record) in the centre of the canvas
    // First we PUSH to remember the previous settings
    push();
    // Then we change the settings for this shape (fill and stroke here)
    fill(200, 200, 0);
    stroke(255, 255, 255);
    // Then we draw the shape
    ellipse(320, 320, 480, 480);
    // Finally we POP to restore the original settings
    pop();

    // The label on the record
    push();
    fill(255, 255, 255);
    noStroke();
    ellipse(320, 320, 140, 140);
    pop();

    // The hole in the record
    push();
    fill(150, 150, 150);
    stroke(50, 50, 50);
    ellipse(320, 320, 20, 20);
    pop();

}