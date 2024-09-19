/**
 * Creating variables
 * Ellie "DASH" Desjardins
 * 
 * Exercise about the creation of variables for CART 253 classe
 *
 */

"use strict";

//Variables
let cheeseRed = 255;
let cheeseGreen = 255;
let cheeseBlue = 0;

let holeShade = 0;

let holeX = 140;
let holeY = 175;
let holeSize = 180;

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
    background(cheeseRed, cheeseGreen, cheeseBlue);

    //The hole
    push();
    noStroke();
    fill(holeShade);
    ellipse(holeX, holeY, holeSize);
    pop();
}