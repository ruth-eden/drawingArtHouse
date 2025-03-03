function setup() {
    createCanvas(500, 500);
    background(200);
}


function draw() {
    rectMode (CENTER);
    strokeWeight(5);
    fill(0, 128, 0);
    rect(245, 225, 400, 300);
    fill(200, 185, 151);
    rect(245, 270, 200, 100);
    fill(150, 75, 0);
    triangle(145, 218, 345, 218, 245, 125)
    square(245, 295, 50);
    circle(235, 295, 5);
    fill(0, 0, 200);
    rect(195, 245, 50, 25);
    rect(295, 245, 50, 25);
    fill(0, 0, 0);
    line(170, 245, 220, 245);
    line(195, 233, 195, 257);
    line(270, 245, 320, 245);
    line(295, 233, 295, 257);
}