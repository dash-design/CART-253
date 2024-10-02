/**
 * Time and JavaScript and p5
 * Ellie "DASH" Desjardins
 * 
 * Description of the project
 *
 */

"use strict";
// // Basic of JavaScript
// let x = 10;
// let y = 11;
// let z = x * y;
// But then you add more complex ideas, like constant
const ball = {
    x: 0,
    y: 200,
    size: 50
};
// Then setup the project
/**
 * Setup of the project
*/
function setup() {
    // Often starts with the canvas here
    createCanvas(400, 400);
}

// Then the draw function
/**
 * Draws OBJECT
*/
function draw() {
    // The colour of the background
    background(0);
    // Drawing the ball
    // Starting from its position
    ball.x += 1;

    // Push first
    push();
    noStroke();
    ellipse(ball.x, ball.y, ball.size);
    // And pop at the end
    pop();
}