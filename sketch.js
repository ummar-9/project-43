var iss, spacecraft, hasDocked;
hasDocked = false; 

function preload(){
issImg = loadImage("Docking-undocking/iss.png");
backgroundImg = loadImage("Docking-undocking/spacebg.jpg");
spacecraft1Img = loadImage("Docking-undocking/spacecraft1.png");
spacecraft2Img = loadImage("Docking-undocking/spacecraft1.png");
spacecraft3Img = loadImage("Docking-undocking/spacecraft1.png");
spacecraft4Img = loadImage("Docking-undocking/spacecraft1.png");
}
function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.9

  spacecraft = createSprite(100,300,20,20);
  spacecraft.x = random(50,750);
  spacecraft.addAnimation("normal",spacecraft1Img);
  spacecraft.addAnimation("up",spacecraft2Img);
  spacecraft.addAnimation("right",spacecraft3Img);
  spacecraft.addAnimation("left",spacecraft4Img);
  spacecraft.scale = 0.1;
  spacecraft.changeAnimation("normal",spacecraft1Img);
}

function draw() {
  background(backgroundImg); 
  
  if(!hasDocked){
    
  if(keyIsDown(LEFT_ARROW)){
    spacecraft.changeAnimation("left",spacecraft4Img);
    spacecraft.x = spacecraft.x - 5;
  }
  if(keyIsDown(RIGHT_ARROW)){
    spacecraft.changeAnimation("right",spacecraft3Img);
    spacecraft.x = spacecraft.x + 5;
  }
  if(keyIsDown(UP_ARROW)){
    spacecraft.changeAnimation("up",spacecraft2Img);
    spacecraft.x = spacecraft.x + 5;
  }
  
  }
  if(spacecraft.collide(iss)){
    hasDocked = true;
    text(350,400,"Docking Successful!")
  }
  drawSprites();
}
