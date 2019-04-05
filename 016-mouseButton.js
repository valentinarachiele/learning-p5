function setup() { 
  createCanvas(windowWidth, windowHeight);
}

function draw() { 
  background(255);
  if(mouseIsPressed){
    if(mouseButton == LEFT){
      background(0);
    } 
    else if (mouseButton == RIGHT){
      background(25, 45, 180);
    } 
    else {
      background(49);
    }
  }
}