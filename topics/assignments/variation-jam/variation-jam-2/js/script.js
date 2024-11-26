/**
 * Goblin and Dungeon
 * 
 * Ellie "DASH" Desjardins
 * 
 * Welcome to my grid-based top-down view kind of game!
 * You play as a Goblin adventuring through a dungeon, but beware the dangerous killer rabbits!
 * 
 * Use [A][W][S][D] keys to move around, collect keys and escape through the door.
 * 
 * Use [SPACE] to interact with the menus and the NPCs
 * 
 * If needed, meet one of our friendly wizard NPCs, they might help you!
 * 
 * When you succesfully escape the dungeon, try the next level!
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

// The player starts at 0,0 on the grid
let player = {
    r: 0,
    c: 6,
    size: unit
}

// Max number of lives
const maxLives = 2;

let lives = 2;

// Max number of keys
const maxKeys = 3;

let keys = [];

// Max number of coins
const maxCoins = 3;

let coins = [];

// The lives in the inventory
let inventoryLife = {
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
let enemiesTotal = 5;

let enemies = [];

// Total number of NPCs
let npcTotal = 2;

let npcs = [];

// The NPCs dialogues
let npcSpeech = [
    "For one Life I'll give you a key\nPress [SPACE] To Get a Key",
    "For 1 Life I'll give you 1 key\nPress [SPACE] To Get a Key"
];

// let mask = {
//     size: (cols * unit) * 3
// };

let dialogueBox = {
    r: 8,
    c: 3,
    size: unit
}

let dialogueOn = false;


// The state
let state = "start";

// Start screen
let home = {
    rectFill: "green",
    textFill: 255,
    textSize: 32,
    text: undefined
}

// End Screen
let end = {
    rectFill: 32,
    textFill: 220,
    textSize: 32,
    text: undefined

}

// Stop Watch variables
// Time it takes you to win
let yourTime = 0;
let start = null;
// Fastest time it took to win
let bestTime;

// Default frame rate
let fps = 60;
// Default move interval 
let adjustedMoveInterval = 15;



/**
Creates and populate the grid
*/
function setup() {
    createCanvas(cols * unit, rows * unit);

    // Retrieve the last saved highscore
    bestTime = getItem('best time');

    if (bestTime === null) {
        bestTime = 999999;
    }

    // Set the best time if no prior score exists
    // if (bestTime === null) {
    //     bestTime = "--:--.--";
    // }

    /**
     * Pre-refactored grid items
     */
    // // Number of walls to place
    // // And place them
    // let wallsToPlace = 12;
    // while (wallsToPlace > 0) {
    //     // Find position
    //     let r = floor(random(0, rows));
    //     let c = floor(random(0, cols));
    //     // Place an item
    //     if (grid[r][c] === " ") {
    //         grid[r][c] = "W";
    //         wallsToPlace = wallsToPlace - 1;
    //     }
    // }

    // // Number of items to place
    // // And place them
    // let itemsToPlace = 3;
    // while (itemsToPlace > 0) {
    //     // Find position
    //     let r = floor(random(0, rows));
    //     let c = floor(random(0, cols));
    //     // Place an item
    //     if (grid[r][c] === " ") {
    //         grid[r][c] = "c";
    //         itemsToPlace = itemsToPlace - 1;
    //     }
    // }

    // const wallsToPlace = 12;
    // const itemsToPlace = 3;

    // drawGridItems(wallsToPlace, "W");
    // drawGridItems(itemsToPlace, "c");

    // // Makes the position the player starts at empty!
    // grid[player.r][player.c] = "N";

    // // setCharacters();
    // // Creates the enemies
    // setEnemies();
    // // Creates the NPCs
    // setNPCs();
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight);
// }

function startGame() {
    const wallsToPlace = 12;
    const itemsToPlace = 3;

    drawGridItems(wallsToPlace, "W");
    drawGridItems(itemsToPlace, "c");

    // Makes the position the player starts at empty!
    grid[player.r][player.c] = "N";

    // Reset the lives
    lives = maxLives;

    // setCharacters();
    // Creates the enemies
    setEnemies();
    // Creates the NPCs
    setNPCs();

    if (start == null) {
        start = Date.now();
    }
}

