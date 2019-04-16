var slider;

function setup() {
	createCanvas(500, 500);
	slider = createSlider('0', '100', '40');

}

function draw() {
	background(230);
	noStroke();
	fill("#ff0000");
	ellipse(width/2, height/2, slider.value(), slider.value());
}
