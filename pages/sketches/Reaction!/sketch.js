//a small reaction game that will see how quickly you can move the mouse over the different colored square.

  //number of squares per line
let numberOfSquaresPerRow = 5;
let numberOfRows = 5;
let squareWidth = 100;
let squares = [];
let randX;
let randY;
let timer = 0.00;
let record = 999.00;
let highscore= 999.99;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  //number of squares
  if (width> 400){
    numberOfSquaresPerRow = round(width/100);
  }
  print("numberOfSquaresPerRow: "+numberOfSquaresPerRow);
  numberOfRows = round(height/(height/numberOfSquaresPerRow));
  print("numberOfRows: "+numberOfRows);
  randX = int(random(0,numberOfSquaresPerRow-1));
  randY = int(random(0,numberOfRows-1));
  
  
}

function draw() {
  timer+= deltaTime/1000;
  //checks where the mouse is and changes the color of that square  
  background(220);
  
  
  fill(0);
  stroke(50);
  //create the squares
  //nested for loop to get to each location
  for(var i = 0; i<numberOfRows;i++){
    for(var ii = 0; ii<numberOfSquaresPerRow;ii++){   
      if(mouseX>ii*squareWidth&&mouseX<(ii+1)*squareWidth&&mouseY>i*squareWidth&&mouseY<(i+1)*squareWidth){
        
        //checks to see if it hit the red square
        if(ii==randX&&i==randY){
          
          randX = int(random(0,numberOfSquaresPerRow-1));
          randY = int(random(0,numberOfRows-1));
          print("Random pos: " +randX , randY);
          record = timer;
          if(record<highscore){
            highscore = record;
          }
          timer = 0;
          
        }
        
        
        fill(255);
      //  print("Square Highlighted: " + ii + " " + i);
        
      }
      //draws the colorful square
      if(ii==randX&&i==randY){
        fill(255,0,0)
      }
      square(ii*squareWidth,i*squareWidth,squareWidth);
      fill(0);
    }
  }
  stroke(255);
  fill(255);
  text(round(timer,3),20,20);
  text(round(record,3),20,50);
  text(round(highscore,3),20,80);
}