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
  my = constrain(mouseY, 0, 150);
  arc(width/2, height/2, width/3, my, radians(20), radians(160));
}