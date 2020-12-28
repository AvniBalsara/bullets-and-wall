var bullet1,bullet2,bullet3,bullet4,bullet, wall;
//var partition1,partition2,partition3;
var speed , weight;

function setup(){
   createCanvas(1600,400);

   speed=random(223,321);
   weight=random(30,52);
   thickness=random(22,83);

   bullet1=createSprite(100,50,20,10);
   bullet1.shapeColor=color("white");
 
   wall=createSprite(1200,200,thickness,height/2);
   wall.shapeColor=color(80,400,200);

}

function draw(){

  background(0);

  
 //hasCollided();
  drawSprites();
}

function hasCollided(Lbullet1,Lwall)
{
  bullet1RightEdge = lbullet1.x + lbullet1.width;
  wallLeftEdge = lwall.x;
  if (bullet1RightEdge>=wallLeftEdge)
  {
    return true
  }
   return false;
}

if(hasCollided(bullet1,wall)){

  bullet1.velocityX=0;

var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

if(damage>10){

  wall.shapeColor(255,0,0);
  }

if(damage<10){

  wall.shapeColor(0,255,0);
  }

 }




