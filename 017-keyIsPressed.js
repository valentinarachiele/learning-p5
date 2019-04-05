function setup() { 
  createCanvas(windowWidth, windowHeight);
}

function draw() { 
  background(255);
  if(keyIsPressed){
    line(0, 0, width, height);
  }
}