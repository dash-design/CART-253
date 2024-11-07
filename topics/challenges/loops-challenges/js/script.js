/**
 * Lines
 * Pippin Barr
 * 
 * A series of lines across the canvas
 */

"use strict";

/**
 * Creates the canvas
 */
function setup() {
    createCanvas(500, 500);

    colorMode(HSB);
}

/**
 * Draws lines across the canvas with increasing thickness and
 * gradually lightening colour
 */
function draw() {
    background("green");

    drawGradient();

    drawLinesV();
    drawLinesH();
}

function drawGradient() {
    // let shade = 0;

    for (let z = 0; z <= height; z += 2) {
        let hue = map(z, 0, height, 0, 360);
        strokeWeight(0.75);
        stroke(hue, 100, 100);
        line(0, z, width, z);
        // shade += 1;
    }

    // for (let v = 0; v <= width; v += 2) {
    //     let hue = map(z, 0, height, 0, 360);
    //     strokeWeight(0.75);
    //     stroke(hue, 100, 100);
    //     line(v, 0, v, height);
    //     // shade += 1;
    // }

}

function drawLinesV() {
    let strokeColour = 0;
    let sWeight = 1;
    let x = 0;

    while (x <= width) {
        stroke(strokeColour);
        strokeWeight(sWeight);
        line(x, 0, x, height);

        x += 50;
        sWeight += 1;
        strokeColour += 25;
    }
}

function drawLinesH() {
    let strokeColour = 0;
    let sWeight = 1;
    let y = 0;

    while (y <= height) {
        stroke(strokeColour);
        strokeWeight(sWeight);
        line(0, y, width, y);

        y += 50;
        sWeight += 1;
        strokeColour += 25;
    }

}
