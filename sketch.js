let space1 = [];
let animalos = [];
let disable;

function setup() {
  createCanvas(1000, 1000);
  disable = new tierra2(900,900);

  for (let i = 0; i < 6; i++) {
    space1.push(new tierra1(70 + 150 * i, 100));
  }
  for (let i = 0; i < 3; i++) {
    animalos.push(new animal(150 * i + 100, 400));
  }
}

function draw() {

  background(220);
  disable.display();
  animalos.forEach(y => {
    y.casant(disable)
  space1.forEach(e => {
    e.display()
      y.casa(e)
    });
  })
  animalos.forEach(e => {
    e.display();
    if (e.anmove == true) {
      e.mover();
    }

  });

}

class animal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 50
    this.anmove = false;
    this.estar = false;
    this.r = 0;
    this.g = 0;
    this.b = 0;
  }

  display() {
    rectMode(CENTER);
    fill(this.r, this.g, this.b);
    square(this.x, this.y, this.diameter);
  }

  mover() {
    this.x = mouseX;
    this.y = mouseY;
  }

  casa(c){

    if(dist(this.x,this.y,c.x,c.y)< c.diameter&& c.tierra=="yas"){
      this.estar = true;
      this.r =100;
      this.g= 255;
      this.b=0;
    }

  }
  casant(c){
    if(dist(this.x,this.y,c.x,c.y)< c.diameter){
      this.estar = false;
      this.r =255;
      this.g= 0;
      this.b=0;
    }

  }

}
class tierra1 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 100
  }

  display() {
    rectMode(CENTER);
    fill(100);
    square(this.x, this.y, this.diameter);
  }
}
class tierra2 {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.diameter = 100
  }

  display() {
    rectMode(CENTER);
    fill(0);
    square(this.x, this.y, this.diameter);
  }


}

function mousePressed() {
  animalos.forEach(e => {
    let d = dist(mouseX, mouseY, e.x, e.y)
    if (d < e.diameter) {
      e.anmove = true;
    }
    console.log(e.estar)
  });
}

function mouseReleased() {
  animalos.forEach(e => {
    e.anmove = false;
  });
}