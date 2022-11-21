let img;
const poly = [];

function preload(){
img = loadImage('invisiblewound.jpg')
}

function setup() {
  createCanvas(1000,1000);
  poly[0] = createVector(10,10);
  poly[1] = createVector(20,20);
  poly[2] = createVector(100,100);
  poly[3] = createVector();
  //poly[4] = createVector();
  //poly[5] = createVector();
  //poly[6] = createVector();
  //poly[7] = createVector();
}

function draw() {
  background(125);
  image(img, 0, 0, windowWidth, windowHeight);
  beginShape();
  for (const {x,y} of poly) vertex(x,y);
  endShape(CLOSE);
  circle(mouseX,mouseY,10);
  hit = collidePointPoly(mouseX,mouseY,poly);
  stroke(hit ? color('red') : 0);
  print('colliding?')
}
