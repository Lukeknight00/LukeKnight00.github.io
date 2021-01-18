let mic, fft;
let textCheck = true;
var context = new AudioContext();

function mousePressed() {
  userStartAudio();
  textCheck=false;
}

function setup() {
  getAudioContext().suspend();
  createCanvas(700, 400);


  noFill();

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function draw() {
  background(200);
  if(textCheck==true){textSize(50); fill(255,0,0); stroke(255,0,0); text('click to start', width/2,height/2);}
  noFill();
  let spectrum = fft.analyze();
  
  for (i = 0; i < spectrum.length; i++) {
    stroke(map(spectrum[i], 0, 220, height, 0));
    line(i, 0, i, map(spectrum[i], 0, 255, height, 0));
  }
  
}
