function setup() { 
  createCanvas(windowWidth, windowHeight);
}

function draw() { 
  background(255);
    stroke(200);
  line(width/2, 0, width/2, height);
  if(mouseX < width/2){
    fill('#B20000');
    rect(0, 0, width/2, height);
  } else {
    fill('#50B023');
    rect(width/2, 0, width, height);
  }
}