//create particles centered around the middle  that fly off 
//define the lines starting points
let x1;
let y1;
let x2;
let y2;


function setup() {
  createCanvas(600, 400);
  x1 = width/2;
  y1 = 0;
  x2 = x1;
  y2 = height;
  frameRate(16);
}


function draw() {
  //setup background as well as middle line
  background(225);
  stroke(0);//set the line color
  line(x1, y1, x2, y2); 
  
  //create the particles
  for(let i = 0; i < height; i++){
    i++;
    let rand = randomGaussian(width/2,25)
    stroke(rand*(0/width));
    line(width-rand, i, rand, i+1);
    stroke('red');
    line(0, i, width-rand, i+1);
    stroke('blue');
    line(rand, i, width, i+1);
    
  }

  
}