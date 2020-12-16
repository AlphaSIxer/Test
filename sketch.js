const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	 
	roof1= new Roof(150,20)
	b1= new Ball(50,250)
	b2= new Ball(100,250)
	b3= new Ball(150,250)
	rope1= new Rope(b1.body,roof1.roof,-100)
	rope2= new Rope(b2.body,roof1.roof,-50)
	rope3= new Rope(b3.body,roof1.roof,0)
	
	Engine.run(engine);
  
}


	function draw() {
  	background(0);
  	Engine.update(engine);
  
	roof1.display();
	b1.display();
	rope1.display();
	b2.display();
	rope2.display();
	b3.display();
	rope3.display();

  	drawSprites();
 
	}	






