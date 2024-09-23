/**
 * Art Jam
 * Ellie "DASH" Desjardins
 * 
 * Description of the project
 *
 */

"use strict";

// The sky that changes colour according to time of day (sun's position)
let sky = {

};
// The sand dunes that change colour according to timeOfDay
let sand = {

};
// The pyramid that changes shade according to timeOfDay
let pyramid = {

};
// The sun that moves according to mouse position
let sun = {

};
// The pyramid shadow that changes according to timeOfDay
let shadow = {

};

/**
 * Setup of the project
*/
function setup() {
    createCanvas(640, 640);
    // Sky colour
    background(0, 0, 100);

    drawSandDunes();
    drawPyramid();
}

// Variables to change something (movement, scale, colour, etc.)
// Sun position = changes colour of sky, pyramid, sand dunes, and size and shade of pyramid' shadow

// Use "mouseX" & "mouseY" to allow user interaction/input
// MouseX = Sun position = timeOfDay

// Use "map()"
// MouseX moves sun in the sky = timeOfDay

// Use min. one conditional
// If mouseX at < 1/2 of canvas = morning, then bright colours. else mouseX at > 1/2 canvas = evening/night, then dark colours


/**
 * Draws OBJECT
*/
function draw() {

}

// Draws sand dunes
function drawSandDunes() {
    push();
    noStroke();
    fill(255, 255, 0);
    // Starts the sand dunes shape
    beginShape();
    // SHape vertices
    vertex(640, 425)
    vertex(640, 640)
    vertex(0, 640)
    vertex(0, 300)
    bezierVertex(75, 275, 250, 300, 300, 350)
    bezierVertex(350, 335, 540, 350, 640, 425)
    // Ends the sand dunes shape
    endShape(CLOSE);
    pop();
}

// Draws the pyramid
function drawPyramid() {
    // Illuminated side
    push();
    noStroke();
    fill(255, 204, 0);
    triangle(200, 425, 400, 475, 340, 235);
    pop();
    // Shadow side
    push();
    noStroke();
    fill(235, 204, 0);
    triangle(400, 475, 500, 400, 340, 235);
    pop();
}