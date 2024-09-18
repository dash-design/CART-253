/**
 * Creating variables
 * Ellie "DASH" Desjardins
 * 
 * Exercise about the creation of variables for CART 253 classe
 *
 */

"use strict";

/**
 * Creates canvas
*/
function setup() {
    createCanvas(480, 480);
}


/**
 * Draws a hole in a piece of cheese
*/
function draw() {
    //The cheese
    background(255, 255, 0);

    //The hole
    push();
    noStroke();
    fill(0);
    ellipse(140, 175, 180);
    pop();
}