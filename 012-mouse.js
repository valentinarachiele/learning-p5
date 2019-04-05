function setup() { 
  createCanvas(512, 512);
  background(255);
  strokeWeight(3);
  fill('#42DEAB');
}

function draw() { 
  ellipse(mouseX, mouseY, 30, 30)
}