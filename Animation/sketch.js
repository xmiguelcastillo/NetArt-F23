let rotationAngle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  translate(width / 2, height / 2);
  rotate(radians(rotationAngle));
  noFill();

 
  for (let i = 0; i < 50; i++) {
    stroke(map(i, 0, 80, 100, 255), map(i, 0, 80, 100, 255), 255, 100);
    ellipse(0, 0, 200 + i * 3, 200 + i * 3);
  }


  textAlign(CENTER, CENTER);
  fill(255);
  textSize(6);
  text("In the heart of the Andes, beneath the equatorial gaze, lies Ecuador—a land where ancient mysteries intertwine with the celestial ballet.", 0, 0);
  
  rotationAngle += random();
}
