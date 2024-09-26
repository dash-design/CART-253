/**
 * Circle Master
 * Pippin Barr
 *
 * This will be a program in which the user can move a circle
 * on the canvas using their own circle to "lead" it around.
 */

const puck = {
    x: 300,
    y: 300,
    size: 100,
    fill: "#ff0000"
};

const target = {
    x: 200,
    y: 200,
    size: 50,
    fill: "#ffff00",
    fills: {
        noOverlap: "#ffff00",
        overlap: "#fffff0"
    }
};

const user = {
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 75,
    fill: "#000000"
};

/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}

function movetarget() {

}

/**
 * Move the user circle, check for overlap, draw the two circles
 */
function draw() {
    background("#aaaaaa");


    // Move user circle
    moveUser();
    movePuck();
    // Draw the user and puck
    checkTarget();
    drawTarget();
    drawUser();
    drawPuck();
}

/**
 * Sets the user position to the mouse position
 */
function moveUser() {
    user.x = mouseX;
    user.y = mouseY;
}

/**
 * Move the puck based on it being pushed by the user
 */
function movePuck() {
    const d = dist(user.x, user.y, puck.x, puck.y);
    const overlap = (d < user.size / 2 + puck.size / 2);
    if (overlap) {
        const dx = user.x - puck.x;
        const dy = user.y - puck.y;
        if (abs(dx) > abs(dy)) {
            if (dx < 0) {
                puck.x += 5;
            }
            else if (dx > 0) {
                puck.x -= 5;
            }
        }
        else {
            if (dy < 0) {
                puck.y += 5;
            }
            else if (dy > 0) {
                puck.y -= 5;
            }
        }
    }

}

function checkTarget() {
    const d = dist(puck.x, puck.y, target.x, target.y);
    const overlap = (d < puck.size / 2 + target.size / 2);
    if (overlap) {
        target.fill = target.fills.overlap;
    }
    else {
        target.fill = target.fills.noOverlap;
    }
}

function drawTarget() {
    push();
    noStroke();
    fill(target.fill);
    circle(target.x, target.y, target.size)
    pop();
}

/**
 * Displays the user circle
 */
function drawUser() {
    push();
    noStroke();
    fill(user.fill);
    ellipse(user.x, user.y, user.size);
    pop();
}

/**
 * Displays the puck circle
 */
function drawPuck() {
    push();
    noStroke();
    fill(puck.fill);
    ellipse(puck.x, puck.y, puck.size);
    pop();
}
