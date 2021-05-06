const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;
var boy;
var sprite1;
var maxSnow = 100;
var snow = [];

function preload(){
  backgroundImg = loadImage("snow1.jpg");
  sprite1 = loadAnimation("Sprite2.png", "Sprite1.png");
}
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  if(frameCount % 1050 === 0){
    for(var i = 0; i<maxSnow; i++){
        snow.push(new Snow(random(0, 800), random(0, 400)));
    }
  }

  boy = createSprite(400, 250, 50, 50);
  boy.addAnimation("Sprite1.png", sprite1); 
  boy.scale = 0.5
}

function draw() {
  background(backgroundImg); 

  Engine.update(engine); 

  for(var i = 0; i<maxSnow; i++){
    snow[i].display();
    snow[i].update();
  }

  drawSprites();
}