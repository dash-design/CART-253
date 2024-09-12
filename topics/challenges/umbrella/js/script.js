/**
 * Umbrella Challenge
 * Ellie "DASH" Desjardins
 * 
 * Blue umbrella on red background
 *
 */

"use strict";

/**
 * Setup of the project
*/
function setup() {
    createCanvas(800, 800);
    background("red")
}


/**
 * Draws umbrella
*/
function draw() {
    //Top of umbrella
    drawTop();

    //Core
    drawCore();

    //Handle
    drawHandle();
}

//Top of umbrella
function drawTop(){
    //Blue top
    push();
    noStroke();
    fill("blue");
    ellipse(400, 400, 600);
    pop();

    //Red mask
    push();
    noStroke();
    fill("red");
    rect(0, 400, 800, 800);
    pop();

    //Small round mask 1
    push();
    noStroke();
    fill("red");
    ellipse(400, 400, 200);
    pop();

    //Small round mask left
    push();
    noStroke();
    fill("red");
    ellipse(200, 400, 200);
    pop();

    //Small round mask right
    push();
    noStroke();
    fill("red");
    ellipse(600, 400, 200);
    pop();
}

//Core
function drawCore(){
    strokeWeight(20);
    line(400, 600, 400, 300);
}

//Handle
function drawHandle(){
    push();
    stroke("yellow");
    strokeWeight(20);
    noFill();
    arc(450, 600, 100, 100, 0, PI);
    pop();
}
