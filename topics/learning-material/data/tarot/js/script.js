/**
 * Tarot
 * Pippin Barr
 * 
 * Some experiments with data representing a Tarot deck
 */

"use strict";

// tarot data
let tarot;

/**
 * Load tarot
 */
function preload() {
    tarot = loadJSON("assets/data/tarot_interpretations.json");
}

/**
 * creates canvas
*/
function setup() {
    createCanvas(800, 400);

}

/**
 * displays tarot
*/
function draw() {
    background(0);

    // const description = tarot.description;

    // // displays the information
    // push();
    // textSize(16);
    // fill("yellow");
    // textALign(CENTER, CENTER);
    // text(description, width / 2, height / 2);
    // pop();
}