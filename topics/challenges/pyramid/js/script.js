/**
 * Pyramid challenge
 * Ellie "DASH" Desjardins
 * 
 * A pyramid with sand dunes in the background
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
 * Sets background, draw pyramid, draw dunes
*/
function draw() {
    // Background
    background("lightblue");

    // Dunes
    drawDunes();

    // Pyramid
    drawPyramid();
}

/**
 * Draws sand dunes
 */
function drawDunes() {
    // Ground
    push();
    noStroke();
    fill("yellow");
    rect(0, 500, 800, 300);
    pop();

    // Small bump
    push();
    noStroke();
    fill("yellow");
    ellipse(0, 800, 1000);
    pop();

    // Big bump
    push();
    noStroke();
    fill("yellow");
    ellipse(400, 1250, 1750);
    pop();
}

/**
 * Draws pyramid
 */
function drawPyramid() {
    // Shadow side
    push();
    noStroke();
    fill(300, 204, 0);
    triangle(200, 500, 400, 550, 350, 300);
    pop();

    // Illuminated side
    push();
    noStroke();
    fill("DarkGoldenRod");
    triangle(400, 550, 500, 450, 350, 300);
    pop();
}


