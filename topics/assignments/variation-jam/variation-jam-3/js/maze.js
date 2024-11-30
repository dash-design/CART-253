"use strict";

let maze = null;

const rows = 14; // Serves as the Y
const cols = 19; // Serves as the X
let unit = 64; // Grid tiles size

function setup() {
    createCanvas(createCanvas(cols * unit, rows * unit));
}

function draw() {

}

function makeMaze(w, h) {
    maze = {
        "stack": [],
        "tiles": [],
        "w": w,
        "h": h
    };

    for (let i = 0; i < w; i++) {
        maze.tiles[i] = [];
        for (let j = 0; j < h; j++) {
            maze.tiles[i][j] = {
                "up": "wall",
                "down": "wall",
                "right": "wall",
                "left": "wall",
                "isStart": false,
                "isCurrent": false,
                "x": i,
                "y": j,
                "seen": false
            }
            if (i == 0 || i == w - 1 || j == 0 || j == h - 1) {
                maze.tiles[i][j].seen = true;
            }
        }
    }
    maze.tiles[1][1].isCurrent = true;
    maze.tiles[1][1].isStart = true;
    maze.tiles[1][1].seen = true;
    maze.stack.push(maze.tiles[1][1]);

}


function mazeIterate() {

    let current = maze.stack.pop();

    let tileAndWall = pickNeighbor(current)
    if (tileAndWall) {
        maze.stack.push(current);
        tileAndWall.tile[tileAndWall.wall] = "open";
    }
}

function pickNeighbor(tile) {
    let unSeen = [];

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

    if (unSeen.length == 0) {
        return null;
    }

    return unSeen[Math.floor(Math.random() * unSeen.length)];
}

function oppositeWall(wall) {
    if (wall == "up") {
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

function drawMaze() {

}

function drawTile(tile, i, j) {

}