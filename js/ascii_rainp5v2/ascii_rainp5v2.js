let data = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i', '!', '@', '$', ]; 
let objects = []; // array of Jitter objects
var minSpeed = 2, maxSpeed = 4;

var numberOfObjects = 200;

//font setup
var font, fontSize =24;
var rand;

function preload(){
  font = loadFont('assets/SourceSansPro-Light.otf');
}

function setup() {
  createCanvas(1200, 400);
  
  xPos = random(width);
  yPos = random(height/2);
  
  textFont(font); 
  textSize(fontSize);
 
  
  // Create objects
  for (let i = 0; i < numberOfObjects; i++) {
    objects.push(new Ascii());
  }
}

function draw() {
  background('#212121');
  for (let i = 0; i < numberOfObjects; i++) {
    objects[i].move();
    objects[i].display();
  }
  

}

// Jitter class
class Ascii {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.c = random(10);
    this.speed = minSpeed + random(maxSpeed-minSpeed);
  }

  move() {
    this.y += this.speed;
    if (this.y > height) 
      this.y=0;
  }

  display() {
    noStroke();
    fill(240, 92,92);
    text(data[0], this.x, this.y);

  }
}
