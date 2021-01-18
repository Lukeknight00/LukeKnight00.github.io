let r;
let g;
let b;
let welcomeText ="Welcome!"
function setup() {
  createCanvas(400, 400);
  background(255);
    textSize(40);
}

function draw() {
  r = randomGaussian(20,200); 
  g = randomGaussian(20,200);
  b = randomGaussian(20,200);
  stroke(r,g,b);
  line(width/2,height/2,random(0,width),random(0,height))
  circle(width/2,height/2,sqrt(r+g+b));
  text(welcomeText,width/2-(welcomeText.length*10),height/4);
}