let amount = 360; //number of things to do
let ww; //window width
let wh; //window height
function setup() {
  createCanvas(windowWidth, windowHeight,WEBGL);
  ww =windowWidth;
  wh =windowWidth;
  frameRate(5);
  background(255,200,255);
}

function draw() {
  translate(random(-ww/2,ww/2),random(-wh/2,wh/2),random(-sqrt((wh/2)^2+(ww/2)^2),sqrt((wh/2)^2+(ww/2)^2)));
  push();
  noFill();
  for(let i = 0; i<amount; i++){
    let randX = random(-ww/2,ww/2);
    let randY = random(-wh/2,wh/2);
    let randZ = random(-sqrt((wh/2)^2+(ww/2)^2),sqrt((wh/2)^2+(ww/2)^2));
    stroke(map(randX,-ww/2,ww/2,0,255)+i,map(randY,-wh/2,wh/2,0,255)+1,map(randZ,-sqrt((wh/2)^2+(ww/2)^2),sqrt((wh/2)^2+(ww/2)^2),0,255)+i/2);
    fill(random(255),random(255),random(255));
    sphere(random(windowWidth/2));
    translate(1000/randX,1000/randY,1000/randZ);
  }
  pop();
  
}