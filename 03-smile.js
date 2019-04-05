function setup() {
  createCanvas(512, 512);
}

function draw() {
  background(255);
  fill('#FFC44C');
  stroke(25);
  strokeWeight(13);
  ellipse(width/2, height/2, 400, 400);
  fill('#222222');
  ellipse(width/2-100, height/2-50, 20, 20);
  ellipse(width/2+100, height/2-50, 20, 20);
  noFill();
  arc(width/2, height/2, width/3, mouseY, radians(20), radians(160));
}