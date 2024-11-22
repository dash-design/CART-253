/**
 * Title of Project
 * Ellie "DASH" Desjardins
 * 
 * A primitive grid-based program that you can move around in and
 * collect the letter c, and where the W serves as a wall
 *
 */

"use strict";

// The game grid
let grid = [
    ["W", "W", "W", "W", "W", "W", "N", "W", "W", "W", "W", "W", "W"],
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

// Game elements
let pixelFont;

let goblin;

let rabbit;

let wall;

let ground;

let coin;

let coinOutline;

let door;

let key;

let keyOutline;

let heart;

let heartOutline;

let wizard;

let npcNames;

let npcName;

let night;

// Preload game assets
function preload() {
    pixelFont = loadFont('assets/font/slkscr.ttf');
    goblin = loadImage('assets/images/goblin.png');
    rabbit = loadImage('assets/images/rabbit.png');
    wall = loadImage('assets/images/brick.png');
    ground = loadImage('assets/images/ground.png');
    coin = loadImage('assets/images/coin.png');
    coinOutline = loadImage('assets/images/coinoutline.png');
    door = loadImage('assets/images/door.png');
    key = loadImage('assets/images/key.png');
    keyOutline = loadImage('assets/images/keyoutline.png');
    heart = loadImage('assets/images/heart.png');
    heartOutline = loadImage('assets/images/heartoutline.png');
    wizard = loadImage('assets/images/wizard.png');
    npcNames = loadJSON('assets/data/lovecraft.json');
    night = loadImage('assets/images/mask.png');
}

// let tiles = {
//     c: c * unit + unit / 2,
//     r: r * unit + unit / 2,
//     size: unit
// }

// The player starts at 0,0 on the grid
let player = {
    r: 0,
    c: 6,
    size: unit
}

// Max number of lives
const maxLives = 2;

let lives = [0];

// Max number of keys
const maxKeys = 3;

let keys = [];

// Max number of coins
const maxCoins = 3;

let coins = [];

// The lives in the inventory
let inventoryLives = {
    r: 8,
    c: 12,
    size: unit * 1.75
}

// The key in the inventory
let inventoryKey = {
    r: 8,
    c: 0,
    size: unit * 1.25
}

// The coins in the inventory
let inventoryCoin = {
    r: 9,
    c: 0,
    size: unit * 1.5
}

// Total amount of enemies
let enemiesTotal = 4;

let enemies = [];

// let npc = {
//     r: 0,
//     c: 0,
//     size: unit
// }

// Total number of NPCs
let npcTotal = 1;

let npcs = [];

// The NPCs dialogues
let npcSpeech = [
    "Hello, I am a wizard! Tim the Wizard. Hehe",
    "Hi",
    "Bye"];

// let mask = {
//     size: (cols * unit) * 3
// };

let dialogueBox = {
    r: 8,
    c: 3,
    size: unit
}

/**
Creates and populate the grid
*/
function setup() {
    createCanvas(cols * unit, rows * unit);

    // Number of walls to place
    // And place them
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

    // Number of items to place
    // And place them
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

    // Makes the position the player starts at empty!
    grid[player.r][player.c] = "N";

    // Creates the enemies
    setEnemies();
    // Creates the NPCs
    setNpc();
}

/**
Handles displaying the grid
*/
function draw() {
    background(0);

    // moveEnemies();

    // Goes through all the rows and columns
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Gets the item at this position
            let item = grid[r][c];

            // Draws the grid and uses the ground asset by default
            push();
            noFill();
            noStroke();
            imageMode(CENTER);
            image(ground, c * unit + unit / 2, r * unit + unit / 2, unit, unit)
            pop();

            // Places the walls
            if (item === "W") {
                push();
                noFill();
                noStroke();
                imageMode(CENTER);
                image(wall, c * unit + unit / 2, r * unit + unit / 2, unit, unit)
                pop();
            }

            // Places the keys
            else if (item === "c") {
                push();
                noFill();
                noStroke();
                imageMode(CENTER);
                image(key, c * unit + unit / 2, r * unit + unit / 2, unit / 1.25, unit / 1.25)
                pop();
            }
            // Places the door
            else if (item === "D") {
                push();
                noFill();
                noStroke();
                imageMode(CENTER);

                //  If the player has enough keys, the door is opened
                if (keys.length >= maxKeys) {
                    image(ground, c * unit + unit / 2, r * unit + unit / 2, unit, unit)
                }
                // If not, the door stays locked
                else {
                    image(door, c * unit + unit / 2, r * unit + unit / 2, unit, unit)
                }
                pop();
            }
        }
    }
    // drawDialogueBox();
    // The game functions
    game();
}

