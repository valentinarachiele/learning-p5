var input;

function setup() {
	createCanvas(500, 500);
	input = createInput("scrivi qualcosa");
}

function draw() {
	background(255);
	text(input.value(), 30, 30);
}
