/**
 * Smiley Challenge
 * Ellie "DASH" Desjardins
 * 
 * A classic black smiley on a yellow background
 *
 */

"use strict";

/**
 * Setup of the project
*/
function setup() {
    createCanvas(800, 800);
    background("yellow")
}


/**
 * Draws smiley
*/
function draw() {
    //Face contour
    push();
    strokeWeight(20);
    noFill();
    ellipse(400, 400, 600);
    pop();

    // Eye left
    push();
    noStroke();
    fill("#000000");
    ellipse(300, 300, 100, 200);
    pop();

    // Eye right
    push();
    noStroke();
    fill("#000000");
    ellipse(500, 300, 100, 200);
    pop();

    // Smile
    push();
    strokeWeight(20);
    noFill();
    arc(400, 400, 400, 400, 0, PI);
    pop();
}