// function drawDialogueBox() {
//     for (let npc of npcs) {
//         push();
//         stroke(255, 95);
//         strokeWeight(2);
//         fill(0, 200);
//         rect(3 * unit, 8.125 * unit, 6.75 * unit, 1.75 * unit);

//         fill(255);
//         // rectMode(CENTER);
//         textFont(pixelFont);
//         textAlign(TOP, LEFT);
//         textSize(24);
//         text(npc.name + ":\n", 3.125 * unit, 8.5 * unit);
//         // rectMode(CENTER);
//         textFont(pixelFont);
//         // textAlign(CENTER, LEFT);
//         textSize(20);
//         text(npc.speech, 3.25 * unit, 9 * unit, 6.75 * unit, 1.5 * unit);
//         pop();
//     }
// }

function game() {
    // Moves the enemies
    moveEnemies();
    // Checks collision with the enemy
    checkEnemiesCollision();

    // Draws the enemy
    drawEnemies();
    // Draws the NPC
    drawNpc();
    // Draw the player
    drawPlayer();
    // Draw mask
    // drawMask();
    // Draws the player's life
    drawLife();
    // Draws the keys
    drawKeys();
    // Draws the coins
    drawCoins();

    // Shows the dialogue wih the NPCs
    openDialogue()
}

// function drawMask() {
//     push();
//     noFill();
//     noStroke();
//     imageMode(CENTER);
//     image(night, player.c * unit + unit / 2, player.r * unit + unit / 2, mask.size, mask.size)
//     pop();
// }

// Displays the player
function drawPlayer() {
    push();
    noFill();
    noStroke();
    imageMode(CENTER);
    image(goblin, player.c * unit + unit / 2, player.r * unit + unit / 2, player.size, player.size)
    pop();
}

// Creates the enemies
function setEnemies() {
    let enemiesToPlace = enemiesTotal;

    enemies = [];

    while (enemiesToPlace > 0) {
        // Find position
        let r = floor(random(1, rows));
        let c = floor(random(0, cols));
        // Place an enemy on an empty tile
        if (grid[r][c] === " ") {
            const newEnemy = {
                r: r,
                c: c,
                size: unit,
                direction: 1,
                moveInterval: 15,
                moveTime: 0
            }
            enemies.push(newEnemy);
            enemiesToPlace = enemiesToPlace - 1;
        }
    }
}

// Moves the enemies
function moveEnemies() {
    for (let enemy of enemies) {
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
            }
            enemy.moveTime = 0;
        }
    }
}

// Checks if the player get killed by an enemy
function checkEnemiesCollision() {
    for (let enemy of enemies) {
        if (player.c === enemy.c && player.r === enemy.r) {
            console.log("You died!");
            lives = lives - 1;
        }
    }
}

// Draws the enemies
function drawEnemies() {
    for (let enemy of enemies) {
        push();
        noStroke();
        noFill();
        imageMode(CENTER);
        image(rabbit, enemy.c * unit + unit / 2, enemy.r * unit + unit / 2, enemy.size, enemy.size);
        pop();
    }
}

// Populates the grid with the NPCs
// function placeNpc() {
//     while (true) {
//         let r = floor(random(0, rows));
//         let c = floor(random(0, cols));
//         if (grid[r][c] === " ") {
//             npc.r = r;
//             npc.c = c;
//             break;
//         }
//     }
// }

// Creates the NPCs
function setNpc() {
    let npcToPlace = npcTotal;
    // npcName = random(npcNames.deities);

    npcs = [];

    while (npcToPlace > 0) {
        // Find position
        let r = floor(random(1, rows));
        let c = floor(random(0, cols));
        // Place an enemy on an empty tile
        if (grid[r][c] === " ") {
            const newNpc = {
                r: r,
                c: c,
                size: unit,
                name: random(npcNames.deities),
                speech: npcSpeech[npcToPlace - 1]
            }
            npcs.push(newNpc);
            npcToPlace = npcToPlace - 1;
        }
    }
}

