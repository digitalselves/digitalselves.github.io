
let charset = ':(,:),:S, :O, :/, >:(';
let splitString = charset.split(',');


//Raindrop-like objects
function Drop() {
  this.spawn = function (y, y2) {
    this.x = random(width);
    
    //Spread out the drops
    this.y = random(y, y2);
    
    // Z value used to adjust size and fall speed  for a 3D effect
    this.z = random(0, 20);
    this.size = map(this.z, 0, 20, 9, 20);
    this.yspeed = map(this.z, 0, 20, 10, 30);
  }
  
  //Spread the drops out far at first
  this.spawn(-900, -10);

  this.fall = function () {
    this.y = this.y + this.yspeed;

    if (this.y > height) {
      /* Reset the drop
      spreading is not
      as important */
      this.spawn(-200, -100);
    }
  };

  this.show = function () {
    textSize(this.size); //smaller is "farther away"
    fill("#F00"); //green text
    text(random(splitString), this.x, this.y); //change character for each update
  }
}

var drops = [];

function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.style('position', 'fixed');
  canvas.style('top', '0');
  canvas.style('left', '0');
  canvas.style('z-index', '-1');
  canvas.id('myCanvas');
  
  frameRate(15); //15-20 for nice fallspeed
  
  for (var i = 0; i < 150; i++) {
    drops[i] = new Drop();
  }


}

function draw() {
  /* Lower opacity background
  for longer trail 
  (causes old characters to fade
  as new backgrounds are layered on)*/
  background('rgba(0, 0, 0, 0.2)');
  
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    
    /* optionally draw larger (closer)
    drops on top */
    // drops.sort(function (a, b) {
    //   return a.z - b.z;
    // });
    
    drops[i].show();
  }
}

function windowResized() {
  // Calculate the desired width and height
  var desiredWidth = windowWidth;
  var desiredHeight = Math.max(document.body.scrollHeight, windowHeight);
  
  // Resize the canvas
  resizeCanvas(desiredWidth, desiredHeight);
}