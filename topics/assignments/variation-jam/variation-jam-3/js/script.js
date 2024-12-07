/**
 * Goblin and Dungeon: Escape the Last Level
 * 
 * Ellie "DASH" Desjardins
 * 
 * Goblin and Dungeon is a retro-inspired 2D top-down action-adventure game with a roguelite-inspired map generation feel.
 * Each play through features a unique dungeon layout with a grid-based movement, collectibles, NPCs, and obstacles.
 * You play as the lone goblin exploring, adventuring, and escaping unknown environments, but beware the dangerous killer rabbits!
 * 
 * Use [A][W][S][D] keys to move around, collect keys and coins, and escape through the door.
 * 
 * Use [SPACE] and [R] to interact with the menus and the NPCs
 * 
 * If needed, talk to one of our friendly wizard NPCs, they might help you!
 * 
 * When you succesfully escape the dungeon, try the first level again!
 *
 */

"use strict";

// The game grid
let baseGrid = [
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
];

// The game grid
let grid = undefined;

// Number of rows and columns and standard unit size
// Need to be adjusted according to the grid array
const rows = 14; // Serves as the Y
const cols = 19; // Serves as the X
let unit = 64; // Grid tiles size

// Game elements
let mazesLibrary;

let pixelFont;

let gothicFont;

let fantasyFont;

let goblin;

let rabbit;

let bloodyWall;

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
    mazesLibrary = loadJSON('assets/data/mazes.json'); // Maze grids
    pixelFont = loadFont('assets/font/slkscr.ttf'); // Stop watch font
    gothicFont = loadFont('assets/font/alagard.ttf'); // Menu and dialogue font
    fantasyFont = loadFont('assets/font/Alkhemikal.ttf'); // Title and NPC name font
    goblin = loadImage('assets/images/goblin.png'); // Player
    rabbit = loadImage('assets/images/rabbit.png'); // Enemies
    bloodyWall = loadImage('assets/images/bloodybrick.png'); // Wall tiles
    ground = loadImage('assets/images/dirt.png'); // Empty tiles
    coin = loadImage('assets/images/coin.png'); // Coins
    coinOutline = loadImage('assets/images/coinoutline.png'); // Coins outline (for the inventory)
    door = loadImage('assets/images/door.png'); // Door tile
    key = loadImage('assets/images/key.png'); // Keys
    keyOutline = loadImage('assets/images/keyoutline.png'); // Keys outline (for the inventory)
    heart = loadImage('assets/images/heart.png'); // Lives
    heartOutline = loadImage('assets/images/heartoutline.png'); // Lives outline (for the inventory)
    wizard = loadImage('assets/images/wizard.png'); // NPCs
    npcNames = loadJSON('assets/data/lovecraft.json'); // Names of NPCs
    night = loadImage('assets/images/mask.png'); // Mask
}

// Player variables
let player = {
    r: 0,
    c: 0,
    size: unit
}

// The door/exit variable
let exit = {
    r: 13,
    c: undefined,
    size: unit
}


// Life variables in the inventory
let inventoryLife = {
    r: 12,
    c: 18,
    size: unit * 1.5
}
const maxLives = 3; // Max number of lives
let lives = [true, true, true]; // Default number of lives

// Key variables in the inventory
let inventoryKey = {
    r: 12,
    c: 1,
    size: unit * 1.25
}
const maxKeys = 3; // Max number of keys
let keys = []; // Array of keys

// Coin variables in the inventory
let inventoryCoin = {
    r: 13,
    c: 1,
    size: unit * 1.5
}
const maxCoins = 3; // Max number of coins
let coins = []; // Array of coins

// Enemies variables
let enemiesTotal = 8; // Total amount of enemies
let enemies = []; // Array of enemies
// Variables used for dynamic enemies movement
let fps; // Default frame rate
let adjustedMoveInterval; // Default move interval 

// NPCs variables
let npcTotal = 2; // Total number of NPCs
let npcs = []; // Array of NPCs

let currentNPC = undefined;

// The NPCs dialogues
let npcSpeech = [
    "For a life I'll give you a key\nPress [SPACE] To Get a Key",
    "For three coins I'll give you a life\nPress [SPACE] To Get a Life"
];

