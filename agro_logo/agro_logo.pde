import processing.svg.*;

void setup() {
	noLoop();
	background(#000000);
	size(800, 800);
	size(800, 800, SVG, "agro_logo.svg");
}

void draw() {
    stroke(#c0f0c0);
    fill(#c0f0c0);
    strokeWeight(width/10);
    line(width / 2, 0, 0, height);
    line(width/2, 0, width, height);
    circle(width/2, 2 * height / 3, width/10);
}
