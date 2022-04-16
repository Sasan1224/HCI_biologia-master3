let rest;
let space1;
let space2;
let space3;
let space4;
let space5;
let space6;
let space7;
let space8;

let anim1;
let anim2;
let anim3;
let anim4;
let anim5;
let anim6;
let anim7;
let anim8;
let anim9;
let anim10;
let anim11;
let anim12;
let anim13;
let anim14;
let anim15;
let anim16;
let anim17;
let anim18;

let fondo1;
let fondo2;
let fondo3;
let imag1;

let contara;

let botom;

let pantalla;

let arreglo_ecosistemas;

let arreglo_animales;

let animalactual;

let ecosistemaactual;

function setup() {
  createCanvas(1900, 1000);
  arreglo_ecosistemas = [
    "terrestre","acuatico","aereo","desierto"
  ]
  arreglo_animales = [
    "mapache","tiburon","gaviota","camello"
  ]
  rest = new terra("",1560, 500, 490, 870);
  space1 = new terra(arreglo_ecosistemas[0],200, 260, 350, 220);
  space2 = new terra(arreglo_ecosistemas[1],560, 260, 350, 220);
  space3 = new terra(arreglo_ecosistemas[2],920, 260, 350, 220);
  space4 = new terra(arreglo_ecosistemas[3],200, 600, 350, 220);
 
 
  anim1 = new animal("1",["terrestre"],1400, 150, 130, 130);
  anim2 = new animal("2",["acuatico"],1560, 150, 130, 130);
  anim3 = new animal("3",["aereo"],1720, 150, 130, 130);
  anim4 = new animal("4",["desierto"],1400, 290, 130, 130);
  anim5 = new animal("5",[],1560, 290, 130, 130);
  anim6 = new animal("6",[],1720, 290, 130, 130);
  anim7 = new animal("7",[],1400, 430, 130, 130);
  anim8 = new animal("8",[],1560, 430, 130, 130);
  anim9 = new animal("9",[],1720, 430, 130, 130);
  anim10 = new animal("10",[],1400, 570, 130, 130);
  anim11 = new animal("11",[],1560, 570, 130, 130);
  anim12 = new animal("12",[],1720, 570, 130, 130);
  anim13 = new animal("13",[],1400, 710, 130, 130);
  anim14 = new animal("14",[],1560, 710, 130, 130);
  anim15 = new animal("15",[],1720, 710, 130, 130);
  anim16 = new animal("16",[],1400, 850, 130, 130);
  anim17 = new animal("17",[],1560, 850, 130, 130);
  anim18 = new animal("18",[],1720, 850, 130, 130);


  fondo1 = loadImage('./imgs/fondo1.png')
  fondo2 = loadImage('./imgs/fondo2.png')
  fondo3 = loadImage('./imgs/fondo3.png')

  contara = new contadro(100, 60)

  botom = new boton(100,100)

  pantalla = 5;
}

