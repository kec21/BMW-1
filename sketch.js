let img;
const poly = [];

function preload(){
img = loadImage('invisiblewound.jpg')
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  poly[0] = createVector(350,200);
  poly[1] = createVector(200,850);
  poly[2] = createVector(20,200);
  poly[3] = createVector(100,200);
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
