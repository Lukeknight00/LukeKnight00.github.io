let r;
let g;
let b;
let welcomeText ="Welcome!"
function setup() {
  createCanvas(400, 400,);
  background("#57BDA2");
    textSize(40);
    
}

function draw() {
  r = randomGaussian(0,200); 
  g = randomGaussian(0,200);
  b = randomGaussian(0,200);
  stroke(r,g,b);
  
  line(width/2,height/2,random(0,width),random(0,height))
  noFill();
  circle(width/2,height/2,sqrt(r+g+b));
  fill(0);
  text(welcomeText,width/2-(welcomeText.length*10),height/4);
}