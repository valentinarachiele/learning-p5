var canvas;
var pulsante;

function setup() {
	noCanvas();
	pulsante = createButton('click me!');
	pulsante.mousePressed(creaImg)
}

function creaImg() {
	var img = createImg('https://cdn0.iconfinder.com/data/icons/cat-avatar-filled/64/Cat_avatar_kitten-23-128.png', 'gattino');
	img.parent('cuccia');
}
