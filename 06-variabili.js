var circ = 50;
var pos = 100;

function setup() {
  createCanvas(512, 512);
}

function draw() {
  background(255);
  fill('#2A7CF5');
  stroke(25);
  strokeWeight(23);
  ellipse(pos, height/2, circ, circ);
  ellipse(pos+100, height/2, circ, circ);
  ellipse(pos+200, height/2, circ, circ);
}