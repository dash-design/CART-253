/**
 * Title of Project
 * Ellie "DASH" Desjardins
 * 
 * Umbrella challenge
 *
 */

"use strict";

/**
 * Setup of the project and create canvas
*/
function setup() {
    //400x400 canvas
    createCanvas(400, 400);
}

/**
 * Sets background and setup umbrella
*/
function draw() {
    // The background
    background("red");

    // The umbrella
    drawUmbrella();
}

/**
 * Draws an umbrella
 */
function drawUmbrella() {
    // stick
    push();
    strokeweight(10);
    stroke(200, 200, 200, 300);
    pop();

    // handle
    push();
    noFill();
    stroke("yellow");
    strokeweight(10);
    arc(220, 300,40, 60, 0, PI);
    pop();

    //Umbrella
    push();
    pop();
}

// /**
//  * Draws OBJECT
// */
// function draw() {

// }