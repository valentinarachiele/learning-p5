var titolo;
var x = 20;
var y = 20;

function setup() {
	createCanvas(windowWidth, windowHeight);
	titolo = createElement('h1', "Titolo");
	frameRate(10);
}

function draw() {
background(255);
 
x = random(20, 100);
y = random(20, 100);
titolo.position(x, y);
}
