//create a swarm
var number = 100; //num of swarmys
var canvasX = 500;
var canvasY = 500;
var initX = canvasX/2;
var initY = canvasY/2;
let swarm = [];
var std = 100;
let bg;

class swarmy{
  constructor(x,y,angle){
    this.x = constrain(x,5,canvasX-5);
    this.y = constrain(y,5,canvasY-5);
    this.angle = angle;
    
  }
} 


function swarmSetUp(number, xOrigin, yOrigin){
  //set up the swarm
  var Swarm = [];
  for (let i = 0; i < number; i++) {   
    Swarm[i] = new swarmy(randomGaussian(xOrigin, std),randomGaussian(yOrigin, std),random(360))                
  }
  swarm = Swarm; 
}

//dictates the behavior of the swarmys
function updateSwarm() {
  for (let i = 0; i < swarm.length; i++) {
    swarm[i].x += random(-2,2);
    swarm[i].y += random(-2,2);
  }
}

function setup() {
  createCanvas(canvasX, canvasY)
  swarmSetUp(number, initX, initY);
  bg =color(50);
  background(bg);
  frameRate(20);
}

function draw() {
  updateSwarm();
  fill(0,0,0,50);
  rect(0,0,canvasX,canvasY)
  for (let i = 0; i < swarm.length; i++){
    ellipseMode(RADIUS);
    fill(255);
    ellipse(swarm[i].x, swarm[i].y, 7, 3); // Outer white ellipse
    ellipseMode(CENTER);
    fill(100);
    ellipse(swarm[i].x, swarm[i].y, 4, 3); // Inner gray ellipse
  }
}