var Cruise
var Sea
var seaIMG
var CruiseIMG



function preload(){

  seaIMG = loadImage('sea.png')

  CruiseIMG1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png  ")
}

function setup(){
  createCanvas(400,400);
  
sea = createSprite(400,200)
sea.addImage(seaIMG) 

sea.velocityX=-4
sea.scale = 0.35

Cruise = createSprite(120,200,25,25)
Cruise.addAnimation("movingCruise",CruiseIMG1)
Cruise.scale= 0.25
}

function draw() {
  background("blue");
  background(0)
 sea.velocityX = -3


drawSprites();
}