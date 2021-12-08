
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var paperball;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	var paperball_options={
		isStatic:false,
		restitution:0.0001,
		friction:0,
		density:1.2
        
	}

	ground = new Ground(500,590,1000,20);

	leftSide = new Ground(650,505,10,150);

	rightSide = new Ground(900,505,10,150);

	paperball = Bodies.circle(100,100,20,paperball_options);
  
	World.add(world,paperball);
  
	
  
}


function draw() {
  Engine.update(engine);

  rectMode(CENTER);

  ellipseMode(RADIUS);
  
  background("black");

  ground.display();

  leftSide.display();

  rightSide.display();

  ellipse(paperball.position.x,paperball.position.y,20);
  
  drawSprites();
 
}


function keyPressed()
{
 if(keyCode === UP_ARROW){
	
    Matter.Body.applyForce(paperball,{x:0,y:0},{x:75,y:0})
    
	Matter.Body.applyForce(paperball,{x:0,y:0},{x:0,y:-78})
 
}

 
}
