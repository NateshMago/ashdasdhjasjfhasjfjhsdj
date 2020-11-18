var sprite1, sprite2

function setup() {
  createCanvas(800,400);
  sprite1 = createSprite(123, 400, 500, 250);
  sprite1.shapeColor = rgb(48,225,6);
  sprite2 = createSprite(321,400,500,250);
  sprite2.shapeColor = rgb(48,225,6);
}

function draw() {
  background(255,255,255);  
  
  sprite1.velocityX = 5;
  sprite2.velocityX = -5;

  if (sprite1.x-sprite2.x <= sprite1.width/2 + sprite2.width/2 && sprite1.y-sprite2.y <= sprite1.height/2 + sprite2.height/2 && sprite2.x-sprite1.x <= sprite1.width/2 + sprite2.width/2 && sprite2.y-sprite1.y <= sprite1.height/2 + sprite2.height/2){
  sprite1.shapeColor = rgb(128,223,213);
  sprite2.shapeColor = rgb(128,223,213);  
  }
  else{
    sprite1.shapeColor = rgb(48,225,6);
    sprite2.shapeColor = rgb(48,225,6);
  }
  drawSprites();
}