/**
Handles displaying the grid
*/
function draw() {
    background(0);

    // Calculates the frame rate or set it to 60
    fps = frameRate() || 60;
    // Adjusts the move interval according to the FPS
    adjustedMoveInterval = floor(fps / 4);

    // let bestTimeFormat = "--:--.--";

    // Set the best time if no prior score exists
    // if (bestTime !== null) {
    //     bestTimeFormat = timeFormatting(bestTime);
    // }

    if (state === "start") {

        let bestTimeFormat = timeFormatting(bestTime);

        home.text = `
Goblin and Dungeon

Explore, adventure, escape!

Controls:
[W]
[A][S][D]

Press [SPACE] To Play

Best Time: ${bestTimeFormat}
`;
        menu(home.rectFill, home.textFill, home.textSize, home.text);
    }

    else if (state === "game") {
        createGrid();
        game();
    }
    else if (state === "lost") {
        end.text = `
:'(

Press [SPACE]
To Try Again
`;
        menu(end.rectFill, end.textFill, end.textSize, end.text);
    }
    else if (state === "win") {

        let yourTimeFormat = timeFormatting(yourTime);
        let bestTimeFormat = timeFormatting(bestTime);

        end.text = `
    Congratulations!
    
Your Time: ${yourTimeFormat}
Best Time: ${bestTimeFormat}

    Press[SPACE] To Play
The Next Level!
    or
    Press [R] To Play Again
`;
        menu(end.rectFill, end.textFill, end.textSize, end.text);

        start = null;

        // Store the latest high score
        // highScore = min(score, highScore);
        // storeItem('high score', highScore);
    }
    /**
    * Pre-refactored grid
    */
    // displayGrid();
    // displayGridTiles();

    // // Goes through all the rows and columns
    // for (let r = 0; r < rows; r++) {
    //     for (let c = 0; c < cols; c++) {
    //         // Gets the item at this position
    //         let item = grid[r][c];

    //         // Draws the grid and uses the ground asset by default
    //         push();
    //         noFill();
    //         noStroke();
    //         imageMode(CENTER);
    //         image(ground, c * unit + unit / 2, r * unit + unit / 2, unit, unit)
    //         pop();

    //         // Places the walls
    //         if (item === "W") {
    //             push();
    //             noFill();
    //             noStroke();
    //             imageMode(CENTER);
    //             image(wall, c * unit + unit / 2, r * unit + unit / 2, unit, unit)
    //             pop();
    //         }

    //         // Places the keys
    //         else if (item === "c") {
    //             push();
    //             noFill();
    //             noStroke();
    //             imageMode(CENTER);
    //             image(key, c * unit + unit / 2, r * unit + unit / 2, unit / 1.25, unit / 1.25)
    //             pop();
    //         }
    //         // Places the door
    //         else if (item === "D") {
    //             push();
    //             noFill();
    //             noStroke();
    //             imageMode(CENTER);

    //             //  If the player has enough keys, the door is opened
    //             if (keys.length >= maxKeys) {
    //                 image(ground, c * unit + unit / 2, r * unit + unit / 2, unit, unit)
    //             }
    //             // If not, the door stays locked
    //             else {
    //                 image(door, c * unit + unit / 2, r * unit + unit / 2, unit, unit)
    //             }
    //             pop();
    //         }
    //     }
    // }
    // // The game functions
    // game();
}

/**
 * Might be refactored?
 */
function createGrid() {
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
}

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

function game() {
    // Moves the enemies
    moveEnemies();
    // // Checks collision with the enemy
    // checkDeath();

    // Draws the NPC
    drawNPCs();
    // Draws the player
    drawPlayer();
    // Draws the enemy
    drawEnemies();
    // // Draws mask
    // drawMask();

    // Draws items in inventory
    drawInventoryItems();
    // Draws the player's life
    drawLives();
    // Draws the keys
    drawKeys();
    // Draws the coins
    drawCoins();

    // Shows the dialogue wih the NPCs
    openDialogue();

    stopWatch();
}

function timeFormatting(totalMillis) {
    // const totalMillis = yourTime + (start != null ? Date.now() - start : 0);
    const ms = Math.floor(totalMillis % 1000 / 10);
    const s = Math.floor(totalMillis / 1000) % 60;
    const m = Math.floor(totalMillis / 1000 / 60) % 60;
    return `${nf(m, 2)}:${nf(s, 2)}.${nf(ms, 2)}`;
}

