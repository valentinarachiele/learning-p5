var slider;
var titolo;

function setup() {
	createCanvas(500, 500);
	slider = createSlider('10', '40', '12');
	titolo = select("h1");
}

function draw() {
	titolo.style('font-size', slider.value() + 'px')
}
