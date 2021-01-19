let r;
let g;
let b;
let x;
let y;

let welcomeText ="Welcome!"
let myFont;
function setup() {
  createCanvas(400, 400,WEBGL);
  background("#57BDA2");
    textSize(40);
  myFont = loadFont('font.ttf');
  textFont(myFont);
  frameRate(10);

}

function draw() {
  r = randomGaussian(10,180); 
  g = randomGaussian(10,180);
  b = randomGaussian(2,255);
  x = random(0,width);
  y = random(0,height);
  stroke(r,g,b);
   translate(-width/2,-height/2,0);
  fill(-r,-g,-b);
  text(welcomeText,width/2-(welcomeText.length*10),height/2);
  noFill();
  circle(width/2,height/2,sqrt(r+g+b));
  fill(r,g,b);
  translate(x,y,0);
  sphere(sqrt(x*y));
}
