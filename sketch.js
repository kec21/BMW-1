let iwgps;

function preload(){
iwgps = createImg('invisiblewoundgps.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(125);
  iwgps.position(0,0);
}
