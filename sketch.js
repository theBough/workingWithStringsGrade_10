//Global Variables
let myInput, myButton,stringLength,allCaps;
function stringStuff(){
  let theirWord = myInput.value()//local variable used to grab their Word
  stringLength = theirWord.length;
  allCaps =  theirWord.charAt(0).toUpperCase();
}
//--PreBuilt p5js functions--------------
function setup() {
  createCanvas(400,400);
  myInput = createInput("Word");
  myButton = createButton("Press");
  myInput.position(20,20)
  myButton.position(100,100);
  myButton.mousePressed(stringStuff)
  stringLength = "";
  allCaps = "";
  
}
function draw() {
  background(220);
  text("Work with Strings", 10,10)
  text("The length of your word is: " + stringLength,20,60)
  text("Your word all caps is : " + allCaps,20,80)
}
//---------------------------------------
