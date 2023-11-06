function setup() {
  createCanvas(windowWidth, windowHeight);
}

let rotationAngle = 0; 

function draw() {
  background(0);

  translate(width / 2, height / 2);
  rotate(radians(rotationAngle)); 
  noFill();
  
  for (let i = 0; i < 50; i++) {
    stroke(map(i, 0, 80, 100, 255), map(i, 0, 80, 100, 255), 255, 100);
    ellipse(0, 0, 200 + i * 3, 200 + i * 3);
  }

  rotationAngle += random(); 
}
