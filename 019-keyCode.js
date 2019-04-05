var posizione = 300;

function setup() { 
	createCanvas(windowWidth, windowHeight);
}

function draw() { 
	background(255);
	if(keyIsPressed){
		if(keyCode == LEFT_ARROW){
			posizione--;
		}
		if(keyCode == RIGHT_ARROW){
			posizione++;
		}
	}
	fill("#30AFF6");
	rect(posizione, height/2, 30, 30);
}