function draw() {
  background(220);
imageMode(CENTER)

  switch (pantalla) {
    case 0:
      image(fondo1, 950, 500)
      break;
    case 1:
      image(fondo1, 950, 500)
      break;
    case 2:
      image(fondo1, 950, 500)
      break;
    case 3:
      image(fondo2, 950, 500)
      break;
    case 4:
      image(fondo2, 950, 500)
      break;
    case 5:
      image(fondo2, 950, 500)
      botom.display()
      break;
    case 6:
      image(fondo3, 950, 500)
     

      rest.display()
      space1.display();
      space2.display();
      space3.display();
      space4.display();
     

      contara.display()

      anim1.display();
      anim2.display();
      anim3.display();
      anim4.display();
      anim5.display();
      anim6.display();
      anim7.display();
      anim8.display();
      anim9.display();
      anim10.display();
      anim11.display();
      anim12.display();


      if (anim1.anmove == true) {
        anim1.mover();
      }
      if (anim2.anmove == true) {
        anim2.mover();
      }
      if (anim3.anmove == true) {
        anim3.mover();
      }
      if (anim4.anmove == true) {
        anim4.mover();
      }
      if (anim5.anmove == true) {
        anim5.mover();
      }
      if (anim6.anmove == true) {
        anim6.mover();
      }
      if (anim7.anmove == true) {
        anim7.mover();
      }
      if (anim8.anmove == true) {
        anim8.mover();
      }
      if (anim9.anmove == true) {
        anim9.mover();
      }
      if (anim10.anmove == true) {
        anim10.mover();
      }
      if (anim11.anmove == true) {
        anim11.mover();
      }
      if (anim12.anmove == true) {
        anim12.mover();
      }
      if (anim13.anmove == true) {
        anim13.mover();
      }
      if (anim14.anmove == true) {
        anim14.mover();
      }
      if (anim15.anmove == true) {
        anim15.mover();
      }
      if (anim16.anmove == true) {
        anim16.mover();
      }
      if (anim17.anmove == true) {
        anim17.mover();
      }
      if (anim18.anmove == true) {
        anim18.mover();
      }

      dazul(anim1, space1)
      dverde(anim2, space2)
      drojo(anim3, space3)
      detec(anim1, rest)
      detec(anim2, rest)
      detec(anim3, rest)

      break;
    case 7:
      image(fondo2, 950, 500)
      break;
    case 8:
      image(fondo3, 950, 500)

      rest.display()
      space1.display();
      space2.display();
      space3.display();
      

      contara.display()

      anim1.display();
      anim2.display();
      anim3.display();
      anim4.display();
      anim5.display();
      anim6.display();
      anim7.display();
      anim8.display();
      anim9.display();
      anim10.display();
      anim11.display();
      anim12.display();
      anim13.display();
      anim14.display();
      anim15.display();
      anim16.display();
      anim17.display();
      anim18.display();

      if (anim1.anmove == true) {
        anim1.mover();
      }
      if (anim2.anmove == true) {
        anim2.mover();
      }
      if (anim3.anmove == true) {
        anim3.mover();
      }
      if (anim4.anmove == true) {
        anim4.mover();
      }
      if (anim5.anmove == true) {
        anim5.mover();
      }
      if (anim6.anmove == true) {
        anim6.mover();
      }
      if (anim7.anmove == true) {
        anim7.mover();
      }
      if (anim8.anmove == true) {
        anim8.mover();
      }
      if (anim9.anmove == true) {
        anim9.mover();
      }
      if (anim10.anmove == true) {
        anim10.mover();
      }
      if (anim11.anmove == true) {
        anim11.mover();
      }
      if (anim12.anmove == true) {
        anim12.mover();
      }
      if (anim13.anmove == true) {
        anim13.mover();
      }
      if (anim14.anmove == true) {
        anim14.mover();
      }
      if (anim15.anmove == true) {
        anim15.mover();
      }
      if (anim16.anmove == true) {
        anim16.mover();
      }
      if (anim17.anmove == true) {
        anim17.mover();
      }
      if (anim18.anmove == true) {
        anim18.mover();
      }

      dazul(anim1, space1)
      dverde(anim2, space2)
      drojo(anim3, space3)
      detec(anim1, rest)
      detec(anim2, rest)
      detec(anim3, rest)
      break;
    case 9:

      break;

    default:
      break;
  }



}
class contadro {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.d1 = 100;
    this.d2 = 50;
    this.puntos = 0;
  }
  display() {
    rectMode(CENTER);
    rect(this.x, this.y, this.d1, this.d2);
    fill(0)
    textSize(20)
    textAlign(CENTER)
    text("puntos : " + this.puntos, this.x, this.y + 6)
  }
}
class boton {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.d1 = 100;
    this.d2 = 50;
  }
  display() {
    rectMode(CENTER);
    fill(50);
    rect(this.x, this.y, this.d1, this.d2);
    fill(255)
    triangle(this.x+40,this.y,this.x+30,this.y+10,this.x+30,this.y-10)
    
    textSize(20)
    textAlign(CENTER)
    text("yass", this.x, this.y + 6)
  }
}
class animal {
  constructor(name,ecosystems,x, y, d1, d2) {
    this.ecosystems = ecosystems;
    this.name = name;
    this.img = loadImage('./imgs/ma.jpg');
    this.x = x;
    this.initialX = x;
    this.y = y;
    this.initialY = y;
    this.d1 = d1
    this.d2 = d2
    this.anmove = false;
    this.corecto = false
    this.r = 0;
    this.g = 0;
    this.b = 0;
  }

