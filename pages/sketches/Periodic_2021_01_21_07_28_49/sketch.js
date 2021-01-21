let shapes = []; //an array of valance shell shapes
let elements = []; //elements that will be generated
let myFont; //setting up a font for the labels
let scl;// a scale to multiply things by the same amount to be dynamically sized

function preload(){
  elements = makeTable(16,4);
  
}
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  scl = windowHeight/30;
  
  //generate elements 
  myFont = loadFont('atwriter.ttf');
  textFont(myFont);
  textSize(width/scl);
}


function draw() {
  background(220);
  translate(-width/2+scl,-height/2+scl)
  for(let i = 0; i < elements.length;i++){
    //move each element apart and draw them
    translate( elements[i].width*scl,elements[i].width*scl,0);
    drawElement(elements[i]);
    translate( elements[i].width*scl,elements[i].width*scl,0);
  }
}

//draws an element with its shells
function drawElement(element){
  push();
  noFill();
  sphere(element.width*scl);
  fill(100,100,255);
  console.log("drawing: " + element.name +" width: "+ element.width);
  text(element.name,0, (element.width+2)*scl);
  pop();
}


//generate elements
//takes in length, stable size of electron shells 
function makeTable(length, size) {
  let elems = [];
  for(let i = 0; i<length;i++){
    //each property should be procedural eventually
    elems[i] = new Element((i+1)+"idium", i+1, i*2, shaper(size, (i+1)), charger(size, (i+1)),addProperties(size,length), size);
    console.log("New Element: " + elems[i].name);
  }
  return elems;
  
}

//the elemenet object, used to store information about each element
class Element {
  //the variables that define an ellement are fairly self explanitory
  constructor(name, number, weight, shape, charge, properties, size) {
    this.name = name;
    this.weight = weight;
    this.number = number;
    this.shape = shape;
    this.charge = map(charge,0,size,Math.ceil(-size/2),Math.floor(size/2));
    this.width = (number%size) + ((Math.floor(number/size) +2))^2;
    this.properties = properties;
    this.addProp = function(property) {
      this.properties.append(property)
    }
  }

}

//contains all the information about each property, they will also have a code that allows them to be referenced without storing information
class Property {
  constructor(name, description, propertyCode) {
    this.name = name;
    this.description = description;
    this.propertyCode = propertyCode;
  }
}

//takes in a stable shell size and the position in the periodic table to define the shape
function shaper(size,number){
  
  shape = "sphere";
  return shape;
  
}

function charger(size,number, shape){
  var charge = 0;
  if(size==0){
    charge =  0;
    return charge;
  }
  if(size>0){
    charge = number%(size+1);
    return charge;
  }
  return charge;
}

function addProperties(size,number){
  let props = []; //an array of the properties
  props[0] = "an element";
  return props;
}