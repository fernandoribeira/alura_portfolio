// Declaração de variáveis

// Estrada
let caminhoImagemEstrada = "./image/estrada.png";
let imagemEstrada;

// Ator
let caminhoImagemAtor = "./image/ator-1.png";
let imagemAtor;

// Carro
let caminhoImagemCarros = ["./image/carro-1.png", 
                           "./image/carro-2.png", 
                           "./image/carro-3.png",
                           "./image/carro-1.png", 
                           "./image/carro-2.png", 
                           "./image/carro-3.png"];
let imagemCarros = [];

// Funções

function carregaImagem() {
  imagemEstrada = loadImage(caminhoImagemEstrada);
  imagemAtor = loadImage(caminhoImagemAtor);
  for (let i = 0; i <caminhoImagemCarros.length; i++) {
    imagemCarros[i] = loadImage(caminhoImagemCarros[i]);
  }
}
