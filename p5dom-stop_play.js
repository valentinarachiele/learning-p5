//Agiamo sul file p5dom-04.js

var titolo;
var x = 20;
var y = 20;

function setup() {
	createCanvas(500, 500);
	titolo = createElement('h1', "Titolo");
	frameRate(10);
	buttonPlay = createButton('play');
	buttonPlay.mousePressed(play);
	buttonStop = createButton('stop');
	buttonStop.mousePressed(stop);
}

function draw() {
background(255);
 
x = random(20, 100);
y = random(20, 100);
titolo.position(x, y);
}

function play() {
	loop();
}

function stop() {
	noLoop();
}
