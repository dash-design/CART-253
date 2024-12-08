/**
 * Goblin and Dungeon: Explore Level 1
 * 
 * Ellie "DASH" Desjardins
 * 
 * Goblin and Dungeon is a retro-inspired 2D top-down action-adventure game with a roguelite-inspired map generation.
 * Each play through features a unique dungeon layout with a grid-based movement, collectibles, NPCs, and obstacles.
 * You play as the lone goblin exploring, adventuring, and escaping unknown environments, but beware the dangerous killer rabbits!
 * 
 * Use [A][W][S][D] keys to move around, collect keys and escape through the door.
 * 
 * Use [SPACE] and [R] to interact with the menus and the NPCs
 * 
 * Explore the small world of Goblin and Dungeon through a cozy stroll in the woods.
 * 
 * Meet our friendly NPCs, collect cool things, and cross to the next level!
 *
 */

"use strict";

// The game grid
let baseGrid = [
    ["R", " ", " ", " ", " ", " ", "R", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", "W", "W", "W"],
    ["R", " ", " ", " ", " ", " ", "R", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["R", "R", "R", "R", "R", "R", "R", "R", " ", " ", " ", " ", " ", " ", " ", " ", "R", " ", " ", "W"],
    ["N", " ", " ", " ", " ", " ", " ", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", " ", " ", "W"],
    ["N", " ", " ", " ", " ", " ", " ", "R", " ", " ", " ", " ", " ", " ", " ", " ", "R", " ", " ", "W"],
    ["N", " ", " ", " ", " ", " ", " ", "R", " ", " ", " ", " ", " ", " ", " ", "N", "B", " ", "k", "D"],
    ["N", " ", " ", " ", " ", " ", " ", "R", " ", " ", " ", " ", " ", " ", " ", " ", "R", " ", " ", "W"],
    ["N", " ", " ", " ", " ", " ", " ", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", " ", " ", "W"],
    ["R", "R", "R", "R", "R", "R", "R", "R", " ", " ", " ", " ", " ", " ", " ", " ", "R", " ", " ", "W"],
    ["R", " ", " ", " ", " ", " ", "R", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["R", " ", " ", " ", " ", " ", "R", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
];

let grid = [
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
    ["W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W", "W"],
];

// Number of rows and columns and standard unit size
// Need to be adjusted according to the grid array
const rows = 13; // Serves as the Y
const cols = 20; // Serves as the X
let unit = 64; // Grid tiles size

// Game elements
let pixelFont;

let gothicFont;

let fantasyFont;

let goblin;

let rabbit;

let mossyWall;

let ground;

let darkGround;

let water;

let coin;

let coinOutline;

let door;

let key;

let keyOutline;

let heart;

let heartOutline;

let wizard;

let note;

let noteOutline;

let brickObject;

let npcNames;

let npcName;

let night;

// Preload game assets
function preload() {
    pixelFont = loadFont('assets/font/slkscr.ttf'); // Stop watch font
    gothicFont = loadFont('assets/font/alagard.ttf'); // Menu and dialogue font
    fantasyFont = loadFont('assets/font/Alkhemikal.ttf'); // Title and NPC name font
    goblin = loadImage('assets/images/goblin.png'); // Player
    rabbit = loadImage('assets/images/rabbit.png'); // Enemies
    mossyWall = loadImage('assets/images/brick.png'); // Wall tiles
    brickObject = loadImage('assets/images/brickblock.png'); // Wall tiles
    ground = loadImage('assets/images/grass.png'); // Empty tiles
    darkGround = loadImage('assets/images/ground.png'); // Empty tiles
    water = loadImage('assets/images/water.png'); // Empty tiles
    coin = loadImage('assets/images/coin.png'); // Coins
    coinOutline = loadImage('assets/images/coinoutline.png'); // Coins outline (for the inventory)
    note = loadImage('assets/images/paper.png'); // Coins
    noteOutline = loadImage('assets/images/paperoutline.png'); // Coins outline (for the inventory)
    door = loadImage('assets/images/door.png'); // Door tile
    key = loadImage('assets/images/key.png'); // Keys
    keyOutline = loadImage('assets/images/keyoutline.png'); // Keys outline (for the inventory)
    heart = loadImage('assets/images/heart.png'); // Lives
    heartOutline = loadImage('assets/images/heartoutline.png'); // Lives outline (for the inventory)
    wizard = loadImage('assets/images/wizard.png'); // NPCs
    npcNames = loadJSON('assets/data/lovecraft.json'); // Names of NPCs
}

// Player variables
let player = {
    r: 5,
    c: 0,
    size: unit
}

// Life variables in the inventory
let inventoryLife = {
    r: 11,
    c: 19,
    size: unit * 1.125
}
const maxLives = 3; // Max number of lives
let lives = [true, true, true]; // Default number of lives

// Key variables in the inventory
let inventoryKey = {
    r: 12,
    c: 19,
    size: unit
}
const maxKeys = 3; // Max number of keys
let keys = []; // Array of keys

// Coin variables in the inventory
let inventoryCoin = {
    r: 11,
    c: 0,
    size: unit * 1.25
}

const maxCoins = 3; // Max number of coins
let coins = []; // Array of coins

// Paper variables in the inventory
let inventoryPaper = {
    r: 12,
    c: 0,
    size: unit * .75
}
const maxPapers = 3; // Max number of coins
let papers = []; // Array of coins

// Enemies variables
let rabbitsTotal = 5; // Total amount of enemies
let rabbits = []; // Array of enemies
// Variables used for dynamic enemies movement
let fps; // Default frame rate
let adjustedMoveInterval; // Default move interval

let crushersTotal = 5; // Total amount of enemies
let crushers = []; // Array of enemies

// NPCs variables
let npcTotal = 2; // Total number of NPCs
let npcs = []; // Array of NPCs

let currentNPC = undefined;

let bridgeOpen = false;

// The NPCs dialogues
let npcSpeech = [
    [
        "Hey you! I need your help",
        "You look like you could use an extra key.",
        "Am I right?",
        "Well, got a deal for you.",
        "I lost some important letters, bring them to me and I will give you a key.",
        "Deal?",
        "Then get going!"
    ],
    [
        "Hello adventurer!",
        "It has been a long time since I had company...",
        "Would you indulge old me?",
        "Grandiose!",
        "My name is ${npc.name} by the way.",
        "You know, you remind me of my younger self.",
        "You see, I was an adventurer like you...",
        "Until I took an arrow to the knee.",
        "I lived so many different adventures in my youth you know.",
        "Am I boring you with those old stories?",
        "No? Good.",
        "Where was I? Ah yes.",
        "I was just like you, running around unknown dangers...",
        "... until the day the youknowwhat to the knee.",
        "The youknowwhat being an...",
        "An ARROW, exactly!",
        "Bravo, you are indead listening.",
        "Anyhow, I am quite busy you see.",
        "So I have to cut this little conversation of yours short.",
        "See you adventurer!"
    ],
    [
        "You there! Yeah you!",
        "Don't take another step!",
        "I am ${npc.name}, guardian of this bridge.",
        "Only I can let you cross.",
        "And it will cost you, let me tell you.",
        "Three coins is my price.",
        "For three coins I will raise the bridge and let you accross.",
        "Well, where are my coins?"
    ]
];

let npcSpeechIndex = {};

// NPCs dialogue box variables
let dialogueBox = {
    r: 8,
    c: 3,
    size: unit
}
let dialogueOn = false; // Off by default

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

    fps = frameRate() || 60; // Calculates the frame rate or set it to 60
    // adjustedMoveInterval = floor(fps / 4); // Adjusts the move interval according to the FPS

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
        drawMenu(mossyWall, home.textFill, textSize, home.message, home.text);
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
        drawMenu(mossyWall, end.textFill, textSize, end.message, end.text);
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

Press [R] To Play The Next Level!
Press [SPACE] To Play Again
`;
        let textSize = unit / 1.5;
        drawMenu(ground, end.textFill, textSize, end.message, end.text);

        start = null;
    }
}

function resetGame() {
    console.log("reset game");
    start = null;
    yourTime = 0;
    rabbits = [];
    crushers = [];
    npcs = [];
    keys = [];
    coins = [];
    papers = [];
    lives = [true, true, true];
    player = {
        r: 5,
        c: 0
    };
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Removes the item at this position
            grid[r][c] = " ";
        }
    }
    setGrids();
    if (grid !== undefined) {
        state = "game";
        startGame();
    }
}

function setGrids() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            grid[r][c] = baseGrid[r][c];
        }
    }
}

// Populates the grid with items
function createGrid(gridToCreate) {
    // Goes through all the rows and columns
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Gets the item at this position
            let item = gridToCreate[r][c];

            // Draws the grid and uses the ground asset by default
            drawTiles(ground, c * unit + unit / 2, r * unit + unit / 2, unit, unit);

            // Places the walls
            if (item === "W") {
                drawTiles(mossyWall, c * unit + unit / 2, r * unit + unit / 2, unit, unit);
            }

            // Places the water
            if (item === "R") {
                drawTiles(water, c * unit + unit / 2, r * unit + unit / 2, unit, unit);
            }

            // Places the movable walls
            if (item === "w") {
                drawTiles(brickObject, c * unit + unit / 2, r * unit + unit / 2, unit, unit);
            }

            // Places the dark ground
            if (item === "d") {
                drawTiles(darkGround, c * unit + unit / 2, r * unit + unit / 2, unit, unit);
            }

            // Places the keys
            else if (item === "k") {
                drawTiles(key, c * unit + unit / 2, r * unit + unit / 2, unit, unit);
            }

            // Places the coins
            else if (item === "c") {
                drawTiles(coin, c * unit + unit / 2, r * unit + unit / 2, unit * 1.25, unit * 1.25);
            }

            // Places the papers
            else if (item === "p") {
                drawTiles(note, c * unit + unit / 2, r * unit + unit / 2, unit / 1.5, unit / 1.5);
            }

            // Places the door
            else if (item === "D") {
                //  If the player has enough keys, the door is opened
                if (keys.length >= maxKeys) {
                    drawTiles(ground, c * unit + unit / 2, r * unit + unit / 2, unit, unit);

                    // image(ground, c * unit + unit / 2, r * unit + unit / 2, unit, unit)
                }
                // If not, the door stays locked
                else {
                    drawTiles(door, c * unit + unit / 2, r * unit + unit / 2, unit, unit);
                    // image(door, c * unit + unit / 2, r * unit + unit / 2, unit, unit)
                }
            }
            // Places the bridge
            else if (item === "B") {
                //  If the player has enough keys, the door is opened
                if (bridgeOpen === true) {
                    drawTiles(mossyWall, c * unit + unit / 2, r * unit + unit / 2, unit, unit);
                }
                // If not, the door stays locked
                else {
                    drawTiles(water, c * unit + unit / 2, r * unit + unit / 2, unit, unit);
                }
            }
        }
    }
}

// Sets game variables and functions when the game starts
function startGame() {
    const wallsToPlace = 8; // How many walls the createGridItems will draw
    const keysToPlace = 1; // How many keys the createGridItems will draw
    const coinsToPlace = 3; // How many keys the createGridItems will draw
    const papersToPlace = 3; // How many keys the createGridItems will draw

    createGridItems(wallsToPlace, "w"); // Handles drawing the walls
    createGridItems(keysToPlace, "k"); // Handles drawing the keys
    createGridItems(coinsToPlace, "c"); // Handles drawing the coins
    createGridItems(papersToPlace, "p"); // Handles drawing the coins


    grid[player.r][player.c] = "N"; // Handles player initial position

    lives = [true, true, true]; // Reset the lives

    setRabbits(); // Creates the enemies
    setCrushers();
    setNPCs(); // Creates the NPCs

    // Sets stop watch when game starts
    if (start == null) {
        start = Date.now();
    }
}

// Creates items (walls and keys) on random positions
function createGridItems(gridItemsToPlace, gridItem) {
    while (gridItemsToPlace > 0) {
        let r;
        let c;
        if (gridItem === "w") {
            if (gridItemsToPlace <= 3) {
                r = floor(random(3, 7));
                c = floor(random(1, 6));
            }
            else {
                do {
                    r = floor(random(0, rows - 2));
                    c = floor(random(1, cols - 3));
                }
                while (r >= 3 && r <= 7);
            }
        }
        else {
            r = floor(random(1, rows - 2));
            c = floor(random(1, cols - 3));
        }

        // Place an item
        if (grid[r][c] === " " && grid[r][c] !== "N") {
            grid[r][c] = gridItem;
            gridItemsToPlace = gridItemsToPlace - 1;
        }
    }
}

// Handles game functions when entering game state
function game() {
    drawNPCs(); // Draws the NPC
    drawRabbits(); // Draws the enemy
    drawCrushers();

    moveEnemies(); // Moves the enemies

    drawPlayer(); // Draws the player
    drawInventoryItems(); // Draws items in inventory
    drawLives(); // Draws the player's life
    drawKeys();  // Draws the keys
    drawCoins();  // Draws the coins
    drawPapers();  // Draws the coins

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
    text("Explore Level 1", width / 2, height / 4);
    pop();
    // Menu content
    // Menu message
    push();
    textFont(gothicFont);
    fill(contentFill);
    stroke(0);
    strokeWeight(unit / 12);
    textSize(messageSize);
    textAlign(CENTER, TOP);
    text(menuMessage, width / 2, height / 3.5);
    pop();
    // Menu infos
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

function setCharacters(charactersToPlace, characters, createCharacter) {
    let occupiedCol = [];
    for (let i = 0; i < cols; i++) {
        occupiedCol[i] = false;
    }

    let givenSpeeches = [];
    for (let i = 0; i < charactersToPlace; i++) {
        givenSpeeches.push(i);
    }

    while (charactersToPlace > 0) {

        let r;
        let c;

        if (characters === crushers) {
            const openRows = [4, 5, 6];
            r = random(openRows);
            do {
                c = floor(random(9, 15));
            }
            while (occupiedCol[c]);

            occupiedCol[c] = true;
        }
        else if (characters === rabbits) {
            // Find position  
            do {
                r = floor(random(1, rows));
                c = floor(random(1, cols));
            }
            while (r >= 4 && r <= 6 && c >= 8 && c < cols - 4);
        }
        else if (characters === npcs) {
            if (givenSpeeches[charactersToPlace - 1] === 2) {
                r = 5;
                c = cols - 5;
            }
            else {
                do {
                    r = floor(random(0, rows));
                    c = floor(random(1, cols - 3));
                }
                while (r > 1 && r < 9);
            }
        }
        // Place an enemy on an empty tile
        if (characters === npcs) {
            if (grid[r][c] === " " || grid[r][c] === "N") {
                const npcSpeechIndex = givenSpeeches.pop();
                const newCharacter = createCharacter(r, c, npcSpeechIndex);

                characters.push(newCharacter);
                charactersToPlace = charactersToPlace - 1;
            }
        }
        else if (characters === rabbits || characters === crushers) {
            if (grid[r][c] === " ") {
                const newCharacter = createCharacter(r, c);

                characters.push(newCharacter);
                charactersToPlace = charactersToPlace - 1;
            }
        }
    }
}

function setNPCs() {
    setCharacters(npcSpeech.length, npcs, createNPC)
}

function setRabbits() {
    setCharacters(rabbitsTotal, rabbits, createRabbits)
}

function setCrushers() {
    setCharacters(crushersTotal, crushers, createCrushers)
}

// Creates the enemies
function createRabbits(r, c) {
    adjustedMoveInterval = floor(fps / 4); // Adjusts the move interval according to the FPS
    const rabbit = {
        r: r,
        c: c,
        size: unit,
        direction: 1,
        moveInterval: adjustedMoveInterval, // Adjusted in the draw function
        moveTime: 0
    };
    return rabbit;
}

function createCrushers(r, c) {
    adjustedMoveInterval = floor(fps / 1.5); // Adjusts the move interval according to the FPS
    const crusher = {
        r: r,
        c: c,
        size: unit,
        direction: 1,
        moveInterval: adjustedMoveInterval, // Adjusted in the draw function
        moveTime: 0
    };
    return crusher;
}

// Creates the NPCs
function createNPC(r, c, npcSpeechIndex) {
    const npc = {
        r: r,
        c: c,
        size: unit,
        name: random(npcNames.deities),
        speech: npcSpeech[npcSpeechIndex],
        speechIndex: 0
    };
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
function drawRabbits() {
    drawCharacters(rabbits, rabbit)
}

function drawCrushers() {
    drawCharacters(crushers, brickObject)
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

// Draws the items (keys, lives) in the inventory
function drawInventoryItems(maxItems, items, inventoryItem, itemAsset, itemAssetOutline) {
    for (let i = 0; i < maxItems; i++) {
        push();
        noStroke();
        noFill();
        imageMode(CENTER);
        let c;
        if (inventoryItem === inventoryLife || inventoryItem === inventoryKey) {
            c = (inventoryItem.c - i) * (unit);
            // * (unit / 1.2) + unit / 1.5;
        }
        else {
            c = (inventoryItem.c + i + 1) * (unit * 0.75);
            // * (unit / 1.2) + unit / 1.5;
        }
        const r = (inventoryItem.r + 0.5) * unit;
        // + unit / 1.5;
        const size = inventoryItem.size;
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

function drawLives() {
    inventoryLife.size = unit * 1.125;
    drawInventoryItems(maxLives, lives, inventoryLife, heart, heartOutline)
}

// Draws the keys in the inventory
function drawKeys() {
    inventoryKey.size = unit;
    drawInventoryItems(maxKeys, keys, inventoryKey, key, keyOutline)
}

// Draws the coins in the inventory
function drawCoins() {
    inventoryCoin.size = unit * 1.25;
    drawInventoryItems(maxCoins, coins, inventoryCoin, coin, coinOutline)
}

// Draws the coins in the inventory
function drawPapers() {
    inventoryPaper.size = unit * .75;
    drawInventoryItems(maxPapers, papers, inventoryPaper, note, noteOutline)
}

// Moves the enemies
function moveEnemies() {

    for (let rabbit of rabbits) {
        rabbit.moveTime++;
        if (rabbit.moveTime >= rabbit.moveInterval) {

            if ((rabbit.r <= 2 || rabbit.r >= 9) && rabbit.c !== cols - 3) {
                // Next col according to the enemy direction
                let nextCol = rabbit.c + rabbit.direction;

                // Checks if next col is valid
                if (nextCol >= 0 && nextCol < cols && grid[rabbit.r][nextCol] !== "W" && grid[rabbit.r][nextCol] !== "R" && grid[rabbit.r][nextCol] !== "w") {
                    // Lets the enemy move if it is valid
                    rabbit.c += rabbit.direction;
                    // Checks collision with the player
                    checkDeath(rabbit);
                }
                else {
                    // Makes the enemy change direction 
                    rabbit.direction *= -1;
                }
            }
            else {
                // Next col according to the enemy direction
                let nextRow = rabbit.r + rabbit.direction;

                // Checks if next col is valid
                if (nextRow >= 0 && nextRow < rows - 2 && grid[nextRow][rabbit.c] !== "W" && grid[nextRow][rabbit.c] !== "R" && grid[nextRow][rabbit.c] !== "w") {
                    // Lets the enemy move if it is valid
                    rabbit.r += rabbit.direction;
                    // Checks collision with the player
                    checkDeath(rabbit);
                }
                else {
                    // Makes the enemy change direction 
                    rabbit.direction *= -1;
                }
            }
            // Resets enemy movement
            rabbit.moveTime = 0;
        }
    }
    for (let crusher of crushers) {
        crusher.moveTime++;
        if (crusher.moveTime >= crusher.moveInterval) {
            // Next col according to the enemy direction
            let nextRow = crusher.r + crusher.direction;

            // Checks if next col is valid
            if (nextRow >= 0 && nextRow < rows - 2 && grid[nextRow][crusher.c] !== "W" && grid[nextRow][crusher.c] !== "R" && grid[nextRow][crusher.c] !== "w") {
                // Lets the enemy move if it is valid
                crusher.r += crusher.direction;
                // Checks collision with the player
                checkDeath(crusher);
            }
            else {
                // Makes the enemy change direction 
                crusher.direction *= -1;
            }
            // Resets enemy movement
            crusher.moveTime = 0;
        }
    }
}

// Handles dialogue and dialogue window when talking to the NPCs
function openDialogue() {
    for (let npc of npcs) {
        if (player.c === npc.c && player.r === npc.r) {
            // Dialogue window
            push();
            stroke(255, 95); // White with slightly reduced opacity
            strokeWeight(2);
            fill(0, 200); // Black with reduced opacity 
            rect(5 * unit, 11.125 * unit, 8.75 * unit, 1.75 * unit);

            // NPC name
            fill(255); // White
            textFont(fantasyFont);
            textAlign(TOP, LEFT);
            textSize(unit / 2);
            text(npc.name + ":\n", 5.25 * unit, 11.625 * unit);
            // NPC dialogue
            textFont(gothicFont);
            textAlign(CENTER, LEFT);
            textSize(unit / 3);
            text(npc.speech[npc.speechIndex], 5.125 * unit, 12.125 * unit, 8.625 * unit, 1.5 * unit);
            pop();

            dialogueOn = true;
            currentNPC = npc;
            return;
        }
    }
    // If no NPC found in same tile
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
    textAlign(RIGHT, CENTER);
    textSize(unit / 2.5);
    text(string, unit * 19, unit / 2);
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
            window.open("https://dash-design.github.io/CART-253/topics/assignments/variation-jam/variation-jam-2/");
        }
    }

    // Space
    if (keyCode === 32) {
        if (state === "start" && grid !== undefined) {
            state = "game";
            startGame();
        }
        else if (state === "game" && dialogueOn) {
            if (currentNPC) {
                if (currentNPC.speech === npcSpeech[0]) {
                    if (papers.length < maxPapers && currentNPC.speechIndex < currentNPC.speech.length - 2) {
                        currentNPC.speechIndex++;
                    }
                    else if (papers.length >= maxPapers && currentNPC.speechIndex < currentNPC.speech.length - 1) {
                        currentNPC.speechIndex++;
                        papers = [];
                        keys.push(true);
                    }
                }
                else if (currentNPC.speech === npcSpeech[1]) {
                    if (currentNPC.speechIndex < currentNPC.speech.length - 1) {
                        currentNPC.speechIndex++;
                        if (keys.length < maxKeys && currentNPC.speechIndex === currentNPC.speech.length - 1) {
                            keys.push(true);
                        }
                    }
                }
                else if (currentNPC.speech === npcSpeech[2]) {
                    if (coins.length < maxCoins && currentNPC.speechIndex < currentNPC.speech.length - 2) {
                        currentNPC.speechIndex++;
                    }
                    else if (coins.length >= maxCoins && currentNPC.speechIndex < currentNPC.speech.length - 1) {
                        currentNPC.speechIndex++;
                        if (currentNPC.speechIndex === currentNPC.speech.length - 1) {
                            coins = [];
                            bridgeOpen = true;
                        }
                    }
                }
            }
        }



        else if (state === "lost") {
            resetGame();
        }
        else if (state === "win") {
            resetGame();
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
        else if (grid[newR][newC] === `B`) {
            if (bridgeOpen === true) {
                player.r = newR;
                player.c = newC;
                moved = true;
            }
        }
        else if (grid[newR][newC] === `w`) {

            let playerDirR = newR - player.r;
            let playerDirC = newC - player.c;

            let newBlockR = newR + playerDirR;
            let newBlockC = newC + playerDirC;

            if (newBlockR >= 0 && newBlockR < rows && newBlockC >= 0 && newBlockC < cols && grid[newBlockR][newBlockC] === ` ` || grid[newBlockR][newBlockC] === `R`) {
                if (grid[newBlockR][newBlockC] === `R`) {
                    grid[newR][newC] = ` `;
                    grid[newBlockR][newBlockC] = ` `;
                }
                else {
                    grid[newR][newC] = ` `;
                    grid[newBlockR][newBlockC] = `w`;
                }

                // Then the player moves there
                player.r = newR;
                player.c = newC;

                moved = true;
            }
            else {
                moved = false;
            }
        }
        else if (grid[newR][newC] === `k`) {
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
        else if (grid[newR][newC] === `c`) {
            // If it's a collectible then empty that spot
            grid[newR][newC] = ` `;
            // Then the player moves there
            player.r = newR;
            player.c = newC;
            if (coins.length < maxCoins) {
                // Increase the number of keys that the player has
                coins.push(true);
            }
            moved = true;
        }
        else if (grid[newR][newC] === `p`) {
            // If it's a collectible then empty that spot
            grid[newR][newC] = ` `;
            // Then the player moves there
            player.r = newR;
            player.c = newC;
            if (papers.length < maxPapers) {
                // Increase the number of keys that the player has
                papers.push(true);
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
            for (let rabbit of rabbits) {
                checkDeath(rabbit);
            }
            for (let crusher of crushers) {
                checkDeath(crusher);
            }
        }
    }
    return false;
}