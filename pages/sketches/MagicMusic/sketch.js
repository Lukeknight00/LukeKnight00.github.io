//create particles centered around the middle  that fly off 
//define the lines starting points
let x1;
let y1;
let x2;
let y2;
var points = [];
var rand;



function setup() {
  createCanvas(600, 400);
  x1 = width/2;
  y1 = 0;
  x2 = x1;
  y2 = height;
  frameRate(16);
  //create the particles
  for(let i = 0; i < height; i++){
   
    var rando = randomGaussian(width/2,25)
    //add the points to the array
    points[i] = [];
    points[i] = rando;

     i++;
    //initilize the lines
    stroke(rando*(0/width));
    line(width-rando, i, rando, i+1);
    stroke('red');
    line(0, i, width-rando, i+1);
    stroke('blue');
    line(rando, i, width, i+1);
    
  }
}


function draw() {
  //setup background as well as middle line
  background(225);
  stroke(0);//set the line color
  line(x1, y1, x2, y2); 
 
  
  
  //create the lines
  for(let i = 0; i < height; i++){
    rand = points[i];
    
    stroke(rand*(0/width));
    line(width-rand, i, rand, i+1);
    stroke('red');
    line(0, i, width-rand, i+1);
    stroke('blue');
    line(rand, i, width, i+1);
    points[i] += randomGaussian(0,2);
    i++;
  }
  var tipTop = x1;
  //creates connecting lines
  noFill();
  beginShape();
  stroke(0);
 for(let i = 0; i < height; i++){
    if (points[i]>width/2) {   
      vertex(width-points[i], i);
    }

    //line(width-rand, i, rand, i+1);
    i++;
  }
  endShape();
  
  noFill();
  beginShape();
  stroke(0);
 for(let i = 0; i < height; i++){
    if (points[i]>width-points[i]) {   
      vertex(points[i], i);
    }

    //line(width-rand, i, rand, i+1);
    i++;
  }
  endShape();
 
}