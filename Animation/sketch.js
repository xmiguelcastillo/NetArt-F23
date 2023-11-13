let rotationAngle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);

  translate(width / 2, height / 2);
  rotate(radians(rotationAngle));
  noFill();

  // Draw ellipses
  for (let i = 0; i < 50; i++) {
    stroke(map(i, 0, 80, 100, 255), map(i, 0, 80, 100, 255), 255, 100);
    ellipse(0, 0, 200 + i * 3, 200 + i * 3);
  }

  // Draw poem text
  textAlign(CENTER, CENTER);
  fill(255);
  textSize(18);
  text("In the heart of the Andes, beneath the equatorial gaze, lies Ecuador—a land where ancient mysteries intertwine with the celestial ballet. As night falls, the canvas of stars unfolds, revealing a cosmic poem written above the majestic peaks of Cotopaxi. The cosmic dance echoes from the Amazon to the Pacific shore, a symphony of elements and constellations. Amidst the vastness of space, Ecuador's beauty shines as a celestial law, inviting all to gaze upon the cosmic waltz and embrace the eternal romance between the Andean landscape and the stars.", 0, 0);
  
  rotationAngle += random();
}
