class snow {

 constructor(x, y) {

   this.image = loadImage("snow4.webp");

    this.body = Matter.Bodies.circle(x, y, 20);
    
    World.add(world, this.body);

 }

 display() {

    push();
    imageMode(CENTER);
    translate (this.body.position.x, this.body.position.y)
    rotate (this.body.angle)
    image(this.image, 0,0, 50, 50); 
    pop()

 }


}