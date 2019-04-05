function setup() { 
  createCanvas(512, 512);
  noStroke();
}

function draw() { 
  background(255); 
  // line(20, 40, 80, 80); 
  // line(80, 40, 140, 80); 
  // line(140, 40, 200, 80); 
  // line(200, 40, 260, 80); 
  // line(260, 40, 320, 80); 
  // line(320, 40, 380, 80); 
  // line(380, 40, 440, 80);
  for(var l = 10; l < width; l+=20) {
    for(var a = 10; a < height; a+=20) {
    fill(a, 123, 47);
    ellipse(l, a, 20, 20);
    }
  }
}