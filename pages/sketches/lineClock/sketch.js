let a = 0; // Create a global variable "a" of type Number
let b = 0; // Create a global variable "b" of type Number
let c = 0; // Create a global variable "a" of type Number
let d = 0; // Create a global variable "b" of type Number
let sec = 0; //second counter
let min = 0;
let hour = 0;
let day =0;
let timeMult=1;//time speedup modifier
let start =0;



function setup() {
  createCanvas(360, 200);
  stroke(255);
  frameRate(60);
}
function mouseReleased(){
  if(start<=1){
      start++;
  }
  if(start>1){
      start=0;
  }
}

function draw() {
  background(0);
  
  if(start>0){
  a = a + deltaTime/width *100 *timeMult; // Increment a with an integer
  stroke(255);
  line(a, 0, a, height / 4);
  line(b, height/4, b, height/2);
  line(c, height/2, c, 3*height/4);
  line(d, 3*height/4, d, height);
  //second line
  if (a > width) {
    sec++;
    a = 0;
    b+=width/60;   
  }
  
  //minute line
  if (b > width) {
    sec=0;
    min++;
    b=0;
    c+=width/60;
  }
  //hour line
  if (c > width) {
    min=0;
    hour++;
    c=0;
    d+=width/24;
  }
  //day line
  if (d > width) {
    day++;
    d=0;
  }
    stroke(200);
  text(sec+" Seconds", width/2, 0 + height/8);
  text(min+" Minutes", width/2, height/4+ height/8);
  text(hour+" Hours", width/2, height/2+ height/8);
  text(day+" Days", width/2, 3* height/4+ height/8);
}
  else{
    stroke(200);
    text("The total time : "+day+"."+hour+"."+min+"."+sec, width/4, 0 + height/8);
    text("Click to start the timer", width/4, 0 + height/4);
  }
}
