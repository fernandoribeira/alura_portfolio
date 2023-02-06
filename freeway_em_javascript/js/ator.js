// Declaração de variáveis

let posicaoInicialAtor = 367;
let xAtor = 100;
let yAtor = 367;
let larguraAtor = 30;
let alturaAtor = 30;
let diametroAtor = 15;
let velocidadeAtor = 5;
let teclaCima = 38;
let teclaBaixo = 40;
let colisao = false;
let pontuacao = 0;

// Funções

function mostraAtor() {
  image(imagemAtor, xAtor, yAtor, larguraAtor, alturaAtor);
}

function movimentaAtor() {
  if (yAtor > bordaCimaAtor) {
      if (keyIsDown(teclaCima)) {
        yAtor -= velocidadeAtor;    
      }
  }
  if (yAtor < bordaBaixoAtor) {
    if (keyIsDown(teclaBaixo)) {
      yAtor += velocidadeAtor;    
    }   
  }
}

function verificaColisao() {
  for (let i = 0; i < imagemCarros.length; i++) {
    colisao = collideRectCircle(xCarros[i], 
                                yCarros[i], 
                                larguraCarro, 
                                alturaCarro, 
                                xAtor, 
                                yAtor, 
                                diametroAtor);
    if (colisao) {
      audioColidiu.play();
      yAtor = posicaoInicialAtor;
      if (pontuacao > 0) {
        pontuacao--;    
      }
    }
  }
}

function verificaPonto() {
  if (yAtor < 10) {
    audioPontos.play();
    pontuacao++;
    yAtor = posicaoInicialAtor;
  }
}