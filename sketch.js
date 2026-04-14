//Global Variables
let myInput, myButton,stringLength,allCaps;

function getVowels(theirW){
  //thierW has a scope that is local to this function
  //meaning only this function can see it or use it.
  
  let vowelList = ""
  if(theirW.indexOf('a')  != -1){
    //if a is in their word, this will be true.
    vowelList += 'a, '
  }
  if(theirW.indexOf('e')  != -1){
    //if a is in their word, this will be true.
    vowelList += 'e, '
  }
   if(theirW.indexOf('i')  != -1){
    //if a is in their word, this will be true.
    vowelList += 'i, '
  }
  if(theirW.indexOf('o')  != -1){
    //if a is in their word, this will be true.
    vowelList += 'o, '
  }
  if(theirW.indexOf('u')  != -1){
    //if a is in their word, this will be true.
    vowelList += 'u, '
  }
  return vowelList.substring(0,vowelList.length-2)
}
function stringStuff(){
  let theirWord = myInput.value()//local variable used to grab their Word
  stringLength = theirWord.length;
  allCaps = ""
  for(let i = 0 ; i < theirWord.length ; i++){
    allCaps += theirWord.charAt(i).toUpperCase();
    //add a line to make it all lower case
  }
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
  text("Your word contains the following vowels: " + getVowels(myInput.value()),20,100 )
  //add another text to output all lowercase
}
//---------------------------------------
