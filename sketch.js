var paper1, ground1;
var leftside1, bottomside1, rightside1;

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

	paper1 = new Paper (100, 600, 10);

	ground1 = new Ground(400,680,800,20);

	leftside11 = new Dustbin(550,620,20,100);
	bottomside1 = new Dustbin(610,660,100,20);
	rightside1 = new Dustbin(670,620,20,100);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);

  background(0);

  Engine.update(engine)

  paper.display()
  ground.display()
  leftside.display()
  bottomside.display()
  rightside.display()


  
  drawSprites();
 
}

function keyPressed(){
	if(keycode == UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:15, y:-15})
	}
}




