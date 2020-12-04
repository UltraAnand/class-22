const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine,world,object

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  var startic = {
    isStatic: true
  }
  object = Bodies.rectangle(200,200,50,50,startic)
  World.add(world,object);
  console.log(object);

}

function draw() {
  background("black");  
  var pos = object.position

  rect(pos.x,pos.y,50,50);

  Engine.update(engine);

  
  
}