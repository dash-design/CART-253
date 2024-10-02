/**
 * Introducing events
 * Ellie "DASH" Desjardins
 * 
 * An introduction to events in JavaScript and p5
 *
 */

"use strict";

/**
 * Setup of the project
*/
function setup() {
    createCanvas(400, 400);
    background(0);
}


/**
 * Draws OBJECT
*/
function draw() {

}

// Draw circle at mouse location
function mousePressed() {
    push();
    noStroke();
    fill(255, 255, 0);
    ellipse(mouseX, mouseY, 50);
    pop();
}