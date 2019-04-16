var input;
var pragrafo;

function setup() {
	createCanvas(500, 500);
	input = createInput("scrivi qualcosa");
	paragrafo = createP("Ciao");
}

function draw() {
	background(255);
	paragrafo.html(input.value());
}
