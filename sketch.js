let img;
function preload(){
img = loadImage('invisiblewound.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(125);
  image(img, 0, 0, windowWidth, windowHeight);
  
}
