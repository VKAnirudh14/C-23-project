const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;



var engine,world;
var tower1,tower2,box1,box2,box3;
var ground;

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  tower1=new Box(100,100,50,300);
  tower2=new Box(700,100,50,300);
  box1=new Box(250,100,150,200);
  box2=new Box(550,100,150,200);
  box3=new Box(400,100,150,300);
  ground=new Ground(400,380,800,20);
  fill("white");
  triangle(550,50,600,30,550,100);
}

function draw() {
  background(0); 
  Engine.update(engine);
  tower1.display();
  tower2.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
}