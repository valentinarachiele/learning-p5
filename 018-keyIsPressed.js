function setup() { 
	createCanvas(windowWidth, windowHeight);
}

function draw() { 
	background(255);
	if(keyIsPressed){
		if(key == "o") {
			fill(0);
		} else {
			fill(255, 0, 0);
		}
	ellipse(width/2, height/2, 30, 30);
	}
}