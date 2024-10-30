/**
 * Speech! Speech!
 * Ellie "DASH" Desjardins
 * 
 * Interactice speech-playing interface
 *
 */

"use strict";

// The speech itself
const speech = ["Veni.", "Vidi.", "Vici.", "Sensi malum."];
// Which element of the speech to display
let speechIndex = 0;

/**
 * Creates canvas
*/
function setup() {
    createCanvas(600, 100);

}

/**
 * Displays the current element of the speech
*/
function draw() {
    background(0);

    // Gets the current element of the speech
    let currentElement = speech[speechIndex];

    // Displays the element
    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    text(currentElement, width / 2, height / 2);
    pop();
}

// Changes to the next element on mouse click
function mousePressed() {
    // Next line
    speechIndex = speechIndex + 1;
    // Handles th end of the speech
    if (speechIndex >= speech.length) {
        speechIndex = 0;
    }
}