  display() {
    rectMode(CENTER);
    fill(this.r, this.g, this.b);
    rect(this.x, this.y, this.d1, this.d2);
    image(this.img, this.x, this.y, this.d1, this.d2 - 10)

  }

  mover() {
    this.x = mouseX;
    this.y = mouseY;
  }

  iscurrentanimal(){
    if (mouseX > this.x - (this.d1 / 2) && mouseX < this.x + (this.d1 / 2) && mouseY > this.y - (this.d2 / 2) && mouseY < this.y + (this.d2 / 2)) {
    return true;
    }
    return false;
  }
}

class terra {
  constructor(name, x, y, d1, d2) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.d1 = d1
    this.d2 = d2

  }

  display() {
    rectMode(CENTER);
    fill(100);
    rect(this.x, this.y, this.d1, this.d2);
  } 
  
  iscurrentterra(){
    if (mouseX > this.x - (this.d1 / 2) && mouseX < this.x + (this.d1 / 2) && mouseY > this.y - (this.d2 / 2) && mouseY < this.y + (this.d2 / 2)) {
    return true;
    }
    return false;
  }
}

function organizarpre(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12) {
  a1.x = 1450;
  a1.y = 150;
  a2.x = 1700;
  a2.y = 150;
  a3.x = 1450;
  a3.y = 290;
  a4.x = 1700;
  a4.y = 290;
  a5.x = 1450;
  a5.y = 430;
  a6.x = 1700;
  a6.y = 430;
  a7.x = 1450;
  a7.y = 570;
  a8.x = 1700;
  a8.y = 570;
  a9.x = 1450;
  a9.y = 710;
  a10.x = 1700;
  a10.y = 710;
  a11.x = 1450;
  a11.y = 850;
  a12.x = 1700;
  a12.y = 850;
}

function dazul(anima, zona) {
  if (anima.x > zona.x - (zona.d1 / 2) && anima.x < zona.x + (zona.d1 / 2) && anima.y > zona.y - (zona.d2 / 2) && anima.y < zona.y + (zona.d2 / 2)) {
    anima.r = 0;
    anima.g = 0;
    anima.b = 255;
    if (anima.corecto == false) {
      contara.puntos += 10;
    }
    anima.corecto = true;
  }
}

function dverde(anima, zona) {
  if (anima.x > zona.x - (zona.d1 / 2) && anima.x < zona.x + (zona.d1 / 2) && anima.y > zona.y - (zona.d2 / 2) && anima.y < zona.y + (zona.d2 / 2)) {
    anima.r = 0;
    anima.g = 255;
    anima.b = 0;
    if (anima.corecto == false) {
      contara.puntos += 10;
    }
    anima.corecto = true;
  }
}

function drojo(anima, zona) {
  if (anima.x > zona.x - (zona.d1 / 2) && anima.x < zona.x + (zona.d1 / 2) && anima.y > zona.y - (zona.d2 / 2) && anima.y < zona.y + (zona.d2 / 2)) {
    anima.r = 255;
    anima.g = 0;
    anima.b = 0;
    if (anima.corecto == false) {
      contara.puntos += 10;
    }
    anima.corecto = true;
  }
}

function detec(anima, zona) {
  if (anima.x > zona.x - (zona.d1 / 2) && anima.x < zona.x + (zona.d1 / 2) && anima.y > zona.y - (zona.d2 / 2) && anima.y < zona.y + (zona.d2 / 2)) {
    anima.r = 0;
    anima.g = 0;
    anima.b = 0;
  }

}