function stopWatch() {

    const totalMillis = yourTime + (start != null ? Date.now() - start : 0);
    // const ms = Math.floor(totalMillis % 1000 / 10);
    // const s = Math.floor(totalMillis / 1000) % 60;
    // const m = Math.floor(totalMillis / 1000 / 60) % 60;
    // const string = `${nf(m, 2)}:${nf(s, 2)}.${nf(ms, 2)}`;
    const string = timeFormatting(totalMillis);

    fill(255);
    textFont(pixelFont);
    textAlign(LEFT, CENTER);
    textSize(24);
    text(string, unit / 2, unit / 2);
}

function drawGridItems(gridItemsToPlace, gridItem) {
    // const wallsToPlace = 12;
    // const itemsToPlace = 3;
    while (gridItemsToPlace > 0) {
        // Find position
        let r = floor(random(0, rows));
        let c = floor(random(0, cols));
        // Place an item
        if (grid[r][c] === " ") {
            grid[r][c] = gridItem;
            gridItemsToPlace = gridItemsToPlace - 1;
        }
    }
}

/**
 * Pre-refactoring inventory
 */
// function displayGrid() {
//     // Goes through all the rows and columns
//     for (let r = 0; r < rows; r++) {
//         for (let c = 0; c < cols; c++) {
//             // Gets the item at this position
//             const item = grid[r][c];
//             displayGridTiles(tile)
//         }
//     }
// }

// function displayGridTiles(tile) {
//     if (item === "W") {
//         drawGridTiles(wall, c, r, unit)
//     }
//     // Places the keys
//     else if (item === "c") {
//         drawGridTiles(key, c, r, unit / 1.25)
//     }
//     // Places the door
//     else if (item === "D") {
//         //  If the player has enough keys, the door is opened
//         if (keys.length >= maxKeys) {
//             drawGridTiles(ground, c, r, unit)
//         }
//         // If not, the door stays locked
//         else {
//             drawGridTiles(door, c, r, unit)
//         }
//     }
// }

// // Draws the keys in the inventory
// function drawGridTiles(tileAsset, c, r, size) {
//     push();
//     noFill();
//     noStroke();
//     imageMode(CENTER);
//     image(tileAsset, c * unit + unit / 2, r * unit + unit / 2, size, size)
//     pop();
// }

// Creates the enemies
function setEnemies() {
    // // Checks frame rate and set it to 60 fps
    // let fps = frameRate() || 60;
    // // Creates moveInterval vaiable based on the frame rate
    // let adjustedMoveInterval = floor(fps / 4);

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
                moveInterval: adjustedMoveInterval,
                moveTime: 0
            }
            enemies.push(newEnemy);
            enemiesToPlace = enemiesToPlace - 1;
        }
    }
}

// Creates the NPCs
function setNPCs() {
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

/**
 * Tried to refactor!!!
 */
// function setCharacters(charactersToPlace, characters, charactersTotal) {

//     // let charactersToPlace = charactersTotal;
//     // npcName = random(npcNames.deities);

//     characters = [];

//     while (charactersToPlace > 0) {

//         // Find position
//         let r = floor(random(1, rows));
//         let c = floor(random(0, cols));
//         // Place an enemy on an empty tile
//         if (grid[r][c] === " ") {
//             const newCharacter = {

//             }
//             characters.push(newCharacter);
//             charactersToPlace = charactersToPlace - 1;
//         }
//     }
// }

// function setNPCs() {
//     setCharacters(charactersToPlace, characters, charactersTotal)
// }

// function setEnemies() {
//     setCharacters(charactersToPlace, characters, charactersTotal)
// }

// Draws the characters (enemies, NPCs)
function drawCharacters(characters, characterAsset) {
    for (let character of characters) {
        push();
        noStroke();
        noFill();
        imageMode(CENTER);
        const c = character.c * unit + unit / 2;
        const r = character.r * unit + unit / 2;
        const size = character.size;

        image(characterAsset, c, r, size, size);
        pop();
    }
}

// Draws the enemies (rabbits)
function drawEnemies() {
    drawCharacters(enemies, rabbit)
}

// Draws the NPCs (wizards)
function drawNPCs() {
    drawCharacters(npcs, wizard)
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
                // Lets the enemy move if it is valid
                enemy.c += enemy.direction;
                // Check collision with the player
                checkDeath(enemy);
            }
            else {
                // Makes the enemy change direction 
                enemy.direction *= -1;
            }
            // Resets enemy movement
            enemy.moveTime = 0;
        }
    }
}

