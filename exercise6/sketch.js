let balls = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  let black = 0;
  background(black);
  
  for (let i of balls) {
    i.display();
  
  }
}

function mousePressed() {
  let col = color(random(255), random(255), random(255)); 
  let size = random(12, 150); 
  balls.push(new Circle(mouseX, mouseY, size, col));
}

class Circle {
  constructor(x, y, size, col) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.col = col;
  }

  display() {
    fill(this.col);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }


}
