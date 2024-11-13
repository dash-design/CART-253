/**
 * Tarot
 * Pippin Barr
 * 
 * Some experiments with data representing a Tarot deck
 */

"use strict";

// tarot data
let tarot = undefined;

let fortune = "Click to show a fortune.";

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

    // const fool = tarot.tarot_interpretations[0].meanings.shadow[0];

    // displays the information
    push();
    textSize(16);
    fill("yellow");
    textAlign(CENTER, CENTER);
    text(fortune, width / 2, height / 2);
    pop();
}

function mousePressed() {
    // Choose a random card
    const card = random(tarot.tarot_interpretations);
    // Choose a random fortune
    fortune = random(card.fortune_telling);
}