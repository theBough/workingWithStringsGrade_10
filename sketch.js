//Global Variables
let myInput, myButton,stringLength;

//----------------------------
function setup() {
  createCanvas(400,400);
  myInput = createInput("Word");
  myButton = createButton("Press");
  myInput.position(20,20)
  myButton.position(100,100);
  myButton.mousePressed(stringStuff)
  stringLength = "";
  
}
function draw() {
  background(220);
  text("Work with Strings", 10,10)
  text("The length of your word is: " + stringLength,20,60)
}
//---------------------------------------
function stringStuff(){
  stringLength = myInput.value().length
}
