let x=0;
let y=0;
var canvasX=600;
var canvasY=600;

function setup() {
  createCanvas(canvasX, canvasY);
}

function draw() {
  colorMode(HSB);
  background(220);
  strokeWeight(15);
  
  line(x,y,random(canvasX),random(canvasY));
  stroke(random(canvasX), random(canvasX), 100);
  line(canvasX,y,random(canvasX),random(canvasY));
  stroke(random(canvasX), random(canvasX), 100);
  line(x,canvasY,random(canvasX),random(canvasY));
  stroke(random(canvasX), random(canvasX), 100);
  line(canvasX,canvasY,random(canvasX),random(canvasY));
  stroke(random(canvasX), random(canvasX), 100);
}