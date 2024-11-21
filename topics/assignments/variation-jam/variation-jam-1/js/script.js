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

let pixelFont;

let goblin;

let rabbit;

let wall;

let ground;

let coin;

let door;

let key;

let keyOutline;

let wizard;

let npcNames = undefined;

// Max number of keys
const maxKeys = 3;

// Current nomber of keys
let keys = [];

// The key in the inventory
let inventoryKey = {
    r: 8,
    c: 0,
    size: unit * 1.75
}

function preload() {
    pixelFont = loadFont('assets/font/slkscr.ttf');
    goblin = loadImage('assets/images/goblin.png');
    rabbit = loadImage('assets/images/rabbit.png');
    wall = loadImage('assets/images/brick.png');
    ground = loadImage('assets/images/ground.png');
    coin = loadImage('assets/images/coin.png');
    door = loadImage('assets/images/block.png');
    key = loadImage('assets/images/key.png');
    keyOutline = loadImage('assets/images/keyoutline.png');
    wizard = loadImage('assets/images/wizard.png');
    npcNames = loadJSON('assets/data/lovecraft.json');
}

// The player starts at 0,0 on the grid
let player = {
    r: 0,
    c: 6,
    size: unit
}

const maxLives = 3;

let lives = [0];

// The lives in the inventory
let inventoryLives = {
    r: 8,
    c: 13,
    size: unit * 1.75
}

let enemy = {
    r: 0,
    c: 0,
    size: unit,
    direction: 1,
    moveInterval: 30,
    moveTime: 0
};

let enemiesTotal = 2;

let enemies = [];

// The rabbit speed
let enemySpeed = enemy.direction;

let npc = {
    r: 0,
    c: 0,
    size: unit
}

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
    placeNpc();
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
                image(key, c * unit + unit / 2, r * unit + unit / 2, unit / 1.25, unit / 1.25)
                pop();
            }

            else if (item === "D") {
                push();
                noFill();
                noStroke();
                imageMode(CENTER);

                if (keys.length >= maxKeys) {
                    image(ground, c * unit + unit / 2, r * unit + unit / 2, unit, unit)
                }
                else {
                    image(door, c * unit + unit / 2, r * unit + unit / 2, unit, unit)
                }
                pop();
            }
        }
    }
    game();
}

function game() {
    // Draw the player
    drawPlayer();
    // Draws the enemy
    drawEnemy();
    // Draws the NPC
    drawNpc();
    // Draws the keys
    drawKeys();
    // Checks collision with the enemy
    checkEnemyCollision();
    // Draws the player's life
    drawLife();
    openDialogue()
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

function drawEnemy() {
    let enemyToPlace = 2;
    while (enemyToPlace = enemyToPlace - 1) {
        push();
        noStroke();
        noFill();
        imageMode(CENTER);
        image(rabbit, enemy.c * unit + unit / 2, enemy.r * unit + unit / 2, enemy.size, enemy.size);
        pop();
    }
}

function placeNpc() {
    while (true) {
        let r = floor(random(0, rows));
        let c = floor(random(0, cols));
        if (grid[r][c] === " ") {
            npc.r = r;
            npc.c = c;
            break;
        }
    }
}

function drawNpc() {
    push();
    noStroke();
    noFill();
    imageMode(CENTER);
    image(wizard, npc.c * unit + unit / 2, npc.r * unit + unit / 2, npc.size, npc.size);
    pop();
}

// Display the number of keys in the bottom left corner
function drawKeys() {
    for (let k = 0; k < maxKeys; k++) {
        push();
        noStroke();
        noFill();
        imageMode(CENTER);
        if (k < keys.length) {
            image(key, (inventoryKey.c + k) * unit + unit / 2, (inventoryKey.r * unit) + unit, inventoryKey.size, inventoryKey.size);
        }
        else {
            image(keyOutline, (inventoryKey.c + k) * unit + unit / 2, (inventoryKey.r * unit) + unit, inventoryKey.size, inventoryKey.size);
        }
        pop();
    }
}

// Checks if the player get killed by an enemy
function checkEnemyCollision() {
    if (player.c === enemy.c && player.r === enemy.r) {
        console.log("You died!");
        lives = lives - 1;
    }
}

// Display the number of lives in the bottom right corner
function drawLife() {
    for (let i = 0; i < maxLives; i++) {
        push();
        noStroke();
        noFill();
        imageMode(CENTER);
        if (i < lives.length) {
            image(key, (inventoryLives.c - i) * unit - unit / 2, (inventoryLives.r * unit) + unit, inventoryLives.size, inventoryLives.size);
        }
        else {
            image(keyOutline, (inventoryLives.c - i) * unit - unit / 2, (inventoryLives.r * unit) + unit, inventoryLives.size, inventoryLives.size);
        }
        pop();
    }
}

function resetEnemy() {
    let enemyToPlace = enemiesTotal;

    enemies = [];

    while (enemyToPlace > 0) {
        // Find position
        let r = floor(random(1, rows));
        let c = floor(random(0, cols));
        // Place an enemy on an empty tile
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
    if (grid[newR][newC] === ` ` || grid[newR][newC] === `N`) {
        // If nothing, they can just move there
        player.r = newR;
        player.c = newC;
    }
    else if (grid[newR][newC] === `c`) {
        // If it's a collectible then empty that spot
        grid[newR][newC] = ` `;
        // Make the player grow (but constrain to the unit size)
        // player.size += unit / 10;
        // player.size = constrain(player.size, 0, unit);
        // And let them move to that space
        player.r = newR;
        player.c = newC;
        if (keys.length < maxKeys) {
            // Increase the number of keys that the player has
            keys.push(true);
        }

    }
    else if (grid[newR][newC] === `D`) {
        // If the player has enough keys, then they can move
        if (keys.length >= maxKeys) {
            player.r = newR;
            player.c = newC;
            console.log("You win!");
        }
    }

    // if (player.c === npc.c && player.r === npc.r && keyCode === 32) {
    //     openDialogue();
    // }
    return false;
}

function openDialogue() {
    if (player.c === npc.c && player.r === npc.r) {
        let npcName = random(npcNames.deities);

        push();
        rectMode(CENTER);
        noStroke();
        fill(0, 100);
        rect(6 * unit + unit / 2, 9 * unit, unit * 6, unit * 1.5);

        fill(255);
        textAlign(CENTER, CENTER);
        textSize(32);
        text(npcName, 6 * unit + unit / 2, 9 * unit);
        pop();
    }
}