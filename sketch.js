let img;
const poly = [];
const poly2 = [];
const poly3 = [];
const poly4 = [];
let phrases = ["YOU ARE PERFECTLY HEALTHY","STOP BEING SO NEGATIVE","I CAN'T SEE ANYTHING WRONG","IF IT HURTS, DON'T DO THAT","PAIN IS ALL IN THE MIND"];
let phrases2 = [];
let phrases3 = [];
let phrases4 = [];


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
  poly[12] = createVector();
  poly[13] = createVector();
  poly[14] = createVector();
  poly[15] = createVector();
  poly[16] = createVector();
  poly[17] = createVector();
  poly[18] = createVector();
  poly[19] = createVector();
  poly[20] = createVector();
  poly[21] = createVector();
  poly[22] = createVector();
  poly[23] = createVector();
  poly[24] = createVector();
  poly[25] = createVector();
  poly[26] = createVector();
  poly[27] = createVector();
  poly[28] = createVector();
  poly[29] = createVector();
  poly[30] = createVector();
  poly[31] = createVector();
  poly[32] = createVector();
  poly[33] = createVector();
  poly[34] = createVector();
  poly[35] = createVector();
  poly[36] = createVector();
  poly[37] = createVector();
}

function windowResized() {
  centerCanvas();
}

function draw() {
  background(125);
  image(img, 0, 0, width, height);
  beginShape();
  for (const {x,y} of poly) vertex(x,y);
  endShape(CLOSE);
  circle(mouseX,mouseY,10);
  stroke(hit ? color('red') : 0);
  print('colliding?')
}

function mouseClicked() {
  hit = collidePointPoly(mouseX,mouseY,poly);
  if (hit) {
    let thisphrase = phrases[round(random(5))]
    alert(thisphrase)
  }

}