var shipImg,ship,seaImage,sea;
function preload(){
seaimg=loadImage("sea.png")
shipimg1=loadAnimation("ship-1.png" , "ship-2.png" );

}

function setup(){
  createCanvas(600,300);

  ship=createSprite(70,180,20,20)
  ship.addAnimation("ship" , "shipImage")
  ship.scale=0.2;
  sea=createSprite(10,200,600,10);
  sea.x=sea.width/2;
  sea.vilocityX=-2;
  sea.visible=false;

  
}

function draw() {
  background("blue");
  if (sea.x<0){
  sea.x=sea.width/2;
  }
  ship.collide(sea);
  drawSprites();
 
}