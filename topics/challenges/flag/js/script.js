/**
 * Flag challenge
 * Ellie "DASH" Desjardins
 * 
 * Flag challenge for CART 253 week 2
 *
 */

"use strict";

/**
 * Setup of the canvas and background
*/
function setup() {
    createCanvas(800, 800);
    background("green");

}

/**
 * Draws Flag
*/
function draw() {
    drawFlagUp();
    drawFlagDown();
}

function drawFlagUp(){
    push();
	noStroke();
	fill("blue");
	rect(200, 225, 400, 150);
	pop();
}

function drawFlagDown(){
    push();
	noStroke();
	fill("yellow");
	rect(200, 375, 400, 150);
	pop();
}