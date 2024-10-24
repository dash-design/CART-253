/**
 * Bouncy Ball Ball Bonanza
 * Pippin Barr
 * 
 * The starting point for a ball-bouncing experience of
 * epic proportions!
 */

"use strict";

// Our ball
const ball = {
    x: 300,
    y: 20,
    fill: "red",
    width: 10,
    height: 10,
    velocity: {
        x: 0,
        y: 5
    }
};

// Our paddle
const paddle = {
    x: 300,
    y: 280,
    fill: "black",
    width: 80,
    height: 10
};

// The gravity
const gravity = 0.1;

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 300);

    // frameRate(20);
}


/**
 * Move and display the ball and paddle
*/
function draw() {
    background("#87ceeb");

    movePaddle(paddle);
    moveBall(ball);

    handleBounce(ball, paddle);

    drawBlock(paddle);
    drawBlock(ball);
}

/**
 * Moves the paddle
 */
function movePaddle(paddle) {
    paddle.x = mouseX; // Remember this
}

/**
 * Moves the ball
 */
function moveBall(ball) {
    ball.velocity.y = ball.velocity.y + gravity; // Gravity

    ball.y = ball.y + ball.velocity.y; // Velocity formula to remember

}

function handleBounce(ball, paddle) {
    const overlap = centeredRectanglesOverlap(ball, paddle);
    if (overlap) {
        ball.y = paddle.y - paddle.height / 2 - ball.width / 2;
        // ball.velocity.y *= -1;
        ball.velocity.y = -ball.velocity.y; // Same thing as the one above

    }

}

/**
 * Returns true if a and b overlap, and false otherwise
 * Assumes a and b have properties x, y, width and height to describe
 * their rectangles, and that a and b are displayed centred on their
 * x,y coordinates.
 */
function centeredRectanglesOverlap(a, b) {
    return (a.x + a.width / 2 > b.x - b.width / 2 &&
        a.x - a.width / 2 < b.x + b.width / 2 &&
        a.y + a.height / 2 > b.y - b.height / 2 &&
        a.y - a.height / 2 < b.y + b.height / 2);
}


/**
 *  Draws the game blocks
 */
function drawBlock(block) {
    push();
    rectMode(CENTER);
    noStroke();
    fill(block.fill);
    rect(block.x, block.y, block.width, block.height);
    pop();
}