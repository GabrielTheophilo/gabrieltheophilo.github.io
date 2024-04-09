window.onload = (event) => {
    console.log("page is fully loaded");
  };

var dimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
}

const Char = function(posX,posY,index,color){
    this.posX = posX,
    this.posY = posY
    this.color = color
    this.index = index
}

var currentChar = {
    posX: window.innerWidth/2,
    posY: window.innerHeight/2,
    color: 'rgb(255, 0, 0)'
}

var context = undefined

var index = 0
function generateNewChar(current, index){
    offsetX = ((Math.floor(Math.random()*3)) - 1)*3
    offsetY = ((Math.floor(Math.random()*3)) - 1)*3
    switch(current.posX){
      case current.posX+offsetX>window.innerWidth:
        offsetX = offsetX - (offsetX*2)
        break
      case current.posX+offsetX<0:
        offsetX = offsetX+10
        break
    }
    switch(current.posY){
      case current.posY+offsetY>window.innerHeight:
        offsetY = offsetY - (offsetX*2)
        break
      case current.posY+offsetY<0:
        offsetY = offsetY+10
        break
    }
    newX = current.posX + offsetX
    newY = current.posY + offsetY
    var newChar = new Char(newX,newY,current.color,index)
    currentChar = newChar
}



function getContext(){
    
    let anchor = document.getElementById('root')
    let canvas = document.createElement('canvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    anchor.append(canvas)
    context = canvas.getContext("2d");
}

function drawRect(){
    context.fillStyle = currentChar.color
    context.fillRect(currentChar.posX,currentChar.posY,dimensions.width/300,dimensions.height/300)
}

function clear(){
    context.clearRect(0,0,dimensions.width,dimensions.height)
}

function main(){
    
    drawRect()
    generateNewChar(currentChar)
    
    
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function sleepFor(sleepDuration){
    var now = new Date().getTime();
    while(new Date().getTime() < now + sleepDuration){ /* Do nothing */ }
}






  
var red = 255;
var green = 0;
var blue = 0;

var step = 1;

var currentColorIndex = 0;

var colors = [
  [255, 0, 0],   // Red
  [255, 255, 0], // Yellow
  [0, 255, 0],   // Green
  [0, 255, 255], // Cyan
  [0, 0, 255],   // Blue
  [255, 0, 255]  // Magenta
];

function transitionColor() {
  var currentColor = colors[currentColorIndex];
  var nextColorIndex = (currentColorIndex + 1) % colors.length;
  var nextColor = colors[nextColorIndex];
  
  red = calculateTransitionValue(red, nextColor[0]);
  green = calculateTransitionValue(green, nextColor[1]);
  blue = calculateTransitionValue(blue, nextColor[2]);
  
  var nextColorString = 'rgb(' + Math.round(red) + ', ' + Math.round(green) + ', ' + Math.round(blue) + ')';
  
  currentChar.color = nextColorString;
  

  if (red === nextColor[0] && green === nextColor[1] && blue === nextColor[2]) {
    currentColorIndex = nextColorIndex;
  }
}

function calculateTransitionValue(currentValue, targetValue) {
  if (currentValue < targetValue) {
    return Math.min(currentValue + step, targetValue);
  } else if (currentValue > targetValue) {
    return Math.max(currentValue - step, targetValue);
  }
  return currentValue;
}

setInterval(transitionColor, 10);



getContext()
setInterval(main,0.000000000000000002)