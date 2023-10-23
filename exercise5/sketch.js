function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255);
  frameRate(5);
}

function draw() {
  background(5, 14, 21);

 
  for (var x = 50; x <= width - 50; x += 50) {
    for (var y = 50; y <= height - 50; y += 50) {
      stroke(random(255), random(255), random(255));
      line(x, y, width / 2, height / 2);
      fill(random(255), random(255), random(255), 100);
      
      let rectSize = random(1, 12);
      rect(x - rectSize / 2, y - rectSize / 2, rectSize, rectSize);
    }
  }
}