
var monkey , monkey_running, bg, bgimage
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var group

function preload(){
  
  bgimage = loadAnimation("jungle.jpg")
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadAnimation("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
  bg = createSprite(300,0,600,400)
  bg.addAnimation("baka",bgimage)
  bg.scale = 1.5
  bg.velocityX=-4;
  bg.x=bg.width/2;

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  ground=createSprite(600,350,2700,10);
  ground.visible = false;
  
  //monkey.setCollider("rectangle",0,0,10,10);
  FoodGroup = new Group()
  obstacleGroup = new Group()
}


function draw() {
background(255);

  if(bg.x<0){
    bg.x=bg.width/2;
  }
  
  if(keyDown("space")&&monkey.y>=300){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.5
  monkey.collide(ground);

  if (monkey.isTouching(obstacleGroup)){
    monkey.scale = 0.1 
    score = 0
  }

  if(monkey.isTouching(FoodGroup)){
    score = score+2
    FoodGroup.destroyEach()
  }

  switch(score){
    case 10 : monkey.scale=0.15
    break
    case 20 : monkey.scale=0.25
    break
    case 30 : monkey.scale=0.3
    break
    case 40 : monkey.scale=0.4
    break
    default : break
  }
  banana();
  obstacle();
  drawSprites();
  fill("white");
  textSize(25)
  text("Score :" + score,500,100)
}
function banana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,200,40,10);
    banana.addAnimation("lael",bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    FoodGroup.add(banana)


  }
}

function obstacle() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600,330,40,40);
    //obstacle.addImage("label",obstacleImage);
    //obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle)
    

  }
}