// Checks if the player get killed by an enemy
function checkDeath(enemy) {
    if (player.c === enemy.c && player.r === enemy.r) {
        lives = lives - 1;
    }

    if (lives <= 0) {
        state = "lost";
    }
}

// Draws the player
function drawPlayer() {
    push();
    noFill();
    noStroke();
    imageMode(CENTER);
    image(goblin, player.c * unit + unit / 2, player.r * unit + unit / 2, player.size, player.size)
    pop();
}

/**
 * Mask not needed right now
 */

// // Draws the mask that hide the grid
// function drawMask() {
//     push();
//     noFill();
//     noStroke();
//     imageMode(CENTER);
//     image(night, player.c * unit + unit / 2, player.r * unit + unit / 2, mask.size, mask.size)
//     pop();
// }

// Draws the items (keys, coins) in the inventory
function drawInventoryItems(maxItems, items, inventoryItem, itemAsset, itemAssetOutline) {
    for (let i = 0; i < maxItems; i++) {
        push();
        noStroke();
        noFill();
        imageMode(CENTER);
        const c = (inventoryItem.c + i) * (unit / 1.2) + unit / 1.5;
        const r = (inventoryItem.r * unit) + unit / 1.5;
        const size = inventoryItem.size;

        if (i < items.length) {
            image(itemAsset, c, r, size, size);
        }
        else {
            image(itemAssetOutline, c, r, size, size);
        }
        pop();
    }
}

// Draws the lives in the bottom right corner of the inventory
function drawLives() {
    for (let i = 0; i < maxLives; i++) {
        push();
        noStroke();
        noFill();
        imageMode(CENTER);
        const c = (11 - i) * (unit * 1.25) - unit * 1.75;
        const r = (inventoryLife.r * unit) + unit
        const size = inventoryLife.size;
        if (i < lives) {
            image(heart, c, r, size, size);
        }
        else {
            image(heartOutline, c, r, size, size);
        }
        pop();
    }
}
/**
 * Tried to refactor!!!
 */

// function drawLives() {
//     drawInventoryItems(maxLives, lives, inventoryLive, heart, heartOutline)
// }

// Draws the keys in the inventory
function drawKeys() {
    drawInventoryItems(maxKeys, keys, inventoryKey, key, keyOutline)
}

// Draws the coins in the inventory
function drawCoins() {
    drawInventoryItems(maxCoins, coins, inventoryCoin, coin, coinOutline)
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
            text(npc.speech, 3.125 * unit, 9 * unit, 6.625 * unit, 1.5 * unit);
            pop();

            dialogueOn = true;
            return;
        }
    }
    dialogueOn = false;
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

    // R
    if (keyCode === 82) {
        if (state === "win") {
            location.reload();
        }
    }

    // Space
    if (keyCode === 32) {
        if (state === "start") {
            state = "game";
            startGame();


            if (stopWatch == null) {
                stopWatch = Date.now();
            } else {
                timeElapsed += Date.now() - timerStarted;
                stopWatch = null;
            }
        }
        else if (state === "game" && dialogueOn) {
            if (keys.length < maxKeys && lives > 1) {
                lives = lives - 1;
                keys.push(true);
            }
        }
        else if (state === "lost") {
            location.reload();
        }
        else if (state === "win") {
            // newFunction();
            // Path to be added!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
            // window.location.href = "../variation-jam-2/index.html";
            window.open("https://dash-design.github.io/CART-253/topics/assignments/variation-jam/variation-jam-2/");
        }
    }
    else if (state === "game") {
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

        let moved = false;

        // Checks what is at the position the player tried to move to
        if (grid[newR][newC] === ` ` || grid[newR][newC] === `N`) {
            // If nothing, the player moves there
            player.r = newR;
            player.c = newC;
            moved = true;
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
            moved = true;

        }
        // Checks if it is a door tile
        else if (grid[newR][newC] === `D`) {
            // If the player has enough keys, then they can move
            if (keys.length >= maxKeys) {
                player.r = newR;
                player.c = newC;

                state = "win";

                // Calculate the time
                yourTime = Date.now() - start;
                bestTime = min(yourTime, bestTime);
                storeItem('best time', bestTime);
            }
        }

        // Check if the player moved onto an enemy
        if (moved) {
            for (let enemy of enemies) {
                checkDeath(enemy);
            }
        }
    }

    return false;

    // function newFunction() {
    //     location.reload();
    // }
}