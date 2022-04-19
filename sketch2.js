var rest;
var space1;
var space2;
var space3;
var space4;
var space5;
var space6;
var space7;
var space8;

var bosque;
var selva;
var desierto;
var acuatico;
var nevado;
var subterraneo;
var campo;
var rocosa;

var anim1;
var anim2;
var anim3;
var anim4;
var anim5;
var anim6;
var anim7;
var anim8;
var anim9;
var anim10;
var anim11;
var anim12;
var anim13;
var anim14;
var anim15;
var anim16;
var anim17;
var anim18;

var enciclopedia;

let algas;
let aracneo;
let arthropleura;
let dodo;
let Elasmosaurusazul
let helechos
let hongo1
let hongo2
let hongo3
let mamut
let meganeura
let mosasaurus
let Piatnitzkysaurus
let pterodactyl
let rattusNorvegicus
let smilodon
let stegosaurus
let talapidos

let botonazul;
let fondo0;
let fondo1;
let fondo2;
let fondo3;
let fondo4;
let fondo5;
let fondo6;
let fondo7;
let fondo8;
let fondo9;
let imag1;

let contara;

let botom;

let pantalla;

let arreglo_ecosistemas;

let arreglo_animales;

let animalactual;

let ecosistemaactual;

let pg;

function setup() {
  createCanvas(1900, 1000);
  pg=createGraphics(1900, 1000);
  arreglo_ecosistemas = [
    "bosque","selva", "desierto", "acuatico", "nevado", "subterraneo", "campo", "rocosa"
  ]
  arreglo_animales = [
    "mapache","tiburon","gaviota","camello","rana","polar"
  ]

  bosque = loadImage('./imgs/sceneario/bosque.png')
  selva = loadImage('./imgs/sceneario/selva.png')
  desierto = loadImage('./imgs/sceneario/desierto.png')
  acuatico = loadImage('./imgs/sceneario/acuatico.png')
  nevado = loadImage('./imgs/sceneario/artico.png')
  subterraneo = loadImage('./imgs/sceneario/subterraneo.png')
  campo = loadImage('./imgs/sceneario/campo.png')
  rocosa = loadImage('./imgs/sceneario/rocoso.png')

  rest = new terra("",1560, 500, 490, 870);
  space1 = new terra(arreglo_ecosistemas[0],200, 260, 350, 220, bosque);
  space2 = new terra(arreglo_ecosistemas[1],560, 260, 350, 220, selva);
  space3 = new terra(arreglo_ecosistemas[2],920, 260, 350, 220, desierto );
  space4 = new terra(arreglo_ecosistemas[3],200, 500, 350, 220, acuatico);
  space5 = new terra(arreglo_ecosistemas[4],560, 500, 350, 220, nevado);
  space6 = new terra(arreglo_ecosistemas[5],920, 500, 350, 220, subterraneo);
  
  

  algas = loadImage('./imgs/animals/algas.png')
  aracneo = loadImage('./imgs/animals/Araneo.png')
  arthropleura = loadImage('./imgs/animals/Dodo.png')
  dodo = loadImage('./imgs/animals/arthropleura.png')
  Elasmosaurusazul = loadImage('./imgs/animals/Elasmosaurusazul.png')
  helechos = loadImage('./imgs/animals/Helechos.png')
  hongo1 = loadImage('./imgs/animals/hongo1.png')
  hongo2 = loadImage('./imgs/animals/hongo2.png')
  hongo3 = loadImage('./imgs/animals/hongo3.png')
  mamut = loadImage('./imgs/animals/mamut.png')
  meganeura = loadImage('./imgs/animals/meganeura.png')
  mosasaurus = loadImage('./imgs/animals/mosasaurus.png')
  Piatnitzkysaurus = loadImage('./imgs/animals/Piatnitzkysaurus.png')
  pterodactyl = loadImage('./imgs/animals/Pterodactyl.png')
  rattusNorvegicus = loadImage('./imgs/animals/rattusNorvegicus.png')
  smilodon = loadImage('./imgs/animals/smilodon.png')
  stegosaurus = loadImage('./imgs/animals/stegosaurus.png')
  talpidos = loadImage('./imgs/animals/talpidos.png')


  
  anim1 = new animal("1", ["selva"], 1400, 150, 130, 130,stegosaurus);
  anim2 = new animal("2", ["acuatico"], 1560, 150, 130, 130,algas);
  anim3 = new animal("3", ["desierto"], 1720, 150, 130, 130,meganeura);
  anim4 = new animal("4", ["rocosa"], 1400, 290, 130, 130,aracneo);
  anim5 = new animal("5", ["nevado"], 1560, 290, 130, 130,mamut);
  anim6 = new animal("6", ["nevado"], 1720, 290, 130, 130,smilodon);
  anim7 = new animal("7", ["campo"], 1400, 430, 130, 130,Piatnitzkysaurus);
  anim8 = new animal("8", ["acuatico"], 1560, 430, 130, 130,Elasmosaurusazul);
  anim9 = new animal("9", ["rocosa"], 1720, 430, 130, 130,pterodactyl);
  anim10 = new animal("10", ["subterraneo"], 1400, 570, 130, 130,talpidos);
  anim11 = new animal("11", ["acuatico"], 1560, 570, 130, 130,mosasaurus);
  anim12 = new animal("12", ["bosque"], 1720, 570, 130, 130,helechos);
  anim13 = new animal("13", ["bosque"], 1400, 710, 130, 130,hongo1);
  anim14 = new animal("14", ["bosque"], 1560, 710, 130, 130,hongo2);
  anim15 = new animal("15", ["bosque"], 1720, 710, 130, 130,hongo3);
  anim16 = new animal("16", ["subterraneo"], 1400, 850, 130, 130,rattusNorvegicus);
  anim17 = new animal("17", ["desierto"], 1560, 850, 130, 130,dodo);
  anim18 = new animal("18", ["selva"], 1720, 850, 130, 130,arthropleura);

botonazul = loadImage('./imgs/boton.png')
  fondo0 = loadImage('./imgs/fondo0.png')
  fondo1 = loadImage('./imgs/fondo1.png')
  fondo2 = loadImage('./imgs/fondo2.png')
  fondo3 = loadImage('./imgs/fondo3.png')
  fondo4 = loadImage('./imgs/fondo4.png')
  fondo5 = loadImage('./imgs/fondo5.png')
  fondo6 = loadImage('./imgs/fondo6.png')
  fondo7 = loadImage('./imgs/fondo7.png')
  fondo8 = loadImage('./imgs/fondo8.png')
  fondo9 = loadImage('./imgs/fondo9.png')
  enciclopedia = loadImage('./imgs/enciclopedia.png')
  contara = new contadro(100, 60)


  pantalla = 0;
}

