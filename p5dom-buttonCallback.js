//Agiamo sul file p5dom-05.js

var titolo;

function setup() {
	createCanvas(500, 500);
	titolo = createElement('h1', "Titolo");
	titolo.position(30, 30);
titolo.style('color', '#000000');
	var pulsante = createButton('style me!');
pulsante.mousePressed(styleme);
}

function draw() {

}

function styleme() {
	titolo.style('color', '#ff0000');
	titolo.style('padding', '30px');
	titolo.style('text-transform', 'uppercase');
}
