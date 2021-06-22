const Engine = Matter.Engine;

const World= Matter.World;

const Bodies = Matter.Bodies;

function preload() {

s1 = loadImage("snow1.jpg");
s2 = loadImage("snow2.jpg");
s3 = loadImage("snow3.jpg");

}

function setup() {
  createCanvas(1000,500);

    engine = Engine.create();
    world = engine.world;

  back = createSprite(400, 200, 50, 50);
  back.addImage(s2); 

  c1 = new snow(50, 50);
  c2 = new snow(80, 50);
  c3 = new snow(110, 50);
  c4 = new snow(140, 50);
  c5 = new snow(170, 50);
  c6 = new snow(200, 50);
  c7 = new snow(230, 50);
  c8 = new snow(260, 50);
  c9 = new snow(290, 50);
  c10 = new snow(320,50);
  c11 = new snow(350,50);
  c12 = new snow(380, 50);
  c13 = new snow(410,50);
  c14 = new snow(440, 50);
  c15 = new snow(470, 50);
  c16 = new snow(500, 50);
  c17 = new snow(530,50);
  c18 = new snow(560,50);
  c19 = new snow(590, 50);
  c20 = new snow(620, 50);
  c21 = new snow(650,50);
  c22 = new snow(680, 50);
  c23 = new snow(710, 50);
  c24 = new snow(740, 50);
  c25 = new snow(770, 50);
  c26 = new snow(800, 50);
  c28 = new snow(830, 50);
  c29 = new snow(860,50);
  c30 = new snow(890,50);
  c31 = new snow(920,50);
  c32 = new snow(950,50);
  c33 = new snow(980,50);
  c34 = new snow(990,50);
  c35 = new snow(1000,50);
  

}

function draw() {
  background(225, 225, 225);
  Matter.Engine.update(engine);  
  drawSprites();

  if(c1.body.position.y   > 400){
    Matter.Body.setPosition(c1.body, {x: random (10, 1000), y: 10} )}

   c1.display();
   c2.display();
   c3.display();
   c4.display();
   c5.display();
   c6.display();
   c7.display();
   c8.display();
   c9.display();
   c10.display();
   c11.display();
   c12.display();
   c13.display();
   c14.display();
   c15.display();
   c16.display();
   c17.display();
   c18.display();
   c19.display();
   c20.display();
   c21.display();
   c22.display();
   c23.display();
   c24.display();
   c25.display();
   c26.display();
   //c27.display();
   c28.display();
   c29.display();
   c30.display();
   c31.display();
   c32.display();
   c33.display();
   c34.display();
   c35.display();

}