function draw() {
  background(220);
imageMode(CENTER)

  switch (pantalla) {
    case 0:
      image(fondo0, 950, 500)
      image(botonazul,1750,900)
      break;
    case 1:
      image(fondo1, 950, 500)
      image(botonazul,1750,900)
      break;
    case 2:
      image(fondo2, 950, 500)
      image(botonazul,1750,900)
      break;
    case 3:
      image(fondo3, 950, 500)
      image(botonazul,1750,900)
      break;
    case 4:
      image(fondo4, 950, 500)
      image(botonazul,1750,900)
      break;
    case 5:
      image(fondo5, 950, 500)
      image(botonazul,1750,900)
      break;
    case 6:
      image(fondo6, 950, 500)
     

      rest.display()
      space1.display();
      space2.display();
      space3.display();
      space4.display();
      space5.display();
      space6.display();

    image(enciclopedia,1820,70)
      

      anim1.display();
      anim2.display();
      anim3.display();
      anim5.display();
      anim6.display();
      anim8.display();
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
      image(fondo7, 950, 500)
      image(botonazul,1750,900)
      break;
    case 8:
      image(fondo6, 950, 500)

this.animalactual=undefined;
this.ecosistemaactual=undefined;
      
      space7 = new terra(arreglo_ecosistemas[6],350, 740, 350, 220,campo);
      space8 = new terra(arreglo_ecosistemas[7],760, 740, 350, 220,rocosa);

      space7.display();
      space8.display();
      rest.display()
      space1.display();
      space2.display();
      space3.display();
      space4.display();
      space5.display();
      space6.display();
      image(enciclopedia,1820,70)
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
      contara.display()
      
      

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
      image(fondo9, 950, 500);
      fill(255);
      textSize(150);
      textStyle(BOLD);
    textAlign(CENTER);
    text(contara.puntos, 950, 500);
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
  fill(0);
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
  constructor(name,ecosystems,x, y, d1, d2, img) {
    this.ecosystems = ecosystems;
    this.name = name;
    this.img = img;
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
  reset(){
this.x=this.initialX;
this.y=this.initialY;
this.correcto=false;
this.anmove=false;
  }


  display() {
    rectMode(CENTER);
  
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
  constructor(name, x, y, d1, d2, img) {
    this.img = img;
    this.name = name;
    this.x = x;
    this.y = y;
    this.d1 = d1
    this.d2 = d2

  }

  display() {
    rectMode(CENTER);
    fill(255);
    if(this.img)
      image(this.img, this.x, this.y, this.d1, this.d2);
    else
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
    
  }
}

function dverde(anima, zona) {
  if (anima.x > zona.x - (zona.d1 / 2) && anima.x < zona.x + (zona.d1 / 2) && anima.y > zona.y - (zona.d2 / 2) && anima.y < zona.y + (zona.d2 / 2)) {
    anima.r = 0;
    anima.g = 255;
    anima.b = 0;
    
  }
}

function drojo(anima, zona) {
  if (anima.x > zona.x - (zona.d1 / 2) && anima.x < zona.x + (zona.d1 / 2) && anima.y > zona.y - (zona.d2 / 2) && anima.y < zona.y + (zona.d2 / 2)) {
    anima.r = 255;
    anima.g = 0;
    anima.b = 0;
     
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
  if (pantalla!==6 && pantalla!==8) {
  derectarboton();
  console.log("entra")
} 
if(pantalla==6 || pantalla==8){
  setcurrentanimal();
  setcurrentecosystem();
  console.log(animalactual);
  derectarenciclopedia();
  
  
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

    if(document.querySelector("#overlay")){
      if(mouseX > 430 && mouseX < 780 && mouseY > 520 && mouseY < 635){
        document.querySelector("#overlay").querySelector("img").src="./imgs/libro4.png"
      }
      else if (mouseX > 1100 && mouseX < 1480 && mouseY > 520 && mouseY < 635 || (document.querySelector("#overlay").classList.contains("libro3") && mouseX > 310 && mouseX < 380 && mouseY > 750 && mouseY < 820 )){
        document.querySelector("#overlay").classList.remove("libro3")
        document.querySelector("#overlay").querySelector("img").src="./imgs/libro2.png"
        document.querySelector("#overlay").classList.add("libro2")
      }
      else if (mouseX > 1500 && mouseX < 1570 && mouseY > 750 && mouseY < 820){
        document.querySelector("#overlay").classList.remove("libro2")
        document.querySelector("#overlay").querySelector("img").src="./imgs/libro3.png"
        document.querySelector("#overlay").classList.add("libro3")
      }
      
      else if (mouseX > 1550 && mouseX < 1610 && mouseY > 50 && mouseY < 120){
        document.querySelector("#overlay").remove();
      }
    }
  }

}

function mouseReleased() {
  if(pantalla==6 || pantalla==8){
  setcurrentecosystem();
  console.log(ecosistemaactual);
  if(checkecosystem(animalactual,ecosistemaactual) && ecosistemaactual && animalactual && ecosistemaactual.name!==""){
    soltare(animalactual,ecosistemaactual.x,ecosistemaactual.y);
    if(pantalla!==6 && !animalactual.correcto)
      contara.puntos+=10;
    animalactual.correcto= true;
  }
  else{
    soltare(animalactual, animalactual.initialX, animalactual.initialY);
    if(pantalla!==6 && ecosistemaactual && ecosistemaactual?.name!=="" && animalactual)
      contara.puntos-=5;
  }
}
if(pantalla===6){
  if(anim1.correcto && anim2.correcto && anim3.correcto && anim5.correcto && anim6.correcto && anim8.correcto  && anim10.correcto && anim11.correcto && anim12.correcto){
    anim1.reset();
    anim2.reset();
    anim3.reset();
    anim4.reset();
    anim5.reset();
    anim6.reset();
    anim7.reset();
    anim8.reset();
    anim9.reset();
    anim10.reset();
    anim11.reset();
    anim12.reset();
    pantalla++;
  }
}
else if (pantalla===8){
  if(anim1.correcto && anim2.correcto && anim3.correcto && anim4.correcto && anim5.correcto && anim6.correcto && anim7.correcto && anim8.correcto && anim9.correcto && anim10.correcto && anim11.correcto && anim12.correcto && anim13.correcto && anim14.correcto && anim15.correcto && anim16.correcto && anim17.correcto && anim18.correcto){
    pantalla++;
  }
}
}

function derectarenciclopedia(){
  if (mouseX > 1750.5 && mouseX < 1889.5 && mouseY > 22 && mouseY < 118) {
    if(!document.querySelector("#overlay"))
    {let div = document.createElement("div");
    div.id = "overlay";
    div.style.width="100%";
    div.style.height="100%";
    div.style.zIndex=999;
    div.style.background="rgba(0,0,0,0.5)";
    div.style.position="fixed";
    div.style.display="flex";
    div.style.justifyContent="center";
    div.style.alignContent="center";
    let canvas = document.querySelector("canvas")
    let page1 = document.createElement("img");
    page1.src="./imgs/libro1.png";
    div.appendChild(page1);
    document.body.prepend(div);}
  }
}

function derectarboton() {
  if (mouseX > 1657 && mouseX < 1843 && mouseY > 876 && mouseY < 924) {
    console.log("funciona")
 pantalla+=1;
  }
}
function derectarmover(zona) {
  if (mouseX > zona.x - (zona.d1 / 2) && mouseX < zona.x + (zona.d1 / 2) && mouseY > zona.y - (zona.d2 / 2) && mouseY < zona.y + (zona.d2 / 2)) {
    zona.anmove = true;
    console.log("derectar")
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
    console.log(animal.ecosystems.includes(ecosystem?.name));
    return animal.ecosystems.includes(ecosystem?.name);
  } else {console.log("no existe el animal")}
}

function setcurrentanimal(){
  animalactual=undefined;
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
  if(anim17.iscurrentanimal()){
    animalactual=anim17;
  }if(anim18.iscurrentanimal()){
    animalactual=anim18;
  }
}

function setcurrentecosystem(){
  ecosistemaactual=undefined;
  if(space1.iscurrentterra()){
    ecosistemaactual=space1
  }
  else if(space2.iscurrentterra()){
    ecosistemaactual=space2
  }
  else if(space3.iscurrentterra()){
    ecosistemaactual=space3
  }
  else if(space4.iscurrentterra()){
    ecosistemaactual=space4
  }
  else if(space5.iscurrentterra()){
    ecosistemaactual=space5
  }
  else if(space6.iscurrentterra()){
    ecosistemaactual=space6
  }
  else if(space7?.iscurrentterra()){
    ecosistemaactual=space7
  }
  else if(space8?.iscurrentterra()){
    ecosistemaactual=space8
  }
}






/*conque bloquear

    anima.anmove = false;
    anima.x = zona.x
    anima.y = zona.y
*/