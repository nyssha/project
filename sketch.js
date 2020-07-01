var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(130, 200, 30,30);
	//packageSprite.addImage(packageIMG)
	//packageSprite.scale=0.2
	packageSprite.shapeColor=color("cyan")

	helicopterSprite=createSprite(100, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1=createSprite(690,650,200,20);
	             
	box2=createSprite(600,610,20,100);
	             
	box3=createSprite(790,610,20,100);
	             

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(130 , 200 , 5 );
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	Engine.run(engine);

	
		
		}
  



function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
box1.shapeColor=color(255,0,0);
box2.shapeColor=color(255,0,0);
box3.shapeColor=color(255,0,0);

  drawSprites();

}

function keyPressed() {
 if (keyCode === UP_ARROW) {

	
  }
}



