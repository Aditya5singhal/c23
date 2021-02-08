const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World = Matter.World 

var engine,world,obj1;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;


 box1 = new Box(100,200,50,70);
 box2=  new Box(300,250,90,100);

Ground1=new Ground(300,395,800,10);


}

function draw() {
  background("lightgreen");
  Engine.update(engine)
  
  box1.display();
  box2.display();
  Ground1.display();
  
}