function mousePressed() {
  setcurrentanimal();
console.log(animalactual);
if (pantalla==5) {
  derectarboton(botom)
}


  derectarmover(anim1);
  derectarmover(anim2);
  derectarmover(anim3)
  derectarmover(anim4);
  derectarmover(anim5);
  derectarmover(anim6)
  derectarmover(anim7);
  derectarmover(anim8);
  derectarmover(anim9)
  derectarmover(anim10);
  derectarmover(anim11);
  derectarmover(anim12)
  derectarmover(anim13);
  derectarmover(anim14);
  derectarmover(anim15)
  derectarmover(anim16);
  derectarmover(anim17);
  derectarmover(anim18)
}

function mouseReleased() {
  setcurrentecosystem();
  console.log(ecosistemaactual);
  if(checkecosystem(animalactual,ecosistemaactual)){
    soltare(animalactual,ecosistemaactual.x,ecosistemaactual.y);
    animalactual.correcto= true;
  }
  else{
    soltare(animalactual, animalactual.initialX, animalactual.initialY);
    

  }
  
}
function derectarboton(zona) {
  if (mouseX > zona.x - (zona.d1 / 2) && mouseX < zona.x + (zona.d1 / 2) && mouseY > zona.y - (zona.d2 / 2) && mouseY < zona.y + (zona.d2 / 2)) {
 console.log("caka")
 pantalla+=1;
  }
}
function derectarmover(zona) {
  if (mouseX > zona.x - (zona.d1 / 2) && mouseX < zona.x + (zona.d1 / 2) && mouseY > zona.y - (zona.d2 / 2) && mouseY < zona.y + (zona.d2 / 2)) {
    zona.anmove = true;
  }
}

function soltare(jam, pos1, pos2) {
  jam.anmove = false
  jam.x = pos1;
  jam.y = pos2;
  jam.corecto = false;
}

function checkecosystem(animal,ecosystem){
  if(animal?.ecosystems){
    console.log(animal.ecosystems.includes(ecosystem.name));
    return animal.ecosystems.includes(ecosystem.name);
  } else {console.log("no existe el animal")}
}

function setcurrentanimal(){
  if(anim1.iscurrentanimal()){
    animalactual=anim1;
  }
  if(anim2.iscurrentanimal()){
    animalactual=anim2;
  }
  if(anim3.iscurrentanimal()){
    animalactual=anim3;
  }
  if(anim4.iscurrentanimal()){
    animalactual=anim4;
  }
  if(anim5.iscurrentanimal()){
    animalactual=anim5;
  }
  if(anim6.iscurrentanimal()){
    animalactual=anim6;
  }
  if(anim7.iscurrentanimal()){
    animalactual=anim7;
  }
  if(anim8.iscurrentanimal()){
    animalactual=anim8;
  }
  if(anim9.iscurrentanimal()){
    animalactual=anim9;
  }
  if(anim10.iscurrentanimal()){
    animalactual=anim10;
  }
  if(anim11.iscurrentanimal()){
    animalactual=anim11;
  }
  if(anim12.iscurrentanimal()){
    animalactual=anim12;
  }
  if(anim13.iscurrentanimal()){
    animalactual=anim13;
  }
  if(anim14.iscurrentanimal()){
    animalactual=anim14;
  }
  if(anim15.iscurrentanimal()){
    animalactual=anim15;
  }if(anim16.iscurrentanimal()){
    animalactual=anim16;
  }
}

function setcurrentecosystem(){
  if(space1.iscurrentterra()){
    ecosistemaactual=space1
  }
  if(space2.iscurrentterra()){
    ecosistemaactual=space2
  }
  if(space3.iscurrentterra()){
    ecosistemaactual=space3
  }
  if(space4.iscurrentterra()){
    ecosistemaactual=space4
  }
}
/*conque bloquear

    anima.anmove = false;
    anima.x = zona.x
    anima.y = zona.y
*/