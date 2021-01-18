//create a swarm
var number = 30; //num of swarmys
var canvasX = 500;
var canvasY = canvasX;
var canvasBorder= 30;
var initX = canvasX / 2;
var initY = canvasY / 2;
var size = 2;
let swarm = [];
var std;
let bg;


//swarmy object declaration
class swarmy {

  constructor(x, y, angle) {
    this.x = x;
    this.y = y;
    constrain(y, 100, canvasY - 100);
    this.angle = angle;
  }

  //calculates its distance from the given swarmy
  distance(sw2) {
    const dist = sqrt((this.x - sw2.x) ^ 2 + (this.y - sw2.y) ^ 2);
    return dist;
  }
}


function swarmSetUp(number, xOrigin, yOrigin) {
  //set up the swarm
  var Swarm = [];
  for (let i = 0; i < number; i++) {
    Swarm[i] = new swarmy(randomGaussian(xOrigin, std), randomGaussian(yOrigin, std), random(360))
  }
  swarm = Swarm;
}

//dictates the behavior of the swarm
function updateSwarm() {
  for (let i = 0; i < swarm.length-1; i++) {
    for (let ii = 0; ii < int(random(0, swarm.length-1)); ii++)
      rando = int(random(0, swarm.length-1));
      if(rando != i){updateSwarmy(swarm[i], swarm[rando]);}
  }
}

//dictates the behavior of the individual swarmy
function updateSwarmy(swarmy1, swarmy2) {
  if (swarmy1.distance(swarmy2) < size * 1) {
    //move appart

    if (swarmy1.x > swarmy2.x) {
      //swarmy 1 on the right
      //move right
      swarmy1.x += randomGaussian(1, 5);

      if (swarmy1.y > swarmy2.y) {
        //swarmy1 bellow swarmy2
        //move down
        swarmy1.y += randomGaussian(1, 5);
      } else {
        //swarmy1 above swarmy2
        //move up
        swarmy1.y -= randomGaussian(1, 5);
      }
    } else {
      //swarmy 1 on the left
      //move left
      swarmy1.x -= randomGaussian(1, 5);

      if (swarmy1.y > swarmy2.y) {
        //swarmy1 bellow swarmy2
        //move down
        swarmy1.y += randomGaussian(1, 5);
      } else {
        //swarmy1 above swarmy2
        //move up
        swarmy1.y -= randomGaussian(1, 5);
      }
    }
  }
  else if (swarmy1.distance(swarmy2) > size * 10) {
    //move together

    if (swarmy1.x > swarmy2.x) {
      //swarmy 1 on the right
      //move left
      swarmy1.x -= randomGaussian(1, 5);

      if (swarmy1.y > swarmy2.y) {
        //swarmy1 bellow swarmy2
        //move up
        swarmy1.y -= randomGaussian(1, 5);
      } else {
        //swarmy1 above swarmy2
        //move down
        swarmy1.y += randomGaussian(1, 5);
      }
    } else {
      //swarmy 1 on the left
      //move right
      swarmy1.x += randomGaussian(1, 5);

      if (swarmy1.y > swarmy2.y) {
        //swarmy1 bellow swarmy2
        //move up
        swarmy1.y -= randomGaussian(1, 5);
      } else {
        //swarmy1 above swarmy2
        //move down
        swarmy1.y += randomGaussian(1, 5);
      }
    }
  }

}

function setup() {
  createCanvas(canvasX, canvasY)
  std = 10 * sqrt(canvasX ^ 2 + canvasY ^ 2);
  swarmSetUp(number, initX, initY);
  bg = color(50);
  background(bg);
  frameRate(60);
}

function draw() {
  updateSwarm();
  fill(0, 0, 0, 100);
  rect(0, 0, canvasX, canvasY)
  for (let i = 0; i < swarm.length; i++) {
    //binds the points to thescreen
    swarm[i].x = constrain(swarm[i].x, canvasBorder, canvasX - canvasBorder);
    swarm[i].y = constrain(swarm[i].y, canvasBorder, canvasX - canvasBorder);
    ellipseMode(RADIUS);
    fill(255);
    ellipse(swarm[i].x, swarm[i].y, size * 2 + 1, size); // Outer white ellipse
    ellipseMode(CENTER);
    fill(100);
    ellipse(swarm[i].x, swarm[i].y, size, size); // Inner gray ellipse
    }
    
}