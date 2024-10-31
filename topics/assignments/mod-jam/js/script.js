/**
 * Froggy McFrogFace
 * 
 * Ellie "DASH" Desjardins
 * 
 * A game where you, Froggy McFrogFace, try to catch flies with your tongue.
 * 
 * Be careful, the more flies you catch, the faster they become!
 * 
 * If too many flies escape you will starve and lose!
 * 
 * Instructions:
 * - Move the frog with your mouse
 * - Click on the flies to catch them
 * 
 * 
 * Made with p5
 * https://p5js.org/
 * 
 */

"use strict";

let pixelFont;

let froggy;

function preload() {
    pixelFont = loadFont('../assets/fonts/slkscr.ttf');
    froggy = loadImage('../assets/images/froggy.png');
}

// Our frog
const frog = {
    // The frog's body has a position and size
    body: {
        x: 320,
        y: 460,
        // size: 150
    },
    // The frog's tongue has a position, size, speed, and state
    tongue: {
        x: undefined,
        y: 480,
        size: 20,
        speed: 20,
        // Determines how the tongue moves each frame
        state: "idle" // State can be: idle, outbound, inbound
    }
};

// Our fly
// Has a position, size, and speed of horizontal movement
const fly = {
    x: 0,
    y: 200, // Will be random
    size: 20,
    speed: 3
};

// Colour of the sky
let sky = "#87ceeb";

// The current score
let score = 0;

// The high score to be displayed
let highScore;

const maxLives = 5;

// The current number of lives
let lives = maxLives;

// The current state
let state = "start"; // Can be "title" or "game"

let starting = {
    rectFill: "green",
    textFill: 255,
    textSize: 28,
    text: undefined
}

let ending = {
    rectFill: 32,
    textFill: 220,
    textSize: 32,
    text: undefined

}

/**
 * Creates the canvas and initializes the fly
 */
function setup() {
    createCanvas(640, 480);

    // Give the fly its first random position
    resetFly();

    // Retrieve the last saved highscore
    highScore = getItem('high score');

    if (highScore === null) {
        highScore = 0;
    }
}

function draw() {
    // Defines states
    if (state === "start") {
        background(sky);
        starting.text = `
Welcome to
FROGGY McFROGFACE: The Game
    
Catch the fly by clicking on it
Do not let the fly escape!
    
High score: ${highScore}
    
Click to play`;
        menu(starting.rectFill, starting.textFill, starting.textSize, starting.text);
    }
    else if (state === "game") {
        game();
        cursor(CROSS);

    }
    else if (state === "end") {
        ending.text = `
Game over!

Score: ${score}
High score: ${highScore}

Click to try again`;
        menu(ending.rectFill, ending.textFill, ending.textSize, ending.text);
        cursor();
        // Store the latest high score
        highScore = max(score, highScore);
        storeItem('high score', highScore);
    }
}

/**
 * Title screen
 */
function menu(squareFill, textFill, fontSize, textContent) {
    // Screen appearance
    push();
    noStroke();
    fill(squareFill);
    rectMode(CENTER);
    rect(width / 2, height / 2, width - 50, height - 50);
    pop();
    // Text parameters
    push();
    textFont(pixelFont);
    fill(textFill);
    textSize(fontSize);
    textAlign(CENTER, CENTER);
    text(textContent, width / 2, height / 2);
    pop();
}

/**
 * The actual game elements
 */
function game() {
    background(sky);
    moveFly();
    moveFrog();
    moveTongue();
    drawFly();
    drawFrog();
    drawScore();
    drawLife();
    checkTongueFlyOverlap();
    checkIfEndGame();
}

/**
 * Moves the fly according to its speed
 * Resets the fly if it gets all the way to the right
 */
function moveFly() {
    // Move the fly
    fly.x += fly.speed;
    // Handle the fly going off the canvas
    if (fly.x > width) {
        resetFly();
        frog.tongue.state = "inbound";
        lives = lives - 1;
    }
}

/**
 * Moves the frog to the mouse position on x
 */
function moveFrog() {
    frog.body.x = mouseX;
}

