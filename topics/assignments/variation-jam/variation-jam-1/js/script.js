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
];
// How many rows and columns in the grid?
const rows = 9;
const cols = 13;
// The unit size (how big a square for each tile)
let unit = 64;

// The player starts at 0,0 on the grid and starts out a bit small
let player = {
    r: 0,
    c: 6,
    size: unit / 5
}

/**
Create and populate the grid
*/
function setup() {
    createCanvas(cols * unit, rows * unit);

    // Walls
    let wallsToPlace = 9;
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
    grid[player.r][player.c] = ` `;
}

/**
Handles displaying the grid and the player
*/
function draw() {
    background(0);

    // Go through all the rows and columns
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            // Get the item at this position
            let item = grid[r][c];

            // Draw a square so we can see the grid space
            // push();
            // noStroke();
            // stroke(255);
            // noFill();
            // rect(c * unit, r * unit, unit, unit);
            // pop();

            if (item === "W") {
                push();
                fill(230, 230, 230);
                noStroke();
                rectMode(CENTER);
                rect(c * unit + unit / 2, r * unit + unit / 2, unit, unit);
                pop();
            }

            else if (item === "c") {
                push();
                fill(255, 255, 0);
                noStroke();
                rectMode(CENTER);
                ellipse(c * unit + unit / 2, r * unit + unit / 2, unit / 3, unit / 3);
                pop();
            }

            else if (item === "D") {
                push();
                fill(0, 255, 0);
                noStroke();
                rectMode(CENTER);
                rect(c * unit + unit / 2, r * unit + unit / 2, unit, unit);
                pop();
            }



            // // Display the item (as text for now)
            // push();
            // // fill(255, 255, 255);
            // // noStroke();
            // // rectMode(CENTER);
            // // rect(c * unit + unit / 2, r * unit + unit / 2, unit, unit);
            // textSize(unit);
            // textAlign(CENTER, CENTER);
            // fill(255);
            // text(item, c * unit + unit / 2, r * unit + unit / 2);
            // pop();
        }
    }

    // Display the player
    push();
    fill(255, 0, 0);
    noStroke();
    rectMode(CENTER);
    rect(player.c * unit + unit / 2, player.r * unit + unit / 2, player.size, player.size);
    pop();
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