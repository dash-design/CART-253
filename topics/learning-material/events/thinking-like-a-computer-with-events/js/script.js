/**
 * Thinking like a computer with events
 * Pippin Barr
 * 
 * A small project for exploring how events work!
*/

"use strict";

/**
 * Create the canvas
*/
function setup() {
    createCanvas(500, 500);
    // function mousePressed is actually this, handled in the background by p5
    // document.addEventListener("mousedown", mousePressed);
    frameRate(1);
}

/**
 * Draw a rectangle
*/
function draw() {
    push();
    noStroke();
    fill("#87ceeb");
    rectMode(CENTER);
    rect(width / 2, height / 2, 200);
    pop();
}



/**
 * Fill the background on click
 */
function mousePressed() {
    background("pink");
}