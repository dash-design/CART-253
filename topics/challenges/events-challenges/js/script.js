/**
 * The Only Move Is Not To Play
 * Pippin Barr
 *
 * A game where your score increases so long as you do nothing.
 */

"use strict";

// Current score
let score = 0;

// Is the game over?
let gameOver = false;

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
    // Challenge 1 in plain JavaScript
    document.addEventListener("keydown", endGame);
    document.addEventListener("keyup", endGame);
    // Challenge 2 in plain JavaScript
    document.addEventListener("mousedown", endGame);
    document.addEventListener("mouseup", endGame);
    document.addEventListener("mousemove", endGame);
    document.addEventListener("wheel", endGame);
    // Challenge 3 in plain JavaScript
    // window. instead of document.
    window.addEventListener("online", endGame);
    window.addEventListener("offline", endGame);
    // Challenge 4 in plain JavaScript
    window.addEventListener("visibilitychange", endGame);
}

/**
 * Update the score and display the UI
 */
function draw() {
    background("#87ceeb");

    // Only increase the score if the game is not over
    if (!gameOver) {
        // Score increases relatively slowly
        score += 0.05;
    }
    displayUI();
}

/**
 * Show the game over message if needed, and the current score
 */
function displayUI() {
    if (gameOver) {
        push();
        textSize(48);
        textStyle(BOLD);
        textAlign(CENTER, CENTER);
        text("You lose!", width / 2, height / 3);
        pop();
    }
    displayScore();
}

/**
 * Display the score
 */
function displayScore() {
    push();
    textSize(48);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text(floor(score), width / 2, height / 2);
    pop();
}

// Challenge 1, attempt 1
// Can be handled by event listener in the setup
// function keyPressed(event) {
//     endGame();
// }

// function keyReleased(event) {
//     endGame();
// }

// // Challenge 2, different options
// function mousePressed(event) {
//     endGame();
// }

// function mouseReleased(event) {
//     endGame();
// }

// function mouseMoved(event) {
//     endGame();
// }

function endGame() {
    gameOver = true
}
