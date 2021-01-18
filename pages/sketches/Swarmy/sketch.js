//create a swarm
var number = 40; //num of swarmys
var canvasX = 300;
var canvasY = canvasX;
var initX = canvasX/2;
var initY = canvasY/2;
let swarm = [];
var std;
let bg;

//swarmy object declaration, constraining them to the bounds of the screen
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

//dictates the behavior of the swarm
function updateSwarm() {
  for (let i = 0; i < swarm.length; i++) {
    updateSwarmy(swarm[i]);
  }
}

//dictates the behavior of the individual swarmy
function updateSwarmy(swarmy){
  swarmy.x += randomGaussian(0,2);
  swarmy.y += randomGaussian(0,2);
}

function setup() {
  createCanvas(canvasX, canvasY)
  std = sqrt(canvasX^2 + canvasY^2);
  swarmSetUp(number, initX, initY);
  bg =color(50);
  background(bg);
  frameRate(25);
}

function draw() {
  updateSwarm();
  fill(20,20,20,50);
  rect(0,0,canvasX,canvasY)
  for (let i = 0; i < swarm.length; i++){
    ellipseMode(RADIUS);
    fill(255);
    ellipse(swarm[i].x, swarm[i].y, 7, 3); // Outer white ellipse
    ellipseMode(CENTER);
    fill(100);
    ellipse(swarm[i].x, swarm[i].y, 3, 3); // Inner gray ellipse
  }
}