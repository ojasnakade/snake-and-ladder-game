const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var dice,blueSpace,blueMoved;

function preload(){

    backgroundImg = loadImage("sprites/background.png");

}

function setup(){

    createCanvas(600,800);
    engine = Engine.create();
    world = engine.world;
    engine.world.gravity.y=0;

    dice=[false,1,0,false,0];
    bluepiece = new BluePiece(20,570,40,40);
    blueSpace=1;
    blueMoved=false;

}

function draw(){

    background(0);
    
    Engine.update(engine);

    image(backgroundImg,0,0,600,600);

    bluepiece.display();
    stroke(0);
    strokeWeight(8);
    line(0,602,600,602);

    if(dice[3]===false){
        drawDice(525,665,dice[1]);
    }
    else {
    if(dice[4]%2===0){
        drawDice(525,665,dice[1]);
        if(blueMoved===false&&blueSpace!=100){
            if(blueSpace%10===0){
                bluepiece.moveUp();
            }
            else{
                var num=Math.floor(blueSpace/10);
            if(num===0||num===2||num===4||num===6||num===8){
                bluepiece.moveRight();
            }
            else{
                bluepiece.moveLeft();
            }
          }
          blueMoved=true;
          blueSpace++;
        }
    }
    if(frameCount%15===0){
        dice[4]--;
        blueMoved=false;
        if(dice[4]===0){
            dice[3]=false;
            dice[0]=false;
            ladderSnake();
        }
    }
 }
    //make the dice roll
    if(dice[0]===true&&dice[2]>0&&frameCount%5===0){
        dice[2]--;
        dice[1]++;
        if(dice[1]>6){
            dice[1]=1;
        }
        if(dice[2]===0){
            dice[3]=true;
            dice[4]=dice[1]*2;
        }
    }
}
    
function drawDice(x,y,side){

    fill("white");
    strokeWeight(8);
    rectMode(CENTER);
    rect(x,y,100,100,20);

    fill("black");
    strokeWeight(3);
    if(side === 1){
        circle(x,y,20);
    }
    else if(side === 2){
        circle(x-25,y-25,20);
        circle(x+25,y+25,20);
    }
    else if(side === 3){
        circle(x-25,y-25,20);
        circle(x,y,20);
        circle(x+25,y+25,20);
    }
    else if(side === 4){
        circle(x-25,y-25,20);
        circle(x-25,y+25,20);
        circle(x+25,y-25,20);
        circle(x+25,y+25,20);
    }
    else if(side === 5){
        circle(x-25,y-25,20);
        circle(x-25,y+25,20);
        circle(x,y,20);
        circle(x+25,y-25,20);
        circle(x+25,y+25,20);
    }
    else if(side === 6){
        circle(x-25,y-25,20);
        circle(x-25,y+25,20);
        circle(x+25,y-25,20);
        circle(x+25,y+25,20);
        circle(x+25,y,20);
        circle(x-25,y,20);
    }
}
  
function ladderSnake(){
    //ladders
    if(blueSpace===2){
        Matter.Body.setVelocity(bluepiece.body,{x:7,y:-13});
        blueSpace=23;
    }
    if(blueSpace===6){
        Matter.Body.setVelocity(bluepiece.body,{x:-6,y:-26});
        blueSpace=45;
    }
    if(blueSpace===20){
        Matter.Body.setVelocity(bluepiece.body,{x:7,y:-26});
        blueSpace=59;
    }
    if(blueSpace===28){
        Matter.Body.setVelocity(bluepiece.body,{x:7,y:-13});
        blueSpace=49;
    }
    if(blueSpace===52){
        Matter.Body.setVelocity(bluepiece.body,{x:0,y:-13});
        blueSpace=72;
    }
    if(blueSpace===57){
        Matter.Body.setVelocity(bluepiece.body,{x:7,y:-26});
        blueSpace=96;
    }
    if(blueSpace===71){
        Matter.Body.setVelocity(bluepiece.body,{x:-7,y:-13});
        blueSpace=92;
    }
    //snakes
    if(blueSpace===43){
        Matter.Body.setVelocity(bluepiece.body,{x:7,y:20});
        blueSpace=17;
    }
    if(blueSpace===50){
        Matter.Body.setVelocity(bluepiece.body,{x:-32,y:26});
        blueSpace=5;
    }
    if(blueSpace===56){
        Matter.Body.setVelocity(bluepiece.body,{x:20,y:33});
        blueSpace=8;
    }
    if(blueSpace===73){
        Matter.Body.setVelocity(bluepiece.body,{x:-13,y:38});
        blueSpace=15;
    }
    if(blueSpace===84){
        Matter.Body.setVelocity(bluepiece.body,{x:-7,y:13});
        blueSpace=63;
    }
    if(blueSpace===87){
        Matter.Body.setVelocity(bluepiece.body,{x:12,y:26});
        blueSpace=49;
    }
    if(blueSpace===98){
        Matter.Body.setVelocity(bluepiece.body,{x:-14,y:39});
        blueSpace=40;
    }
}

function keyPressed(){
    if(keyCode===32&&dice[0]===false){
        dice[0]=true;
        dice[2]=Math.round(random(12,18));
    }
}