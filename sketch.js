let img;
const poly = [];
let phrases = ["YOU ARE PERFECTLY HEALTHY","STOP BEING SO NEGATIVE","I CAN'T SEE ANYTHING WRONG","IF IT HURTS, DON'T DO THAT"];


function preload(){
img = loadImage('invisiblewound.jpg')
}

var cnv;
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  cnv = createCanvas(1000,1000);
  centerCanvas ();
  poly[0] = createVector(182,284);
  poly[1] = createVector(251,287);
  poly[2] = createVector(245,359);
  poly[3] = createVector(299,383);
  poly[4] = createVector(366,625);
  poly[5] = createVector(289,635);
  poly[6] = createVector(292,874);
  poly[7] = createVector(183,878);
  poly[8] = createVector(156,635);
  poly[9] = createVector(85,620);
  poly[10] = createVector(136,394);
  poly[11] = createVector(186,365);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  background(125);
  image(img, 0, 0, width, height);
  // beginShape();
  // for (const {x,y} of poly) vertex(x,y);
  // endShape(CLOSE);
  // circle(mouseX,mouseY,10);
  // stroke(hit ? color('red') : 0);
  // print('colliding?')
}

function mouseClicked() {
  hit = collidePointPoly(mouseX,mouseY,poly);
  if (hit) {
    let thisphrase = phrases[round(random(phrases.length))]
    alert(thisphrase)
  }

}