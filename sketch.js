var car, wall;
var speed, weight
var d
var edges;
function setup() {
	createCanvas(1200,400);
	wall = createSprite(1000,200,30,height/2);
	speed= random(55,90);
	car = createSprite(50,200,25,25);
	car.shapeColor = color("Red")
;	car.velocityX = speed;

wall.setCollider("Rectangle");
weight = random(400,1500);
}

function draw() {
	car.collide(wall); 
	background(80,80,80);
	edges = createEdgeSprites();
d = (0.5*weight*speed*speed)/22500;
;
if (car.x>800 &&  d>=100||car.x>800 && d <= 180) {
	car.shapeColor = color("Yellow");
}

if ( car.x >800 && d >180) {
	car.shapeColor = ("Blue");
}

if (car.x >800 && d <100) {
	car.shapeColor = color("Green");
}
	drawSprites();


}
