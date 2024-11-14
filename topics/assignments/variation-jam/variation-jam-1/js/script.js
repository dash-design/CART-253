/**
 * Title of Project
 * Ellie "DASH" Desjardins
 * 
 * Description of the project
 *
 */

"use strict";

/**
A primitive grid-based program that you can move around in and
collect the letter O, and where the W serves as a wall
*/

let grid = [];
// How many rows and columns in the grid?
let rows = 15;
let cols = 11;
// The unit size (how big a square for each tile)
let unit = 64;

// What are the possible things can can be put in the grid?
// Here it's just a (W) wall and (c) collectible. There empty
// strings are there to make it more likely we put "nothing" in
// a grid space
let walls = [`W`, ``, ``, ``, ``];
let items = [`c`, ``, ``, ``, ``, ``, ``];

// The player starts at 0,0 on the grid and starts out a bit small
let player = {
    r: 7,
    c: 0,
    size: unit / 5
}

/**
Create and populate the grid
*/
function setup() {
    createCanvas(rows * unit, cols * unit);

    // Go through the grid's rows
    for (let r = 0; r < rows; r++) {
        // For each row add an empty array to represent the row
        grid.push([]);
        // Go through all the columns in this row
        for (let c = 0; c < cols; c++) {
            // Choose a random item to add at this position
            // (A W, c, or nothing)
            let item = random(items);
            let wall = random(walls);
            // Add it to the row
            grid[r].push(item);
            grid[r].push(wall);
        }
    }
    // Make the position the player starts at empty!
    grid[player.r][player.c] = ``;
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
            push();
            stroke(255);
            noFill();
            rect(r * unit, c * unit, unit, unit);
            pop();

            // Display the item (as text for now)
            push();
            textSize(unit);
            textAlign(CENTER, CENTER);
            fill(255);
            text(item, r * unit + unit / 2, c * unit + unit / 2);
            pop();
        }
    }

    // Display the player
    push();
    fill(255, 0, 0);
    noStroke();
    rectMode(CENTER);
    rect(player.r * unit + unit / 2, player.c * unit + unit / 2, player.size, player.size);
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
        newR -= 1;
    }
    // D
    else if (keyCode === 68) {
        newR += 1;
    }
    // W
    else if (keyCode === 87) {
        newC -= 1;
    }
    // S
    else if (keyCode === 83) {
        newC += 1;
    }

    // Constrain so the player can't walk off the edges
    newR = constrain(newR, 0, rows - 1);
    newC = constrain(newC, 0, cols - 1);

    // Now check what is at the position the player tried to move to
    if (grid[newR][newC] === ``) {
        // If nothing, they can just move there
        player.r = newR;
        player.c = newC;
    }
    else if (grid[newR][newC] === `c`) {
        // If it's a collectible then empty that spot
        grid[newR][newC] = ``;
        // Make the player grow (but constrain to the unit size)
        player.size += unit / 10;
        player.size = constrain(player.size, 0, unit);
        // And let them move to that space
        player.r = newR;
        player.c = newC;
    }
}