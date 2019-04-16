var canvas;
var input;

function setup() {
	canvas = createCanvas(500, 200);
	input = createInput('write on me!');
	//canvas.style("background-color", "'" + input.value() + "'");  //perché non funziona? perché il sistema non "sente" il cambiamento
	input.changed(cambiaBg);
}

function cambiaBg() {
	canvas.style("background-color", input.value());
}

function draw() {
	
}

