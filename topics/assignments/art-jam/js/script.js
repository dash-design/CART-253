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
        b: 153,
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
    // The sun colour at sunset
    fill: "#ffe5cc",

    // The sun colours as the day progress towards night
    fills: {
        sunrise: "#ffe5cc",
        earlyMorning: "#ffcc99",
        morning: "#ffb266",
        beforeNoon: "#ff9b3c",
        noon: "#ff8000",
        afterZenit: "#ff8d4d",
        afternoon: "#ff9d79",
        evening: "#ffbeb6",
        lateEvening: "#ffdce0",
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
    calcTime();
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
function calcTime() {
    const itIsSunrise = (mouseX < 80);
    const itIsEarlyMorning = (mouseX < 160);
    const itIsMorning = (mouseX < 240);
    const itIsBeforeNoon = (mouseX < 320);
    const itIsZenit = (mouseX < 340);
    const itIsNoon = (mouseX < 400);
    const itIsAfterZenit = (mouseX < 440);
    const itIsAfternoon = (mouseX < 480);
    const itIsEvening = (mouseX < 520);
    const itIsLateEvening = (mouseX < 560);

    if (itIsSunrise) {
        // Sun
        sun.fill = sun.fills.sunrise;
        // Sand
        sand.fill.r = 255;
        sand.fill.g = 255;
        sand.fill.b = 204;
        // Sky
        sky.fill.r = 204;
        sky.fill.g = 229;
        sky.fill.b = 255;
        // West side of pyramid
        pyramid.shiny.r = 255;
        pyramid.shiny.g = 244;
        pyramid.shiny.b = 204;
        // East side of pyramid
        pyramid.shadowy.r = 249;
        pyramid.shadowy.g = 235;
        pyramid.shadowy.b = 166;
    }
    else if (itIsEarlyMorning) {
        // Sun
        sun.fill = sun.fills.earlyMorning;
        // Sand
        sand.fill.r = 255;
        sand.fill.g = 255;
        sand.fill.b = 153;
        // Sky
        sky.fill.r = 154;
        sky.fill.g = 204;
        sky.fill.b = 255;
        // West side of pyramid
        pyramid.shiny.r = 248;
        pyramid.shiny.g = 230;
        pyramid.shiny.b = 173;
        // East side of pyramid
        pyramid.shadowy.r = 239;
        pyramid.shadowy.g = 211;
        pyramid.shadowy.b = 103;
    }
    else if (itIsMorning) {
        // Sun
        sun.fill = sun.fills.morning;
        // Sand
        sand.fill.r = 255;
        sand.fill.g = 255;
        sand.fill.b = 102;
        // Sky
        sky.fill.r = 102;
        sky.fill.g = 178;
        sky.fill.b = 255;
        // West side of pyramid
        pyramid.shiny.r = 240;
        pyramid.shiny.g = 218;
        pyramid.shiny.b = 141;
        // East side of pyramid
        pyramid.shadowy.r = 219;
        pyramid.shadowy.g = 183;
        pyramid.shadowy.b = 8;
    }
    else if (itIsBeforeNoon) {
        // Sun
        sun.fill = sun.fills.beforeNoon;
        // Sand
        sand.fill.r = 255;
        sand.fill.g = 255;
        sand.fill.b = 69;
        // Sky
        sky.fill.r = 60;
        sky.fill.g = 154;
        sky.fill.b = 255;
        // West side of pyramid
        pyramid.shiny.r = 233;
        pyramid.shiny.g = 205;
        pyramid.shiny.b = 105;
        // East side of pyramid
        pyramid.shadowy.r = 201;
        pyramid.shadowy.g = 158;
        pyramid.shadowy.b = 3;
    }
    else if (itIsZenit) {
        // Sun
        sun.fill = sun.fills.noon;
        // Sand
        sand.fill.r = 255;
        sand.fill.g = 255;
        sand.fill.b = 0;
        // Sky
        sky.fill.r = 0;
        sky.fill.g = 128;
        sky.fill.b = 255;
        // West side of pyramid
        pyramid.shiny.r = 228;
        pyramid.shiny.g = 194;
        pyramid.shiny.b = 59;
        // East side of pyramid
        pyramid.shadowy.r = 200;
        pyramid.shadowy.g = 166;
        pyramid.shadowy.b = 30;
    }
    else if (itIsNoon) {
        // Sun
        sun.fill = sun.fills.noon;
        // Sand
        sand.fill.r = 255;
        sand.fill.g = 255;
        sand.fill.b = 0;
        // Sky
        sky.fill.r = 0;
        sky.fill.g = 128;
        sky.fill.b = 255;
        // West side of pyramid
        pyramid.shiny.r = 193;
        pyramid.shiny.g = 169;
        pyramid.shiny.b = 56;
        // East side of pyramid
        pyramid.shadowy.r = 199;
        pyramid.shadowy.g = 173;
        pyramid.shadowy.b = 46;
    }
    else if (itIsAfterZenit) {
        // Sun
        sun.fill = sun.fills.afterZenit;
        // Sand
        sand.fill.r = 229;
        sand.fill.g = 229;
        sand.fill.b = 0;
        // Sky
        sky.fill.r = 0;
        sky.fill.g = 115;
        sky.fill.b = 229;
        // West side of pyramid
        pyramid.shiny.r = 160;
        pyramid.shiny.g = 145;
        pyramid.shiny.b = 54;
        // East side of pyramid
        pyramid.shadowy.r = 169;
        pyramid.shadowy.g = 153;
        pyramid.shadowy.b = 61;
    }
    else if (itIsAfternoon) {
        // Sun
        sun.fill = sun.fills.afternoon;
        // Sand
        sand.fill.r = 204;
        sand.fill.g = 204;
        sand.fill.b = 0;
        // Sky
        sky.fill.r = 0;
        sky.fill.g = 102;
        sky.fill.b = 204;
        // West side of pyramid
        pyramid.shiny.r = 129;
        pyramid.shiny.g = 120;
        pyramid.shiny.b = 50;
        // East side of pyramid
        pyramid.shadowy.r = 141;
        pyramid.shadowy.g = 131;
        pyramid.shadowy.b = 68;
    }
    else if (itIsEvening) {
        // Sun
        sun.fill = sun.fills.evening;
        // Sand
        sand.fill.r = 153;
        sand.fill.g = 153;
        sand.fill.b = 0;
        // Sky
        sky.fill.r = 0;
        sky.fill.g = 76;
        sky.fill.b = 153;
        // West side of pyramid
        pyramid.shiny.r = 101;
        pyramid.shiny.g = 96;
        pyramid.shiny.b = 44;
        // East side of pyramid
        pyramid.shadowy.r = 124;
        pyramid.shadowy.g = 120;
        pyramid.shadowy.b = 75;
    }
    else if (itIsLateEvening) {
        // Sun
        sun.fill = sun.fills.lateEvening;
        // Sand
        sand.fill.r = 102;
        sand.fill.g = 102;
        sand.fill.b = 0;
        // Sky
        sky.fill.r = 0;
        sky.fill.g = 51;
        sky.fill.b = 102;
        // West side of pyramid
        pyramid.shiny.r = 76;
        pyramid.shiny.g = 74;
        pyramid.shiny.b = 38;
        // East side of pyramid
        pyramid.shadowy.r = 113;
        pyramid.shadowy.g = 110;
        pyramid.shadowy.b = 81;
    }
    else {
        // Sun
        sun.fill = sun.fills.night;
        // Sand
        sand.fill.r = 64;
        sand.fill.g = 64;
        sand.fill.b = 64;
        // Sky
        sky.fill.r = 0;
        sky.fill.g = 0;
        sky.fill.b = 0;
        // West side of pyramid
        pyramid.shiny.r = 32;
        pyramid.shiny.g = 32;
        pyramid.shiny.b = 32;
        // East side of pyramid
        pyramid.shadowy.r = 96;
        pyramid.shadowy.g = 96;
        pyramid.shadowy.b = 96;
    }
}

// Draws the sun that will
function drawSun() {
    // Remap mouseX
    let x = mouseX

    // Makes the sun move along a curve
    // Used ChatGPT to write those two lines, due to ChatGPT limitations I changed the equation from "width" to "width / 3" to try to obtain the curve I want
    // Needs to find better way probably
    let curveAmplitude = 100;
    let y = sun.y - curveAmplitude * sin(map(mouseX, 0, width, 0, PI));

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