var circ = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill('#2A7CF5');
  stroke(25);
  strokeWeight(23);
  ellipse(circ*2, height/2, circ, circ);
  ellipse(circ*4, height/2, circ, circ);
  ellipse(circ*6, height/2, circ, circ);
}

function windowResized() {
	resizeCanvas(windowWidth, windowHeight);
}