/**
 * Handles moving the tongue based on its state
 */
function moveTongue() {
    // Tongue matches the frog's x
    frog.tongue.x = frog.body.x;
    // If the tongue is idle, it doesn't do anything
    if (frog.tongue.state === "idle") {
        // Do nothing
    }
    else if (frog.tongue.state === "catch") {
        frog.tongue.y += -frog.tongue.speed;
        frog.tongue.x = fly.x;

    }
    // If the tongue is outbound, it moves up
    else if (frog.tongue.state === "outbound") {
        frog.tongue.y += -frog.tongue.speed;
        // The tongue bounces back if it hits the top
        if (frog.tongue.y <= 0) {
            frog.tongue.state = "inbound";
        }
    }
    // If the tongue is inbound, it moves down
    else if (frog.tongue.state === "inbound") {
        frog.tongue.y += frog.tongue.speed;
        // The tongue stops if it hits the bottom
        if (frog.tongue.y >= height) {
            frog.tongue.state = "idle";
        }
    }
}

/**
 * Draws the fly as a black circle
 */
function drawFly() {
    push();
    noStroke();
    fill("#000000");
    ellipse(fly.x, fly.y, fly.size);
    pop();
}

/**
 * Resets the fly to the left with a random y
 */
function resetFly() {
    fly.x = 0;
    fly.y = random(0, 300);
}

/**
 * Displays the tongue (tip and line connection) and the frog (body)
 */
function drawFrog() {
    // Draw the tongue tip
    push();
    fill("#ff0000");
    noStroke();
    ellipse(frog.tongue.x, frog.tongue.y, frog.tongue.size);
    pop();

    // Draw the rest of the tongue
    push();
    stroke("#ff0000");
    strokeWeight(frog.tongue.size);
    line(frog.tongue.x, frog.tongue.y, frog.body.x, frog.body.y);
    pop();

    // Draw the frog's body
    push();
    fill("#00ff00");
    noStroke();
    imageMode(CENTER); // the image is gonna be centered on the frog x and y
    image(froggy, frog.body.x, frog.body.y);
    // ellipse(frog.body.x, frog.body.y, frog.body.size);
    pop();
}

/**
 * Displays the score on the top right corner
 */
function drawScore() {
    push();
    textAlign(RIGHT, TOP);
    textSize(36);
    textStyle(BOLD);
    fill("#fff000");
    text(score, width - 20, 20);
    pop();
}

/**
 * Display the number of lives in the bottom right corner
 */
function drawLife() {
    push();
    textAlign(RIGHT, BOTTOM);
    textSize(28);
    textStyle(BOLD);
    fill("red");
    text("♥️".repeat(lives), width - 20, height - 20);
    pop();
}

/**
 * Handles the tongue overlapping the fly
 */
function checkTongueFlyOverlap() {
    // Get distance from tongue to fly
    const d = dist(frog.tongue.x, frog.tongue.y, fly.x, fly.y);
    // Check if it's an overlap
    const eaten = (d < frog.tongue.size / 2 + fly.size / 2);
    if (eaten && frog.tongue.state === "catch") {
        // Increase the score
        score = score + 1; // score += 1;
        // Reset the fly
        resetFly();
        // Bring back the tongue
        frog.tongue.state = "inbound";
        // Increase the speed of the fly according to the score
        if (score % 5 === 0) {
            fly.speed = fly.speed + 1
        }
    }
}

function checkIfEndGame() {
    if (state === "game" && lives === 0) {
        state = "end"
    }
}

/**
 * Launch the tongue on click (if it's not launched yet)
 */
function mousePressed() {
    if (state === "start") {
        state = "game";
    }
    else if (state === "game") {
        if (frog.tongue.state === "idle") {
            const mouseOnFly = dist(mouseX, mouseY, fly.x, fly.y);
            const eaten = (mouseOnFly < fly.size)
            if (eaten) {
                frog.tongue.state = "catch"
            }
            else {
                frog.tongue.state = "outbound";
            }
        }
    }
    else if (state === "end") {
        state = "game";
        lives = maxLives;
        score = 0;
    };
}