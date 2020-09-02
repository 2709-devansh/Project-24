var ball;
var ground1;
var dust;
var imgBall;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1350, 670);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new paper(200,450,15);
	
	ground1 = new ground(670,675,1350,50);
	
	dust = new dustbin();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("turquoise");  
  drawSprites();
  ball.display();
  ground1.display();
  dust.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(ball.body,ball.body.position,{x:50,y:-50});
	 }
   }