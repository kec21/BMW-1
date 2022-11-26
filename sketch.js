let img;
const poly = [];
const poly2 = [];
const poly3 = [];
const poly4 = [];
let phrases = ["YOU ARE PERFECTLY HEALTHY","STOP BEING SO NEGATIVE","I CAN'T SEE ANYTHING WRONG","IF IT HURTS, DON'T DO THAT","PAIN IS ALL IN THE MIND","ARE YOU FEELING STRESSED OR DEPRESSED?","PAIN IS SUBJECTIVE","BEING OVERWEIGHT CAN ADD UP TO 5LBS OF PRESSURE TO YOUR JOINTS",];
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
  poly[0] = createVector(137,385);
  poly[1] = createVector(180,362);
  poly[2] = createVector(176,286);
  poly[3] = createVector(253,285);
  poly[4] = createVector(254,359);
  poly[5] = createVector(306,386);
  poly[6] = createVector(359,556);
  poly[7] = createVector(367,467);
  poly[8] = createVector(413,360);
  poly[9] = createVector(398,319);
  poly[10] = createVector(414,279);
  poly[11] = createVector(593,279);
  poly[12] = createVector(595,356);
  poly[13] = createVector(642,463);
  poly[14] = createVector(655,570);
  poly[15] = createVector(696,394);
  poly[16] = createVector(746,358);
  poly[17] = createVector(741,282);
  poly[18] = createVector(825,283);
  poly[19] = createVector(820,361);
  poly[20] = createVector(874,392);
  poly[21] = createVector(904,562);
  poly[22] = createVector(937,596);
  poly[23] = createVector(913,648);
  poly[24] = createVector(854,646);
  poly[25] = createVector(842,886);
  poly[26] = createVector(735,887);
  poly[27] = createVector(715,649);
  poly[28] = createVector(617,647);
  poly[29] = createVector(624,850);
  poly[30] = createVector(414,846);
  poly[31] = createVector(398,644);
  poly[32] = createVector(304,643);
  poly[33] = createVector(286,889);
  poly[34] = createVector(178,881);
  poly[35] = createVector(150,650);
  poly[36] = createVector(80,632);
  poly[37] = createVector(81,582);
}

function windowResized() {
  centerCanvas();
}

function draw() {
  background(125);
  image(img, 0, 0, width, height);
  //beginShape();
  //for (const {x,y} of poly) vertex(x,y);
  //endShape(CLOSE);
  //circle(mouseX,mouseY,10);
  //stroke(hit ? color('red') : 0);
  //print('colliding?')
}

function mouseClicked() {
  hit = collidePointPoly(mouseX,mouseY,poly);
  if (hit) {
    let thisphrase = phrases[round(random(8))]
    alert(thisphrase)
  }

}