let npcSpeechIndex = 0;

// NPCs dialogue box variables
let dialogueBox = {
    r: 8,
    c: 3,
    size: unit
}
let dialogueOn = false; // Off by default

// Mask that hides the map from the player
let mask = {
    size: (cols * unit) * 3
};

// The state
let state = "start";

// Start screen
let home = {
    textFont: gothicFont,
    textFill: 255,
    textSize: 32,
    message: undefined,
    text: undefined
}

// End Screen
let end = {
    textFont: gothicFont,
    textFill: 220,
    textSize: 32,
    message: undefined,
    text: undefined
}

// Stop watch variables
let yourTime = 0; // Time it takes you to win
let start = null;
let bestTime; // Fastest time it took to win

/**
Creates and populate the grid
*/
function setup() {
    if (windowHeight < (rows * unit)) {
        unit = windowHeight / rows;
    }
    createCanvas(cols * unit, rows * unit);

    // Retrieves the last saved highscore
    bestTime = getItem('best time');
    // Sets the default "best time" when none exists
    if (bestTime === null) {
        bestTime = 999999;
    }

    fps = frameRate() || 60; // Calculates the frame rate or set it to 60
    adjustedMoveInterval = floor(fps / 4); // Adjusts the move interval according to the FPS
    // Sets the grid as the game is setup
    setGrids();
}

function windowResized() {
    if (windowHeight < (rows * unit)) {
        unit = windowHeight / rows;
    }
    else {
        unit = 64;
    }
    // unit = windowHeight / rows;
    resizeCanvas(cols * unit, rows * unit);
}

/**
* Handles displaying the grid, menus, and game states
*/
function draw() {
    background(0); // Background is black by default

    // Game states
    // Starting menu state
    if (state === "start") {

        // let bestTimeFormat = timeFormatting(bestTime); // Retrieves the best time
        let bestTimeFormat;
        if (bestTime === 999999) {
            bestTimeFormat = "None";
        }
        else {
            bestTimeFormat = timeFormatting(bestTime);
        }

        // Starting menu content
        home.message = `
Explore, adventure, escape!`

        home.text = `
        
Controls:
[W]
[A][S][D]

Press [SPACE] To Play

Best Time: ${bestTimeFormat}
        `;
        let textSize = unit / 1.25;
        drawMenu(bloodyWall, home.textFill, textSize, home.message, home.text);
    }

    // Active game state (no menu)
    else if (state === "game") {
        createGrid(grid);
        game();
    }
    // Game lost state
    else if (state === "lost") {
        // Game lost menu content
        end.message = `
        
YOU DIED`

        end.text = `

        
        

Press [SPACE]
To Try Again
`;
        let textSize = unit;
        drawMenu(bloodyWall, end.textFill, textSize, end.message, end.text);
    }
    // Game won state
    else if (state === "win") {

        let yourTimeFormat = timeFormatting(yourTime);
        let bestTimeFormat = timeFormatting(bestTime);
        // Game won menu content
        end.message = `
You Escaped, Congratulations!`
        end.text = `
        
    
Your Time: ${yourTimeFormat}
Best Time: ${bestTimeFormat}

Press[SPACE] To Play The First Level!

Press [R] To Play Again
`;
        let textSize = unit;
        drawMenu(ground, end.textFill, textSize, end.message, end.text);

        start = null;
    }
}

// Resets the game when replaying
function resetGame() {
    // Clears the previous grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
        }
    }
    // Resets game elements
    keys = [];
    coins = [];
    enemies = [];
    npcs = [];
    yourTime = 0;
    start = null;
    // Sets new grid
    setGrids();
    // Starts the game when the grid is defined
    if (grid !== undefined) {
        state = "game";
        startGame();
    }
}

// Sets the current grid
function setGrids() {
    // grid = random(mazes);
    grid = random(mazesLibrary.mazes);
}

