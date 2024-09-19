/**
 * Introducing variables
 * Ellie "DASH" Desjardins
 * 
 * An introduction to variables as part of CART 253 classe
 *
 */

"use strict";

/**
 * Creates a canvas
*/
function setup() {
    createCanvas(800, 480);
}


/**
 * Draws circles in the centre of the canvas
*/
function draw() {
    background(0);

    //Draws the circle in the middle of the canvas that changes colour according to the mouse position
    push();
    fill(mouseX, mouseY, 0);
    noStroke();
    ellipse(width / 2, height / 2, 100, 100);
    pop();

    //Draws the cyan circle according to the position of the mouse
    push();
    fill(0, 255, 255);
    noStroke();
    ellipse(mouseX, mouseY, 100, 100);
    pop();

    //Draws the magenta circle opposite to the position of the mouse
    push();
    fill(255, 0, 255);
    noStroke();
    ellipse(mouseY, mouseX, 100, 100);
    pop();

    //Draws the white ellipse in the middle of the canvas that changes size according to mouse position
    push();
    noFill();
    stroke(255, 255, 255);
    strokeWeight(10);
    ellipse(width / 2, height / 2, mouseY, mouseX);
    pop();

}