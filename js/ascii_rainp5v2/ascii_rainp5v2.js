let data = ['a', 'b','c', 'd', 'e', 'f', 'g', 'h', 'i','j','k','l', 
'm','n', 'o', 'p', 'q','r','s','t','u','v', 'w','x','y','z',
'1', '2', '3', '4','5', '6', '7', '8', '9','0','-', '=',
'!','@', '£', '$', '%','^','&', '*', '(', ')', '_', '+',]; 
let objects = []; // array of Jitter objects
var minSpeed = 2, maxSpeed = 4;

var numberOfObjects = 200;

//font setup
var font, fontSize = 28;
var rand;

function preload(){
  font = loadFont('assets/SourceSansPro-Bold.otf');
}

function setup() {
  createCanvas(1200, 400);
  
  
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
    objects[i].display(data[i]);
  }
  

}

// Jitter class
class Ascii {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.speed = minSpeed + random(maxSpeed-minSpeed);
  }

  move() {
    this.y += this.speed;
    if (this.y > height) 
      this.y=0;
  }

  display(character) {
    noStroke();
    fill(240, 92,92);
    text(character, this.x, this.y);
  }
}
