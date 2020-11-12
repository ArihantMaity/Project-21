

var bullet,speed,weight;
var wall,thickness; 


function setup() {
  createCanvas(1600, 400);
  speed=random(223,321);

  bullet=createSprite(100,height/2,80,10);
  bullet.shapeColor="yellow";
  bullet.velocityX=speed;

  thickness=random(22,83);

  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor="orange";

  speed=random(223,321);
  weight=random(30,52);
}


function draw() {
  background(0);

if(hascollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor="blue";

  }
  if(damage<10){
    wall.shapeColor="green";
  }
}
  
  drawSprites();
 
}

function hascollided(lbullet,lwall){
bulletRightEdge=lbullet.x+bullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
else{
  return false;
}
}
