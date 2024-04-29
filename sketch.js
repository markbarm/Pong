// variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

// Variáveis da raquete
let xRaquete = 10;
let yRaquete = 155;
let comprimentoRaquete = 10;
let alturaRaquete = 90;

// velocidade da bolinha
let velocidadexBolinha = 5;
let velocidadeyBolinha = 5;

// velocidade da Raquete
let velocidadexRaquete = 5;
let velocidadeyRaquete = 5;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostrarRaquete();
  mostraBolinha();
  movimentaMinhaRaquete();
  movimentaBolinha();
  verificaColisaoBorda();
  verificaColisaoRaquete();
}


function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro) // circel (posicao_x, posicao_y, diametro)
}

function mostrarRaquete(){
  rect(xRaquete,yRaquete,comprimentoRaquete,alturaRaquete);
}

function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
}

function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){yRaquete -= 10};
  if (keyIsDown(DOWN_ARROW)){yRaquete += 10};
}

function verificaColisaoRaquete(){
  if(xBolinha < xRaquete + comprimentoRaquete + raio && 
    yBolinha  < yRaquete + alturaRaquete + raio &&
    yBolinha  > yRaquete - raio
    ){
    velocidadexBolinha *=-1
  }
}

function verificaColisaoBorda(){
  if(xBolinha <= raio || xBolinha >= width - raio){velocidadexBolinha *=-1;}
  if(yBolinha <= raio || yBolinha >= height - raio ){velocidadeyBolinha *=-1;}
}
