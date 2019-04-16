function setup() {
	createCanvas(500, 500);
	var titolo = selectAll('.titolo');
	for(var i = 0; i < titolo.length; i++){
		titolo[i].mouseOver(rosso);
		titolo[i].mouseOut(verde);
	}
}

function rosso() {
	this.style('color', 'red');
}

function verde() {
	this.style('color', 'green');
}
