const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var polygonImg,polygon;
var gameState = "onSling"

function preload(){
    polygonImg = loadImage("polygon.png")
}
function setup() {
	createCanvas(1000, 500);
    engine = Engine.create();
	world = engine.world;

    polygon = Bodies.circle(50,200,20,{density : 2});
    World.add(world,polygon);
    slingShot = new SlingShot(this.polygon,{x:100,y:200})
	
   
    R1box1 = new Box(410,430,30,40)
    R1box2 = new Box(440,430,30,40)
    R1box3 = new Box(470,430,30,40)    
    R1box4 = new Box(500,430,30,40)
    R1box5 = new Box(530,430,30,40)
    R1box6 = new Box(560,430,30,40)
    R1box7 = new Box(590,430,30,40)
    R2box2 = new Box(440,390,30,40)
    R2box3 = new Box(470,390,30,40)    
    R2box4 = new Box(500,390,30,40)
    R2box5 = new Box(530,390,30,40)
    R2box6 = new Box(560,390,30,40)
    R3box3 = new Box(470,350,30,40)    
    R3box4 = new Box(500,350,30,40)
    R3box5 = new Box(530,350,30,40)
    R4box4 = new Box(500,310,30,40)
    ground1 = new Ground(500,450,230,10)
    R1block1 = new Box(740,225,30,40)
    R1block2 = new Box(770,225,30,40)
    R1block3 = new Box(800,225,30,40)
    R1block4 = new Box(830,225,30,40)
    R1block5 = new Box(860,225,30,40)
    R2block2 = new Box(770,185,30,40)
    R2block3 = new Box(800,185,30,40)
    R2block4 = new Box(830,185,30,40)
    R3block3 = new Box(800,145,30,40)
    ground2 = new Ground(800,250,230,10)
    
    Engine.run(engine);
  
}
function draw() {
    rectMode(CENTER);
    background(0);
    imageMode (CENTER)
    image(polygonImg,polygon.position.x,polygon.position.y,40,40)
    fill ("lightBlue")
    R1box1.display();
    R1box2.display();
    R1box3.display();
    R1box4.display();
    R1box5.display();
    R1box6.display();
    R1box7.display();
    fill ("pink")
    R2box2.display();
    R2box3.display();
    R2box4.display();
    R2box5.display();
    R2box6.display();
    fill (63,224,208)
    R3box3.display();
    R3box4.display();
    R3box5.display();
    fill (119,126,123)
    R4box4.display();
    fill ("lightBlue")
    R1block1.display();
    R1block2.display();
    R1block3.display();
    R1block4.display();
    R1block5.display();
    fill (63,224,208)
    R2block2.display();
    R2block3.display();
    R2block4.display();
    fill ("pink")
    R3block3.display();
    ground1.display();
    ground2.display();
    slingShot.display()
}  
function mouseDragged(){
    //if(gameState !== "launched"){
     Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})  
   // }
}
  
  function mouseReleased(){
    slingShot.fly()
    //gameState = "launched"
  }
  
  function keyPressed(){
    if (keyCode === 32){
    slingShot.attach(this.polygon)
  }
  
  
  
  }