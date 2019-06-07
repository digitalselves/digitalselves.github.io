var message1 = "talk to me about:",
	message2 = "live coding",
  message3 = "interfaces",
  message4 = "digital audio",
  font,
  bounds1, // holds x, y, w, h of the text's bounding box
  bounds2,
  bounds3,
  bounds4,
  fontsize = 60,
  x1, y1, x2,y2, x3, y3, x4,y4; // x and y coordinates of the text

function preload() {
  font = loadFont('assets/SourceSansPro-Light.otf');
}

function setup() {
  createCanvas(800, 800);

  // set up the font
  textFont(font);
  textSize(fontsize);

  // get the width and height of the text so we can center it initially
  bounds1 = font.textBounds(message1, 0, 0, fontsize);
  x1 = width / 2 - bounds1.w / 2;
  y1 = height / 2 - bounds1.h / 2;
  
  // get the width and height of the text so we can center it initially
  bounds2 = font.textBounds(message2, 0, 0, fontsize);
  x2 = width / 3 - bounds2.w / 2;
  y2 = height *1/4 - bounds2.h / 2;
  
 // get the width and height of the text so we can center it initially
  bounds3 = font.textBounds(message3, 0, 0, fontsize);
  x3 = width * 2/3 - bounds3.w / 2;
  y3 = height *2/3 - bounds3.h / 2;
  
  
   // get the width and height of the text so we can center it initially
  bounds4 = font.textBounds(message4, 0, 0, fontsize);
  x4 = width /3 - bounds4.w / 2;
  y4 = height *3/4 - bounds4.h / 2;
}

function draw() {
  background(204, 120);

  // write the text in black and get its bounding box
  fill(0);
  text(message1, x1, y1);
  text(message2, x2, y2);
  text(message3,x3,y3);
  text(message4, x4,y4);
  bounds1 = font.textBounds(message1,x1,y1,fontsize);
  bounds2 = font.textBounds(message2,x2,y2,fontsize);
  bounds3 = font.textBounds(message3,x3,y3, fontsize);
  bounds4 = font.textBounds(message4, x4, y4, fontsize);

  // check if the mouse is inside the bounding box and tickle if so
  if ( mouseX >= bounds1.x && mouseX <= bounds1.x + bounds1.w &&
    mouseY >= bounds1.y && mouseY <= bounds1.y + bounds1.h) {
    x1 += random(-5, 5);
    y1 += random(-5, 5);
  }
  
  if ( mouseX >= bounds2.x && mouseX <= bounds2.x + bounds2.w &&
    mouseY >= bounds2.y && mouseY <= bounds2.y + bounds2.h) {
    x2 += random(-5, 5);
    y2 += random(-5, 5);
  }
  
    if ( mouseX >= bounds3.x && mouseX <= bounds3.x + bounds3.w &&
    mouseY >= bounds3.y && mouseY <= bounds3.y + bounds3.h) {
    x3 += random(-5, 5);
    y3 += random(-5, 5);
  }
  
  
 if ( mouseX >= bounds4.x && mouseX <= bounds4.x + bounds4.w &&
    mouseY >= bounds4.y && mouseY <= bounds4.y + bounds4.h) {
    x4 += random(-5, 5);
    y4 += random(-5, 5);
  }
}
