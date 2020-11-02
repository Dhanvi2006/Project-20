var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);

  speed=Math.round(random(55,90));
  weight=Math.round(random(400,1500));

  car=createSprite(200, 200, 50, 50);
  car.velocityX=speed;
  car.shapeColor="white";

  wall=createSprite(1300,200,30,200);
  wall.shapeColor="grey";
}

function draw() {
  background("black");
  
  if(wall.x - car.x < wall.width/2 + car.width/2)
  {
   car.velocityX=0;
   var deformation= ((0.5 * weight * speed * speed)/22500);

   if(deformation>180)
   {
     car.shapeColor="red";
   }

   if(deformation>100 && deformation<180)
   {
     car.shapeColor="yellow";
   }

   if(deformation<100)
   {
     car.shapeColor="green";
   }
  }

  drawSprites();
}

