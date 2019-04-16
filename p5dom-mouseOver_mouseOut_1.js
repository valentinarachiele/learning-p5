function setup() {
	createCanvas(500, 500);
	var pulsante = createButton('click me!');
	pulsante.mouseOver(bgcolor);
	pulsante.mouseOut(bgcolorReset);
}

function bgcolor() {
	background(55, 34, 190);
}

function bgcolorReset() {
	background(255);
}

function draw() {

}
