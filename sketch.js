
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;
var roof1,bob1,bob,bob3,bob4,bob5,chain1,chain2;
var bobD=80
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

roof1=new roof(width/2,200)
bob1=new ball(width/2+160,400,bobD);
bob2=new ball(width/2+80,400,bobD);
bob3=new ball(width/2-160,400,bobD);
bob4=new ball(width/2-80,400,bobD);
bob5=new ball(width/2,400,bobD);
chain1=new chain(bob3.body,roof1.body,-bobD*2,0);
chain2=new chain(bob4.body,roof1.body,bobD*2,0);
	Engine.run(engine);
  
}


function draw() {
		Engine.update(engine);
  background("white");
  roof1.display();

  bob1.display();
  bob2.display();
  bob3.display();
bob4.display();
bob5.display();
chain1.display();
chain2.display();
}



