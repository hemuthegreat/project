var garden,rabbit,apple,appleImage;
var gardenImg,rabbitImg,leaf,redLeafImg,orangeLeafImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  orangeLeafImg = loadImage("orangeLeaf.png");
  redLeafImg = loadImage("redImage.png");  
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
  
}


function draw() {
  background(0);
  
  if(frameCount%60===0){
    spawnFood()
  }
 /* if(apple.isTouching(rabbit)){
  apple.destroy()
}*/
  
  rabbit.x=mouseX
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  leaves()
  drawSprites();
}

function spawnFood(){
  apple = createSprite(5,-10,10,10)
    apple.x = Math.round(random(10,380));
    apple.addImage(appleImg);
    apple.velocityY=2
    apple.scale=0.1
}
function leaves(){
   if(frameCount%80===0){
    leaf = createSprite(5,-10,10,10)
   leaf.x = Math.round(random(10,390))
   leaf.velocityY=1
     leaf.scale = 0.1
   
  var  rand = Math.round(random(1,2));
  switch(rand) {
      case 1: leaf.addImage(orangeLeafImg);
              break;
      case 2: leaf.addImage(redLeafImg);
              break;
  }
   }
}