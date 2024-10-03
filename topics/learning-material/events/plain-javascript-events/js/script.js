/**
 * Plain JavaScript Events
 * Ellie "DASH" Desjardins
 * 
 * Experimenting with events handling in plain JavaScript
 *
 */

"use strict";

const bg = {
    fill: "#000000",
    fills: {
        black: "#000000",
        white: "#fffff"
    },
    switchKey: 32 // Spacebar
};

/**
 * Creates the canvas
*/
function setup() {
    createCanvas(400, 400);

    // Listen to keypresses
    window.addEventListener("keydown", changeBG);
}


/**
 * Displays the background
*/
function draw() {
    background(bg.fill);
}


// Switches the background from black to white
function changeBG(event) {
    if (event.keyCode === bg.switchKey) {
        if (bg.fill === bg.fills.black) {
            bg.fill = bg.fills.white;
        }
        else {
            bg.fill = bg.fills.black;
        }
    }

}

