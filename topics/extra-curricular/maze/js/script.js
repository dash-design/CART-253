"use strict";

let maze = null; // Declares the maze

const rows = 14; // Serves as the Y
const cols = 19; // Serves as the X
let unit = 25; // Tile size

// const rows = 14; // Serves as the Y
// const cols = 19; // Serves as the X
// let unit = 64; // Grid tiles size

function setup() {
    createCanvas(cols * unit, rows * unit);

    makeMaze(width / unit + 2, height / unit + 2);

    drawMaze();
}

let count = 0;

function draw() {
    // Speed at witch maze is generated
    if (count % 5 == 0) {
        // Continues until it is fully generated
        if (maze.stack.length != 0) {
            background("#4A1D91");
            mazeIterate();
            drawMaze();
        }
    }
    count++;
    // drawMaze();
}

// Creates the maze according to the width and height
// Could be exported to a JSON?
function makeMaze(w, h) {
    // Declares maze object
    maze = {
        // Stack
        "stack": [],
        // 2D array of tiles
        "tiles": [],
        // Maze width and height
        "w": w,
        "h": h
    };

    // Each tile has a up, down, right, left
    // Either with a wall, or an open path
    for (let i = 0; i < w; i++) {
        maze.tiles[i] = [];
        for (let j = 0; j < h; j++) {
            maze.tiles[i][j] = {
                "up": "wall",
                "down": "wall",
                "right": "wall",
                "left": "wall",
                // Starting tile
                "isStart": false,
                // Current tile
                "isCurrent": false,
                "x": i,
                "y": j,
                // Not seen by default
                "seen": false
            }
            if (i == 0 || i == w - 1 || j == 0 || j == h - 1) {
                maze.tiles[i][j].seen = true;
            }
        }
    }
    // Push upper left tile to the front of the stack
    // Makes it the current tile
    maze.tiles[1][1].isCurrent = true;
    maze.tiles[1][1].isStart = true;
    maze.tiles[1][1].seen = true;
    maze.stack.push(maze.tiles[1][1]);

}

// Creates one tile at a time
// Uses a stochastic depth first search graph algorithm
// To explore randomly, and backtrack
// And explore unexplored tiles
// Until all tiles are seen
function mazeIterate() {

    // Pop tile from front of stack
    let current = maze.stack.pop();

    // Push tiles generated by pickNeighbor
    // Remove a wall when neighbor is picked
    let tileAndWall = pickNeighbor(current);
    if (tileAndWall) {
        maze.stack.push(current);
        tileAndWall.tile[tileAndWall.wall] = "open";
        current[oppositeWall(tileAndWall.wall)] = "open";
        tileAndWall.tile.seen = true;
        maze.stack.push(tileAndWall.tile);

        current.isCurrent = false;
        tileAndWall.tile.isCurrent = true;
    }
    else if (maze.stack.length != 0) {
        current.isCurrent = false;
        maze.stack[maze.stack.length - 1].isCurrent = true;
    }
}

// Checks tiles around current tile that need to be transformed
function pickNeighbor(tile) {
    let unSeen = [];

    // Looks at tiles around    
    // Returns a new unseen tile
    let upTile = maze.tiles[tile.x][tile.y + 1];
    if (!upTile.seen) {
        unSeen.push({
            "tile": upTile,
            "wall": "up"
        })
    }
    let downTile = maze.tiles[tile.x][tile.y - 1];
    if (!downTile.seen) {
        unSeen.push({
            "tile": downTile,
            "wall": "down"
        })
    }
    let rightTile = maze.tiles[tile.x + 1][tile.y];
    if (!rightTile.seen) {
        unSeen.push({
            "tile": rightTile,
            "wall": "right"
        })
    }
    let leftTile = maze.tiles[tile.x - 1][tile.y];
    if (!leftTile.seen) {
        unSeen.push({
            "tile": leftTile,
            "wall": "left"
        })
    }

    // If all tiles are generated
    if (unSeen.length == 0) {
        return null;
    }

    return unSeen[Math.floor(Math.random() * unSeen.length)];
}

// Checks wall position and pick opposite
function oppositeWall(wall) {
    // Takes a direction from a string
    if (wall == "up") {
        // Returns an opposite direction 
        return "down"
    }
    else if (wall == "down") {
        return "up"
    }
    else if (wall == "right") {
        return "left"
    }
    else if (wall == "left") {
        return "right"
    }
    return -1;
}

// Draws the maze
function drawMaze() {
    // Calls drawTiles on every tiles
    push();
    translate(-unit, -unit);
    for (let i = 0; i < maze.tiles.length; i++) {
        for (let j = 0; j < maze.tiles[i].length; j++) {
            let tile = maze.tiles[i][j];
            drawTile(tile, i, j);
        }
    }
    pop();
}

// Draws the tiles of the maze
function drawTile(tile, i, j) {
    strokeWeight(0);
    // Draw tiles and walls according to directions informations of tiles
    if (tile.seen == true) {
        fill(0);
        square(i * unit, j * unit, unit);
        strokeWeight(2);
        stroke(255);
        if (tile.up == "wall") {
            line((i) * unit, (j) * unit, (i + 1) * unit, (j) * unit);
        }
        if (tile.down == "wall") {
            line((i) * unit, (j + 1) * unit, (i + 1) * unit, (j + 1) * unit);

        }
        if (tile.right == "wall") {
            line((i) * unit, (j) * unit, (i) * unit, (j + 1) * unit);

        }
        if (tile.left == "wall") {
            line((i + 1) * unit, (j) * unit, (i + 1) * unit, (j + 1) * unit);

        }
    }

    // Places a circle in the current tile
    if (tile.isCurrent) {
        fill("orange")
        noStroke();
        circle(i * unit + unit / 2, j * unit + unit / 2, unit / 2);
    }
}