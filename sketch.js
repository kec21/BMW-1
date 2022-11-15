let img;
function preload(){
  img = loadImage('invisiblewoundgps.jpg');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  image(img,0,0)
}

function draw() {
  background(125);
}
