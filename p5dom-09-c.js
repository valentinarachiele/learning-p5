//Agiamo sul file p5dom-05.js

var titolo;

function setup() {
	createCanvas(500, 500);
	titolo = createElement('h1', "Titolo");
	titolo.position(30, 30);
titolo.style('color', '#000000');
	//var pulsante = createButton('style me!');
	//pulsante.mousePressed(styleme);
	titolo.mouseOver(styleme);
	titolo.mouseOut(deStyleme)
}

function draw() {

}

function styleme() {
	titolo.style('color', '#ff0000');
	titolo.style('padding', '30px');
	titolo.style('text-transform', 'uppercase');
}

function deStyleme() {
	titolo.style('color', '#000000');
	titolo.style('padding', '0');
	titolo.style('text-transform', 'none');
}
