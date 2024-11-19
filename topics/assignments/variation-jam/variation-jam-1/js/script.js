/**
 * Title of Project
 * Ellie "DASH" Desjardins
 * 
 * A primitive grid-based program that you can move around in and
 * collect the letter c, and where the W serves as a wall
 *
 */

"use strict";

let grid = [
    ["W", "W", "W", "W", "W", "W", " ", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", "N", "N", "N", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", "N", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "D", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],

];

// How many rows and columns in the grid?
const rows = 10;
const cols = 13;
// The unit size (how big a square for each tile)
let unit = 64;

// The font
let pixelFont;

// The player character
let goblin;

// The rabbit
let rabbit;

// The wall tile
let wall;

// The ground tile
let ground;

// The coin item
let coin;

// Max nomber of keys
const maxKeys = 3;

// Current nomber of keys
let keys = maxKeys;

const enemyToPlace = 2;

function preload() {
    pixelFont = loadFont('assets/font/slkscr.ttf');
    goblin = loadImage('assets/images/goblin.png');
    rabbit = loadImage('assets/images/rabbit.png');
    wall = loadImage('assets/images/wall.png');
    ground = loadImage('assets/images/ground.png');
    coin = loadImage('assets/images/coin.png');
}

// The player starts at 0,0 on the grid
let player = {
    r: 0,
    c: 6,
    size: unit
}

let enemy = {
    r: 0,
    c: 0,
    size: unit,
    direction: 1,
    moveInterval: 30,
    moveTime: 0
};

const enemies = [];

// The rabbit speed
let enemySpeed = enemy.direction;

/**
Create and populate the grid
*/
function setup() {
    createCanvas(cols * unit, rows * unit);

    // Walls
    let wallsToPlace = 12;
    while (wallsToPlace > 0) {
        // Find position
        let r = floor(random(0, rows));
        let c = floor(random(0, cols));
        // Place an item
        if (grid[r][c] === " ") {
            grid[r][c] = "W";
            wallsToPlace = wallsToPlace - 1;
        }
    }

    // Items
    let itemsToPlace = 3;
    while (itemsToPlace > 0) {
        // Find position
        let r = floor(random(0, rows));
        let c = floor(random(0, cols));
        // Place an item
        if (grid[r][c] === " ") {
            grid[r][c] = "c";
            itemsToPlace = itemsToPlace - 1;
        }
    }

    // Make the position the player starts at empty!
    grid[player.r][player.c] = " ";

    resetEnemy();
}

/**
Handles displaying the grid
*/
function draw() {
    background(0);

    moveEnemy();

    // Go through all the rows and columns
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Get the item at this position
            let item = grid[r][c];

            // Draw a square so we can see the grid space
            push();
            noFill();
            noStroke();
            imageMode(CENTER);
            image(ground, c * unit + unit / 2, r * unit + unit / 2, unit, unit)
            pop();

            if (item === "W") {
                push();
                noFill();
                noStroke();
                imageMode(CENTER);
                image(wall, c * unit + unit / 2, r * unit + unit / 2, unit, unit)
                pop();
            }

            else if (item === "c") {
                push();
                noFill();
                noStroke();
                imageMode(CENTER);
                image(coin, c * unit + unit / 2, r * unit + unit / 2, unit, unit)
                pop();
            }

            else if (item === "D") {
                push();
                noFill();
                noStroke();
                imageMode(CENTER);
                image(ground, c * unit + unit / 2, r * unit + unit / 2, unit, unit)
                pop();
            }
        }
    }

    // Draw the player
    drawPlayer();
    drawEnemy();
    drawKeys();
    // for (let i = 0; i < enemies.length; i++) {
    //     let enemies = enemies[i];
    // }
}

// Display the player
function drawPlayer() {
    push();
    noFill();
    noStroke();
    imageMode(CENTER);
    image(goblin, player.c * unit + unit / 2, player.r * unit + unit / 2, player.size, player.size)
    pop();
}

// Display the number of keys in the bottom right corner
function drawKeys() {
    push();
    textAlign(RIGHT, BOTTOM);
    textSize(28);
    textStyle(BOLD);
    fill("red");
    text("♥️".repeat(keys), width - 20, height - 20);
    pop();
}

function drawEnemy() {
    push();
    noStroke();
    noFill();
    imageMode(CENTER);
    image(rabbit, enemy.c * unit + unit / 2, enemy.r * unit + unit / 2, enemy.size, enemy.size);
    pop();
}

function resetEnemy() {
    let enemyToPlace = 1;

    while (enemyToPlace > 0) {
        // Find position
        let r = floor(random(1, rows));
        let c = floor(random(0, cols));
        // Place an enemy
        if (grid[r][c] === " ") {
            enemy.r = r;
            enemy.c = c;
            enemy.direction = 1;
            enemy.moveTime = 0;
            enemyToPlace = enemyToPlace - 1;
        }
    }
}

function moveEnemy() {
    enemy.moveTime++;

    if (enemy.moveTime >= enemy.moveInterval) {
        // Next col according to the enemy direction
        let nextCol = enemy.c + enemy.direction;

        // Checks if next col is valid
        if (nextCol >= 0 && nextCol < cols && grid[enemy.r][nextCol] !== "W") {
            // If it is
            enemy.c += enemy.direction;
        }
        else {
            enemy.direction *= -1;
            // enemy.moveTime = 0;
            // if (enemy.c >= cols) {
            // resetEnemy();
        }
        enemy.moveTime = 0;
    }
}

/**
Key pressed are there to handle movement, but we also use this to check
whether the player tried to walk through a wall, or whether they
picked up a collectible
*/
function keyPressed() {
    // First of all create new variables for the player's position
    // This will enable us to check what's there without actually
    // moving the player
    let newR = player.r;
    let newC = player.c;

    // Adjust the row and column position based on the arrow key
    // A
    if (keyCode === 65) {
        newC -= 1;
    }
    // D
    else if (keyCode === 68) {
        newC += 1;
    }
    // W
    else if (keyCode === 87) {
        newR -= 1;
    }
    // S
    else if (keyCode === 83) {
        newR += 1;
    }

    // Constrain so the player can't walk off the edges
    newR = constrain(newR, 0, rows - 1);
    newC = constrain(newC, 0, cols - 1);

    // Now check what is at the position the player tried to move to
    if (grid[newR][newC] === ` ` || grid[newR][newC] === `D` || grid[newR][newC] === `N`) {
        // If nothing, they can just move there
        player.r = newR;
        player.c = newC;
    }
    else if (grid[newR][newC] === `c`) {
        // If it's a collectible then empty that spot
        grid[newR][newC] = ` `;
        // Make the player grow (but constrain to the unit size)
        player.size += unit / 10;
        player.size = constrain(player.size, 0, unit);
        // And let them move to that space
        player.r = newR;
        player.c = newC;
    }
}