/**
 * Terrible New Car
 * Pippin Barr
 * 
 * A program to generate new car model names using dinosaurs.
 * 
 * Uses:
 * Darius Kazemi's corpora repository
 * https://github.com/dariusk/corpora/tree/master
 */

"use strict";

let honorificsData = undefined;
let lovecraftData = undefined;
let langData = undefined;
let lang = "fr";

let titledDeity = "Click to meet a distinguished gentleman";

/**
 * Load the car and dinosaur data
 */
function preload() {
    honorificsData = loadJSON("assets/data/englishHonorifics.json");
    lovecraftData = loadJSON("assets/data/lovecraft.json");
    langData = loadJSON("assets/data/lang.json");
}

/**
 * Create the canvas
*/
function setup() {
    createCanvas(600, 400);
}

/**
 * Display the current main text (either instructions or a car)
*/
function draw() {
    background(0);

    push();
    fill("green");
    textAlign(CENTER, CENTER);
    textSize(32);
    text(titledDeity, width / 2, height / 2);
    pop();
}

/**
 * Generate a new car name
 */
function mousePressed() {
    // Pick a random honorific
    const honorific = random(honorificsData.englishHonorifics);
    // Pick a random deity
    const deity = random(lovecraftData.deities);
    // Join them together
    titledDeity = honorific + "\n" + deity;
    // Convert to upper case
    // titledDeity = titledDeity.toUpperCase();
    // Replace all the spaces with \n to make each word go on a new line
    // titledDeity = titledDeity.replace(" ", "\n");

}
