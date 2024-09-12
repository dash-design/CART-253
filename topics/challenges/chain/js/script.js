/**
 * Chain Challenge
 * Ellie "DASH" Desjardins
 * 
 * Black chain on yellow background
 *
 */

"use strict";

/**
 * Setup of the project and create the canvas
*/
function setup() {
    createCanvas(800, 800);
}

/**
 * Sets background, draw chain
*/
function draw() {
    // Background
    background("yellow");

    // Chain
    drawChain();
}

/**
 * Draws chain
 */
function drawChain(){
    // Middle chain link
    push();
    strokeWeight(40);
    noFill();
    ellipse(400, 400, 200, 300);
    pop();

    // Up 1 chain link
    push();
    strokeWeight(40);
    noFill();
    ellipse(400, 200, 200, 300);
    pop();

    // Up 2 chain link
    push();
    strokeWeight(40);
    noFill();
    ellipse(400, 0, 200, 300);
    pop();

    // Down 1 chain link
    push();
    strokeWeight(40);
    noFill();
    ellipse(400, 600, 200, 300);
    pop();

    // Down 2 chain link
    push();
    strokeWeight(40);
    noFill();
    ellipse(400, 800, 200, 300);
    pop();

}