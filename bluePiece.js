class BluePiece{
    constructor(x,y,width,height){
        var options ={
            friction:0,
            frictionAir:0.098,
            density:0.001
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/BluePiece.png");
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
    moveLeft(){
        Matter.Body.setVelocity(this.body,{x:-6.8,y:0});
    }
    moveRight(){
        Matter.Body.setVelocity(this.body,{x:+6.8,y:0});
    }
    moveUp(){
        Matter.Body.setVelocity(this.body,{x:0,y:-6.8});
    }
}