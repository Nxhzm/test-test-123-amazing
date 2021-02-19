
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var launchingForce = 100
var treeObj, stone,groundObject, launcher;
var mango1, mango2, mango99;
var world,boy;


function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango99=new mango(1100,100,30);
	mango1=new mango(1150,13-0,30);
	mango2=new mango(1000,90,30);

	stone = new Stone(230, 405, 20)

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	launcher = new Launcher(stone.body, {x: 230, y: 405})
	
	Engine.run(engine);

}



function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango99.display();

  stone.display();

  launcher.display();

  groundObject.display();

  //line(pointA.x, pointA.y, pointB.x, pointB.y);
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})	
	}
	

function mouseReleased() {
	launcher.fly();
	}
