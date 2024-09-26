/**
 * Art Jam
 * Ellie "DASH" Desjardins
 * 
 * Description of the project
 *
 */

"use strict";

// The sky that changes colour according to time of day (sun's position)
const sky = {
    fill: {
        r: 0,
        g: 128,
        b: 255,
    }
};
// The sand dunes that change colour according to timeOfDay
const sand = {
    fill: {
        r: 255,
        g: 255,
        b: 51,
    }
};
// The pyramid that changes shade according to timeOfDay
const pyramid = {
    // Position of the pyramid
    // North vertex
    north: {
        x: 340,
        y: 235
    },
    // East vertex
    east: {
        x: 500,
        y: 400
    },
    // South vertex
    south: {
        x: 400,
        y: 475
    },
    // West vertex
    west: {
        x: 200,
        y: 425
    },
    // Colour of the pyramid
    shiny: {
        r: 300,
        g: 204,
        b: 0
    },
    shadowy: {
        r: 184,
        g: 134,
        b: 11
    }
};
// The sun that moves according to mouse position
const sun = {
    x: 320,
    y: 200,
    size: 75,
    // The sun colour in the morning
    fill: "#ffc14f",

    // The sun colours as the day progress towards night
    fills: {
        morning: "#ffa42b",
        noon: "#ff8400",
        afternoon: "#e39871",
        evening: "#e3cbc6",
        night: "#ffffff",
    }
};

/**
 * Setup of the project
*/
function setup() {
    createCanvas(640, 640);
}

// Variables to change something (movement, scale, colour, etc.)
// Sun position = changes colour of sky, pyramid, sand dunes, and size and shade of pyramid' shadow

// Use "mouseX" & "mouseY" to allow user interaction/input
// MouseX = Sun position = timeOfDay

// Use "map()"
// MouseX moves sun in the sky = timeOfDay

// Use min. one conditional
// If mouseX at < 1/2 of canvas = morning, then bright colours. else mouseX at > 1/2 canvas = evening/night, then dark colours


/**
 * Draws OBJECT
*/
function draw() {
    // Sky colour
    background(sky.fill.r, sky.fill.g, sky.fill.b);

    drawSandDunes();
    drawPyramid();
    drawSun();
}

// function checkInput() {
//     if (mouseX >= width / 5) {
//         sun.fill = sun.fills.morning;
//     }
//     else if (mouseX >= width / 4) {
//         sun.fill = sun.fills.noon;
//     }
//     else {
//         sun.fill = sun.fills.afternoon;
//     }
// }

// Draws the sun that will
function drawSun() {
    // Remap mouseX
    let x = map(mouseX, 0, width, 0, width)

    // Makes the sun move along a curve
    // Used ChatGPT to write those two lines, due to ChatGPT limitations I changed the equation from "width" to "width / 3" to try to obtain the curve I want
    // Needs to find better way probably
    let curveAmplitude = 100;
    let y = sun.y - curveAmplitude * sin(map(mouseX, 0, width, 0, PI));

    // const itIsMorning = (mouseX > 80 && moveX < 240);
    // const itIsNoon = (mouseX > 240 && moveX < 400);
    // const itIsAfternoon = (mouseX > 400 && moveX < 560);
    // const itIsNight = (mouseX > 560);

    if (mouseX < 80) {
        sun.fill = sun.fill;
    }
    else if (mouseX < 240) {
        sun.fill = sun.fills.morning;
    }
    else if (mouseX < 400) {
        sun.fill = sun.fills.noon;
    }
    else if (mouseX < 480) {
        sun.fill = sun.fills.afternoon;
    }
    else if (mouseX < 560) {
        sun.fill = sun.fills.evening;
    }
    else {
        sun.fill = sun.fills.night;
    }

    push();
    noStroke();
    fill(sun.fill)
    circle(x, y, sun.size)
    pop();
}

// Draws sand dunes
function drawSandDunes() {
    push();
    noStroke();
    fill(sand.fill.r, sand.fill.g, sand.fill.b);
    // Starts the sand dunes shape
    beginShape();
    // Shape vertices
    vertex(640, 425)
    vertex(640, 640)
    vertex(0, 640)
    vertex(0, 300)
    bezierVertex(75, 275, 250, 300, 300, 350)
    bezierVertex(350, 335, 540, 350, 640, 425)
    // Ends the sand dunes shape
    endShape(CLOSE);
    pop();
}

// Draws the pyramid
function drawPyramid() {
    // Background of the pyramid
    push();
    noStroke();
    fill(pyramid.shiny.r, pyramid.shiny.g, pyramid.shiny.b);
    beginShape();
    vertex(pyramid.north.x, pyramid.north.y);
    vertex(pyramid.east.x, pyramid.east.y);
    vertex(pyramid.south.x, pyramid.south.y);
    vertex(pyramid.west.x, pyramid.west.y);
    vertex(pyramid.north.x, pyramid.north.y);
    endShape();
    pop();
    // Shadow side of the pyramid

    push();
    noStroke();
    fill(pyramid.shadowy.r, pyramid.shadowy.g, pyramid.shadowy.b);
    triangle(400, 475, 500, 400, 340, 235);
    pop();
}