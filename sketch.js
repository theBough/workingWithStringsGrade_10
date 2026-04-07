//Global Variables
let myInput, myButton;

//----------------------------
function setup() {
  createCanvas(400, 400);
  myInput = createInput("Word");
  myButton = createButton("Press");
  myInput.position(20,20)
  myButton.position(100,100);
  myButton.mousePressed(stringStuff)
  
}
function draw() {
  background(220);
  text("Work with Strings", 10,10)
  
  
}
//---------------------------------------
function stringStuff(){
  
}
