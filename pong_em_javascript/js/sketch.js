// Declaração de variáveis

// Variáveis de som
let ponto;
let raquetada;
let trilha;

// Variáveis da tela
let largura = 600;
let altura = 400;
let cor = 0;

// Variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametroBolinha = 20;
let raioBolinha = diametroBolinha / 2;
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;

// Variáveis comuns das raquetes
let larguraRaquete = 10;
let alturaRaquete = 90;
let velocidadeRaquete = 5;

// Variáveis da raquete esquerda
let xRaqueteEsquerda = 5;
let yRaqueteEsquerda = 155;
let colidiuRaqueteEsquerda = false;
let pontosRaqueteEsquerda = 0;

// Variáveis da raquete direita
let xRaqueteDireita = 585;
let yRaqueteDireita = 155;
let colidiuRaqueteDireita = false;
let pontosRaqueteDireita = 0;

// Função de configuração

function preload() {
  ponto = loadSound("./audio/ponto.mp3");
  raquetada = loadSound("./audio/raquetada.mp3");
  trilha = loadSound("./audio/trilha.mp3");
}

function setup() {
  createCanvas(largura, altura);
  trilha.loop();
}

// Função de execução do programa

function draw() {
  
  // Desenha fundo
  desenhaFundo();
  
  // Cria o placar
  criaPlacar();
  
  // Cria a bolinha
  criaBolinha();

  // Cria as raquetes dos jogadores
  criaRaquete(xRaqueteEsquerda, yRaqueteEsquerda);
  criaRaquete(xRaqueteDireita, yRaqueteDireita);

  // Movimenta a bolinha
  movimentaBolinha();

  // Movimenta a raquete da esquerda
  movimentaRaqueteEsquerda();
  
  // Movimenta a raquete da direita
  movimentaRaqueteDireita();
  
  // Testa a colisão da bola com as bordas
  testaColisaoBolaComBordas();
  
  // Testa a colisão da bola com as raquetes
  testaColisaoRaquete(xRaqueteEsquerda, yRaqueteEsquerda);
  testaColisaoRaquete(xRaqueteDireita, yRaqueteDireita);
  
  // Verifica pontuação
  verificaPontuacao();
  
  // Verifica se abolinha nao ficou presa
  //bolinhaNaoFicouPresa();
  
}

// Demais funções

function desenhaFundo() {
  background(cor);
}

function criaPlacar() {
  fill(255);
  stroke(255);
  fill(color(255, 140, 0));
  rect(230, 16, 40, 30, 3);
  rect(330, 16, 40, 30, 3);
  textAlign(CENTER);
  textSize(24);
  fill(255);
  text(pontosRaqueteEsquerda, 250, 40);
  text(pontosRaqueteDireita, 350, 40);
}

function criaBolinha() {
  circle(xBolinha, yBolinha, diametroBolinha);
}

function criaRaquete(xPosicao, yPosicao) {
  rect(xPosicao, yPosicao, larguraRaquete, alturaRaquete);
}

function movimentaBolinha() {
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function movimentaRaqueteEsquerda() {
  if (keyIsDown(87)) {
    if (yRaqueteEsquerda > 10) {
      yRaqueteEsquerda -= velocidadeRaquete;
    } 
  }
  if (keyIsDown(83)) {
    if (yRaqueteEsquerda < 390 - alturaRaquete) {
      yRaqueteEsquerda += velocidadeRaquete;
    }
  }
}

function movimentaRaqueteDireita() {
  if (keyIsDown(UP_ARROW)) {
    if (yRaqueteDireita > 10) {
      yRaqueteDireita -= velocidadeRaquete;
    } 
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (yRaqueteDireita < 390 - alturaRaquete) {
      yRaqueteDireita += velocidadeRaquete;
    }
  }
}

function testaColisaoBolaComBordas() {
  if (xBolinha - raioBolinha < 0 || xBolinha + raioBolinha > width) {
      velocidadeXBolinha *= -1;
  }
  if (yBolinha - raioBolinha < 0 || yBolinha + raioBolinha > height) {
      velocidadeYBolinha *= -1;
  }
}

function testaColisaoRaquete(xRaquete, yRaquete) {
  colidiuRaquete = collideRectCircle(xRaquete, yRaquete, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raioBolinha);
  if (colidiuRaquete) {
    raquetada.play();
    velocidadeXBolinha *= -1;
  }
}

function verificaPontuacao() {
  if (xBolinha - raioBolinha < 2) {
    pontosRaqueteDireita++;
    ponto.play();
  }
  if (xBolinha + raioBolinha > 598) {
    pontosRaqueteEsquerda++;
    ponto.play();
  }
}

function bolinhaNaoFicouPresa() {
    if (xBolinha - raioBolinha < 0){
      xBolinha = 20;
    }
    if (yBolinha + raioBolinha > 600){
      yBolinha = 580;
    }
}