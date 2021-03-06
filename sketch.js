const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground,groundimage;
//var horse,horseimage;
var obstacle,obstacleimage;

function preload(){
groundimage=loadImage("background.jpg")
//horseimage=loadImage("horse-run-animation.gif")
obstacleimage=loadImage("stone.png")
}

function setup() {
  createCanvas(500,500);

  engine = Engine.create();
  world = engine.world;

  ground=createSprite(500,200,800,100);
  ground.addImage(groundimage);
  ground.scale=4;
  //ground.x=ground.width/2
 
/*horse=createSprite(20,400,10,10);
horse.addImage(horseimage)
horse.scale=0.2;*/
   
obstaceGroup=new Group();

  
}

function draw() {
  background(180);
  Engine.update(engine);
  ground.velocityX=-2;

  if (ground.x < 0){
    ground.x = ground.width/2;
  }
console.log(ground.x)
  
createobstacle();
drawSprites()
}




function createobstacle(){
  if(frameCount%200===0){
    obstacle=createSprite(400,470,20,20);
    obstacle.addImage(obstacleimage);
    obstacle.velocityX=-2;
    obstacle.lifetime=800;
    obstacle.scale=0.3;
    obstaceGroup.add(obstacle);
  }
 }