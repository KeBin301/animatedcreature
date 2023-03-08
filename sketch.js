let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  strokeWeight(2);
  fill(200, 200, 200);
  rect(0, 350, width, 50);

  //main body of the fridge
  fill("violet");
  rect(100, 100, 200, 250, 20);

  // handle
  fill(150, 150, 150);
  rect(280, 200, 20, 80);
  ellipse(290, 240, 20, 20);

  //divider
  fill("purple  ");
  rect(100, 175, 200, 15);

  //magnets
  fill(255, 0, 0);
  ellipse(175, 140, 40, 40);
  ellipse(226, 254, 40, 40);
  ellipse(140, 220, 40, 40);
  ellipse(280, 311, 40, 40);
  fill("gray");
  ellipse(175, 140, 20, 20);
  ellipse(226, 254, 20, 20);
  ellipse(140, 220, 20, 20);
  ellipse(280, 311, 20, 20);

  //mouth
  noFill();
  arc(200, 270, 150, 100, PI / 8, (7 * PI) / 8);

  //eyes
  if (x >= 0) {
    fill(255);
    ellipse(150, 70, 80, 80);
    ellipse(250, 70, 80, 80);
    x--;
  } else if (x <= 1) {
    fill(255);
    ellipse(150, 70, 80, 30);
    ellipse(250, 70, 80, 30);
    x++;
  }

  fill(0);
  ellipse(150, 70, 40, 40);
  ellipse(250, 70, 40, 40);

  stroke(0);
  strokeWeight(4);
  line(30, 225, 100, 200);
  line(375, 225, 300, 200);
  
  console.log(mouseX + ", " + mouseY);
}
