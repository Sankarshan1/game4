var player,key,door,keyimg;

function preload(){
    keyimg=loadImage("key.png")
    
}

function setup(){
createCanvas(windowWidth-30,windowHeight-30)
player=createSprite(209,58,15,15)
key=createSprite(1174,39,5,5)

}
function draw(){
background(100,12,74)
console.log(mouseX)
console.log(mouseY)
strokeWeight(15)
line(40,20,150,20)
line(150,20,150,200)
line(150,120,350,120)
line(150,300,400,300)
line(7,376,200,376)
line(400,14,400,300)
line(252,200,252,441)
line(7,480,490,480)
line(390,350,390,470)
line(450,50,450,465)
line(501,15,501,445)
line(40,20,150,20)
line(40,20,150,20)
line(40,20,150,20)
if (keyDown("UP_ARROW")){
player.y-=4

}
if (keyDown("DOWN_ARROW")){
    player.y+=4
    
}
if (keyDown("RIGHT_ARROW")){
    player.x+=4
        
}
if (keyDown("LEFT_ARROW")){
     player.x-=4
            
}

//if (player.collide(key)){
key.shapeColour="red";
//}

drawSprites();
}