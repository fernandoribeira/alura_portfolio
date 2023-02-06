// Declaração de variáveis

let larguraCarro = 50;
let alturaCarro = 40;
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 98, 150, 209, 264, 318];
let velocidadeCarros = [2, 2.5, 3.2, 5, 3.3, 2.3];

// Funções

function mostraCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    image(imagemCarros[i], xCarros[i], yCarros[i], larguraCarro, alturaCarro);
  }
}

function movimentaCarro() {
  for (let i = 0; i < imagemCarros.length; i++) {
    if (xCarros[i] >= bordaEsquerdaCarros) {
      xCarros[i] -= velocidadeCarros[i];
    } else {
      xCarros[i] = bordaDireitaCarros;
    }
  }
}