// Populates the grid with items
function createGrid(gridToCreate) {
    // Goes through all the rows and columns
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Gets the item at this position
            let item = gridToCreate[r][c];

            if (gridToCreate === grid) {
                // Draws the grid and uses the ground asset by default
                drawTiles(ground, c * unit + unit / 2, r * unit + unit / 2, unit, unit);
            }

            // Places the walls
            if (item === "W") {
                drawTiles(bloodyWall, c * unit + unit / 2, r * unit + unit / 2, unit, unit);
            }

            // Places the keys
            else if (item === "k") {
                drawTiles(key, c * unit + unit / 2, r * unit + unit / 2, unit, unit);
            }

            // Places the coins
            else if (item === "c") {
                drawTiles(coin, c * unit + unit / 2, r * unit + unit / 2, unit * 1.25, unit * 1.25);
            }

            // Places the door
            else if (item === "D") {
                //  If the player has enough keys, the door is opened
                if (keys.length >= maxKeys) {
                    drawTiles(ground, c * unit + unit / 2, r * unit + unit / 2, unit, unit);
                }
                // If not, the door stays locked
                else {
                    drawTiles(door, c * unit + unit / 2, r * unit + unit / 2, unit, unit);
                }
            }
        }
    }
}


// Sets game variables and functions when the game starts
function startGame() {
    // Sets the player initial position
    setPlayer();

    // Numbers of items to place
    // Creates the items on the grid
    const coinsToPlace = 3; // How many keys the createGridItems will draw
    createGridItems(coinsToPlace, "c"); // Handles drawing the keys
    const keysToPlace = 2; // How many keys the createGridItems will draw
    createGridItems(keysToPlace, "k"); // Handles drawing the keys
    const doorsToPlace = 1; // How many keys the createGridItems will draw
    createGridItems(doorsToPlace, "D"); // Handles drawing the keys

    // Resets player's lives
    lives = [true, true, true]; // Reset the lives

    // Sets characters
    setEnemies(); // Creates the enemies
    setNPCs(); // Creates the NPCs

    // Sets stop watch when game starts
    if (start == null) {
        start = Date.now();
    }
}

// Creates items (keys, coins, door) on random positions
function createGridItems(gridItemsToPlace, gridItem) {
    while (gridItemsToPlace > 0) {

        // Randomly places the door on its row
        if (gridItem === "D") {
            let r = 12;
            let c = floor(random(4, cols - 4));
            // Places the item
            if (grid[r][c] === "W" && grid[r - 1][c] === " ") {
                grid[r][c] = gridItem;
                gridItemsToPlace = gridItemsToPlace - 1;
            }
        }
        // Randomly places everything else
        else {
            // Finds position
            let r = floor(random(0, rows));
            let c = floor(random(0, cols));
            // Places an item
            if (grid[r][c] === " ") {
                grid[r][c] = gridItem;
                gridItemsToPlace = gridItemsToPlace - 1;
            }
        }
    }
}

// Handles game functions when entering game state
function game() {
    drawNPCs(); // Draws the NPC
    drawEnemies(); // Draws the enemy

    moveEnemies(); // Moves the enemies

    drawPlayer(); // Draws the player
    drawMask(); // Draws the mask
    drawInventoryItems();    // Draws items in inventory
    drawLives(); // Draws the player's life
    drawKeys();  // Draws the keys
    drawCoins();  // Draws the coins

    openDialogue(); // Shows the dialogue wih the NPCs

    stopWatch(); // Starts the stop watch
}

// Draws the items on the grid
function drawTiles(asset, c, r, sizeC, sizeR) {
    push();
    noFill();
    noStroke();
    imageMode(CENTER);
    image(asset, c, r, sizeC, sizeR)
    pop();
}

// Draws the menu screens
function drawMenu(background, contentFill, messageSize, menuMessage, contentText) {
    // Screen appearance
    push();
    noStroke();
    noFill();
    imageMode(CENTER);
    image(background, width / 2, height / 2, width, width)
    pop();
    // Title
    push();
    textFont(fantasyFont);
    fill(255);
    stroke(0);
    strokeWeight(unit / 8);
    textSize(unit);
    textAlign(CENTER, CENTER);
    text("Goblin and Dungeon:", width / 2, height / 6);
    strokeWeight(unit / 10);
    textSize(unit / 1.35);
    text("Escape the Last Level", width / 2, height / 4);
    pop();
    // Menu content
    // Menu message
    push();
    textFont(gothicFont);
    fill(contentFill);
    stroke(0);
    strokeWeight(unit / 10);
    textSize(messageSize);
    textAlign(CENTER, TOP);
    text(menuMessage, width / 2, height / 3.5);
    pop();
    // Menu infos
    pop();
    push();
    textFont(gothicFont);
    fill(contentFill);
    stroke(0);
    strokeWeight(unit / 18);
    textSize(unit / 1.5);
    textAlign(CENTER, TOP);
    text(contentText, width / 2, height / 2.75);
    pop();
}

