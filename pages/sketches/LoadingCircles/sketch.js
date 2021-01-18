let start = 0;
let stop = 0;
let width = 80;
let height = 80;

let x = 200;

let y = 200;

function setup() {
  createCanvas(400, 400);
  stop = PI;
}

function draw() {
  background(120);
  fill(20);
  arc(x, y, width, height, -start, stop, OPEN);
  // x+=random(-1,1);
  // y+=random(-1,1);
  // width+=random(-1,1);
  // height+=random(-1,1);
  stop+=PI/120;
  start=stop-PI;
  fill(120);
  arc(x, y, width*1.5, height*1.5, start, stop, OPEN);
  fill(100);
  arc(x, y, width*2.5, height*2.5, -start, -stop, OPEN);
}