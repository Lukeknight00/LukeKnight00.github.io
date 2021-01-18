var x=0;
var y=0;
let cellSize= 5;
let xSize = 60;
let ySize = 60;
var grid =[  ];
let std=5;

function setup() {
  createCanvas(xSize*cellSize, ySize*cellSize);
  while(x<xSize){
    while(y<ySize){
      square(x*cellSize,y*cellSize, cellSize);
      y++;
      }
    y=0;
    x++;
  }
  frameRate(100);
}

function cos_color(t, scale=255) {
  //color = a + b ⋅ cos[ 2π(c⋅t+d)]
  
  // TODO: const this
  let a = createVector(0.5, 0.5, 0.5);
  let b = createVector(0.5, 0.5, 0.5);
  let c = createVector(1.0, 1.0, 1.0);
  let d = createVector(0, 0.15, 0.2);
  
  let cos_arg = p5.Vector.mult(p5.Vector.add(p5.Vector.mult(c, t), d), TWO_PI);
  cos_arg = cos_arg.array().map(x => cos(x));

  let r, g; //b declared above
  [r, g, b] = p5.Vector.add(a, p5.Vector.mult(b, cos_arg)).array();
  
  return color(r*scale, g*scale, b*scale);
}

function draw() {
  
  let coord_scale = 1/(4*std);
  let xRand = int(randomGaussian(xSize/2,std));
  let yRand = int(randomGaussian(ySize/2,std));
  
  let c = cos_color(createVector(xRand*coord_scale/2, 0, yRand*coord_scale/2));
  fill(c);
  square(xRand*cellSize,yRand*cellSize,cellSize);
  
}