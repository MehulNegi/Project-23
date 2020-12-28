var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,leftSide,rightSide,bottomSide;
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
	createCanvas(800,700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	bottomSide=createSprite(width/2,height-51,200,20);
	bottomSide.shapeColor=color("Red");

	leftSide=createSprite(300,height-90,20,100);
	leftSide.shapeColor = color("Red");

	rightSide=createSprite(500,height-90,20,100);
	rightSide.shapeColor = color("Red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	 bottom = Bodies.rectangle(width/2, height-65, 200, 20, {isStatic:true});
	 World.add(world, bottom);

	 left = Bodies.rectangle(300, height-90, 20, 100, {isStatic:true});
	 World.add(world, left);

	 right = Bodies.rectangle(500, height-90, 20, 100, {isStatic:true});
	 World.add(world, right);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody, false)
  }
}



