function setup() { 
  createCanvas(512, 512);
  strokeWeight(11);
  //stroke('#993FA4');
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
  for(var l = 20; l < 400; l+=60) {
    stroke(153, 63, 164, l);
    line(l, 40, l+60, 80);
  }

}