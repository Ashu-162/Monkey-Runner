var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {
  monkey = createSprite(80, 315, 20, 20)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;


  ground = createSprite(400, 350, 900, 10)
  ground.velocityX = -4;
  ground.x = ground.width / 2;


  score = 0;

  FoodGroup = new Group();
  obstacleGroup = new Group();
}


function draw() {
  background("white");
  drawSprites();

  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500, 50);
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount / frameRate())
  text("Survival Time: " + survivalTime, 100, 50);


  //jump when the space key is pressed
  if (keyDown("space") && monkey.y >= 100) {
    monkey.velocityY = -12;

  }
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground);



  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }




  spawnBanana();
  spawnRock();
}

function spawnBanana() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(600, 120, 40, 10);
    banana.y = Math.round(random(120, 200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;

    //assign lifetime to the variable
    banana.lifetime = 200;


    FoodGroup.add(banana);
  }
}

function spawnRock() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400, 350, 20, 20);
    obstacle.y = Math.round(random(350, 280));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.2;
    obstacle.velocityX = -5

    obstacle.lifetime = 300;

    obstacleGroup.add(obstacle);

  }




}