// Sets the player at its initial position
function setPlayer() {
    let playerPlaced = false;
    while (playerPlaced === false) {
        let r = 1;
        let c = floor(random(1, cols - 1));
        // Place an enemy on an empty tile
        if (grid[r][c] === " ") {

            player.r = 0;
            player.c = c;
            grid[player.r][player.c] = "N";
            playerPlaced = true;
        }
    }
}

// Sets the characters (NPCS, enemies) on the grid
function setCharacters(charactersToPlace, characters, createCharacter) {
    while (charactersToPlace > 0) {

        // Finds position
        let r = floor(random(1, rows));
        let c = floor(random(0, cols));
        // Places an enemy on an empty tile
        if (grid[r][c] === " ") {
            const newCharacter = createCharacter(r, c);

            characters.push(newCharacter);
            charactersToPlace = charactersToPlace - 1;
        }
    }
}

function setNPCs() {
    npcSpeechIndex = 0;
    setCharacters(npcTotal, npcs, createNPC);
}

function setEnemies() {
    setCharacters(enemiesTotal, enemies, createEnemy);
}

// Creates the enemies
function createEnemy(r, c) {
    const enemy = {
        r: r,
        c: c,
        size: unit,
        direction: 1,
        moveInterval: adjustedMoveInterval, // Adjusted in setup
        moveTime: 0
    };
    return enemy;
}

// Creates the NPCs
function createNPC(r, c) {
    const npc = {
        r: r,
        c: c,
        size: unit,
        name: random(npcNames.deities),
        speech: npcSpeech[npcSpeechIndex]
    };
    npcSpeechIndex++;
    return npc;
}

// Draws the characters (enemies, NPCs)
function drawCharacters(characters, characterAsset) {
    for (let character of characters) {
        push();
        noStroke();
        noFill();
        imageMode(CENTER);
        const c = character.c * unit + unit / 2;
        const r = character.r * unit + unit / 2;
        const size = unit;
        image(characterAsset, c, r, size, size);
        pop();
    }
}

// Draws the NPCs (wizards)
function drawNPCs() {
    drawCharacters(npcs, wizard)
}

// Draws the enemies (rabbits)
function drawEnemies() {
    drawCharacters(enemies, rabbit)
}

// Draws the player
function drawPlayer() {
    push();
    noFill();
    noStroke();
    imageMode(CENTER);
    image(goblin, player.c * unit + unit / 2, player.r * unit + unit / 2, unit, unit)
    pop();
}

// Draws the items (keys, coins, lives) in the inventory
function drawInventoryItems(maxItems, items, inventoryItem, itemAsset, itemAssetOutline) {
    for (let i = 0; i < maxItems; i++) {
        push();
        noStroke();
        noFill();
        imageMode(CENTER);
        let c;
        if (inventoryItem === inventoryLife) {
            c = (inventoryItem.c - i - 0.5) * unit;
        }
        else {
            c = (inventoryItem.c + i + 0.5) * unit;
        }
        // * (unit / 1.2) + unit / 1.5;
        const r = (inventoryItem.r + 0.5) * unit;
        // + unit / 1.5;
        const size = unit * 1.25;
        // Displays items if collected
        if (i < items.length) {
            image(itemAsset, c, r, size, size);
        }
        // Displays items outline if not collected
        else {
            image(itemAssetOutline, c, r, size, size);
        }
        pop();
    }
}

// Draws the lives in the inventory
function drawLives() {
    drawInventoryItems(maxLives, lives, inventoryLife, heart, heartOutline)
}

// Draws the keys in the inventory
function drawKeys() {
    drawInventoryItems(maxKeys, keys, inventoryKey, key, keyOutline)
}

