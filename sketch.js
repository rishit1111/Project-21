var bullet,wall;
var speed, weight,thickness;
function setup() {
  createCanvas(1600,400);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,50,5);
  wall=createSprite(1200,200,thickness,height/2);
  thickness=random(22,83);
  bullet.shapeColor="yellow";
  wall.shapeColor=color(230,230,230);
  bullet.velocityX=speed;
}

function draw() {
  background(0);  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var deformation=0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(deformation>10)
    {
      wall.shapeColor=color(255,0,0);
    }
    if(deformation<10 )
    {
      wall.shapeColor=color(0,255,0);
    }
    
    }
  
  drawSprites();
}
 function hasCollided(bullet1,wall1)
 {
   bulletrightEdge=bullet1.x+bullet1.width
   wallleftEdge=wall1.x
   if(bulletrightEdge>=wallleftEdge)
   {
     return true
   }
   return false;
 }