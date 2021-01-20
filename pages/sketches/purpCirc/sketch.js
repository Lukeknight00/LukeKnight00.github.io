let v;
let myFont;

let mic, fft;
let textCheck = true;
var context = new AudioContext();


function showResult()
{
  console.log(foo.resultString); // log the result
}


function mousePressed() {
  userStartAudio();
  textCheck=false;
}

function setup() {
  getAudioContext().suspend();
  createCanvas(windowWidth, windowHeight, WEBGL);
  myFont = loadFont('atwriter.ttf');
  textFont(myFont);

  noFill();

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
  
  
  
}

function draw() {
  background(200);
  
  if(textCheck==true){stroke(0);text('click to start',0,0);}

  let spectrum = fft.analyze();
  


  for (i = 0; i < spectrum.length; i++) {
    v=p5.Vector.fromAngle(map(i, 0, spectrum.length, 0, 360)/PI,spectrum[i]);
    stroke(random(spectrum[i]),random(spectrum[i]),spectrum[i]);
    
    
    line(0, 0, v.x, v.y);
  }

  
}