// Draws the coins in the inventory
function drawCoins() {
    drawInventoryItems(maxCoins, coins, inventoryCoin, coin, coinOutline)
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
                // Checks collision with the player
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

// Handles dialogue and dialogue window when talking to the NPCs
function openDialogue() {
    for (let npc of npcs) {
        // Draws dialogue if player on same tile as NPC
        if (player.c === npc.c && player.r === npc.r) {
            // Dialogue window
            push();
            stroke(255, 95); // White with slightly reduced opacity
            strokeWeight(2);
            fill(0, 200); // Black with reduced opacity 
            rect(5 * unit, 12.125 * unit, 9.75 * unit, 1.75 * unit);

            // Dialogue text
            // NPC name
            fill(255); // White
            textFont(fantasyFont);
            textAlign(TOP, LEFT);
            textSize(unit / 2);
            text(npc.name + ":\n", 5.25 * unit, 12.625 * unit);
            // NPC dialogue
            textFont(gothicFont);
            textAlign(CENTER, LEFT);
            textSize(unit / 3);
            text(npc.speech, 5.125 * unit, 13.125 * unit, 9.625 * unit, 1.5 * unit);
            pop();
            console.log(npc.speech);
            dialogueOn = true;
            currentNPC = npc;

            return;
        }
    }
    // Disables dialogue
    dialogueOn = false;
    currentNPC = undefined;
}

// Formats stop watch and score time
function timeFormatting(totalMillis) {
    // const totalMillis = yourTime + (start != null ? Date.now() - start : 0);
    const ms = Math.floor(totalMillis % 1000 / 10);
    const s = Math.floor(totalMillis / 1000) % 60;
    const m = Math.floor(totalMillis / 1000 / 60) % 60;
    return `${nf(m, 2)}:${nf(s, 2)}.${nf(ms, 2)}`;
}

// Draws the stop watch on the top left corner of the screen
function stopWatch() {
    const totalMillis = yourTime + (start != null ? Date.now() - start : 0);
    const string = timeFormatting(totalMillis);

    fill(255);
    textFont(pixelFont);
    textAlign(LEFT, CENTER);
    textSize(unit / 2.5);
    text(string, 16 * unit, 13.5 * unit);
}

// Checks and handles losing lives
function checkDeath(enemy) {
    // Player loses a life if collision with an enemy
    if (player.c === enemy.c && player.r === enemy.r) {
        lives.pop();
    }
    // Player loses the game if no lives left
    if (lives.length <= 0) {
        state = "lost";
    }
}

// Draws the mask that hide the grid
function drawMask() {
    push();
    noFill();
    noStroke();
    imageMode(CENTER);
    image(night, player.c * unit + unit / 2, player.r * unit + unit / 2, mask.size, mask.size)
    pop();
}

/**
* Handles player movement and menu controls
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
            // location.reload();
            resetGame();
        }
    }

    // Space
    if (keyCode === 32) {
        if (state === "start" && grid !== undefined) {
            state = "game";
            startGame();
        }
        // Handles dialogue interactions with NPCs
        else if (state === "game" && dialogueOn) {
            // Lets you get a key for a life
            if (currentNPC && currentNPC.speech && currentNPC.speech.indexOf("key") !== -1) {
                console.log("Accepted key offer");
                if (keys.length < maxKeys && lives.length > 1) {
                    lives.pop();
                    keys.push(true);
                }
            }
            // Lets you get a life for three coins
            else if (currentNPC && currentNPC.speech && currentNPC.speech.indexOf("coins") !== -1) {
                console.log("Accepted coin offer");
                if (lives.length < maxLives && coins.length >= maxCoins) {
                    coins = [];
                    lives.push(true);
                }

            }
        }
        // Space lets you replay if game lost
        else if (state === "lost") {
            resetGame();
        }
        // Space lets you play the first level if game won
        else if (state === "win") {
            window.open("https://dash-design.github.io/CART-253/topics/assignments/variation-jam/variation-jam-1/");
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
        else if (grid[newR][newC] === `k`) {
            // If it's a key then empty that spot
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
        else if (grid[newR][newC] === `c`) {
            // If it's a coin then empty that spot
            grid[newR][newC] = ` `;
            // Then the player moves there
            player.r = newR;
            player.c = newC;
            if (coins.length < maxCoins) {
                // Increase the number of coins that the player has
                coins.push(true);
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
}