// Draws the NPCs
function drawNpc() {
    for (let npc of npcs) {
        push();
        noStroke();
        noFill();
        imageMode(CENTER);
        image(wizard, npc.c * unit + unit / 2, npc.r * unit + unit / 2, npc.size, npc.size);
        pop();
    }
}

// Draws the lives in the bottom right corner of the inventory
function drawLife() {
    for (let i = 0; i < maxLives; i++) {
        push();
        noStroke();
        noFill();
        imageMode(CENTER);
        if (i < lives.length) {
            image(heart, (11 - i) * (unit * 1.25) - unit * 1.75, (inventoryLives.r * unit) + unit, inventoryLives.size, inventoryLives.size);
        }
        else {
            image(heartOutline, (11 - i) * (unit * 1.25) - unit * 1.75, (inventoryLives.r * unit) + unit, inventoryLives.size, inventoryLives.size);
        }
        pop();
    }
}

// Draws the keys in the bottom left corner of the inventory
function drawKeys() {
    for (let k = 0; k < maxKeys; k++) {
        push();
        noStroke();
        noFill();
        imageMode(CENTER);
        if (k < keys.length) {
            image(key, (inventoryKey.c + k) * (unit / 1.2) + unit / 1.5, (inventoryKey.r * unit) + unit / 1.5, inventoryKey.size, inventoryKey.size);
        }
        else {
            image(keyOutline, (inventoryKey.c + k) * (unit / 1.2) + unit / 1.5, (inventoryKey.r * unit) + unit / 1.5, inventoryKey.size, inventoryKey.size);
        }
        pop();
    }
}

// Draws the coins in the bottom left corner of the inventory
function drawCoins() {
    for (let i = 0; i < maxCoins; i++) {
        push();
        noStroke();
        noFill();
        imageMode(CENTER);
        if (i < coins.length) {
            image(coin, (inventoryCoin.c + i) * (unit / 1.2) + unit / 1.45, (inventoryCoin.r * unit) + unit / 1.75, inventoryCoin.size, inventoryCoin.size);
        }
        else {
            image(coinOutline, (inventoryCoin.c + i) * (unit / 1.2) + unit / 1.45, (inventoryCoin.r * unit) + unit / 1.75, inventoryCoin.size, inventoryCoin.size);
        }
        pop();
    }
}

/**
* Controls the movements of the player
* Determines which tiles are accessible or not
* Determines the effect of some tiles when the player moves on them
*/
function keyPressed() {
    // Creates new variables for the player's position
    // This will checks what's there
    // Then moves the player if possible
    let newR = player.r;
    let newC = player.c;

    // Adjusts the row and column position based on the arrow key
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

    // Checks what is at the position the player tried to move to
    if (grid[newR][newC] === ` ` || grid[newR][newC] === `N`) {
        // If nothing, the player moves there
        player.r = newR;
        player.c = newC;
    }
    else if (grid[newR][newC] === `c`) {
        // If it's a collectible then empty that spot
        grid[newR][newC] = ` `;
        // Then the player moves there
        player.r = newR;
        player.c = newC;
        if (keys.length < maxKeys) {
            // Increase the number of keys that the player has
            keys.push(true);
        }

    }
    // Checks if it is a door tile
    else if (grid[newR][newC] === `D`) {
        // If the player has enough keys, then they can move
        if (keys.length >= maxKeys) {
            player.r = newR;
            player.c = newC;
            console.log("You win!");
            // Path to be added!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // window.location.href = "../variation-jam-2/index.html";
        }
    }
    return false;
}

// The dialogue and dialogue window when talking to the NPCs
function openDialogue() {
    for (let npc of npcs) {
        if (player.c === npc.c && player.r === npc.r) {
            push();
            stroke(255, 95);
            strokeWeight(2);
            fill(0, 200);
            rect(3 * unit, 8.125 * unit, 6.75 * unit, 1.75 * unit);

            fill(255);
            // rectMode(CENTER);
            textFont(pixelFont);
            textAlign(TOP, LEFT);
            textSize(24);
            text(npc.name + ":\n", 3.125 * unit, 8.5 * unit);
            // rectMode(CENTER);
            textFont(pixelFont);
            textAlign(CENTER, LEFT);
            textSize(20);
            text(npc.speech, 3.25 * unit, 9 * unit, 6.75 * unit, 1.5 * unit);
            pop();
        }
    }
}