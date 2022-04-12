let y = 1;
let x = 1;
let ancho = 20;
let alto = 20;

function setup() {
    createCanvas(400, 400);
}
  
function draw() {
    background(255,100,0);
    rect(x, y, ancho, alto);
    y += 1;
    x += 1;
    
    // if (alto < 120) {
    //     alto = alto + 1
    // } else {
    //     alto = alto;
    // }

    // if (ancho < 120) {
    //     ancho = ancho + 1
    // } else {
    //     ancho = ancho;
    // }

    alto = alto < 120 ? alto + 1 : alto;
    ancho = ancho < 120 ? ancho + 1 : ancho;
    
}