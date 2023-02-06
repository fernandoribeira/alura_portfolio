// Função preload
function preload() {
  carregaImagem();
  carregaAudio();
}

// Função setup
function setup() {
  configuraBackground();
  configuraTrilhaSonora();
}

// Função draw
function draw() {
  mostraBackground();
  mostraAtor();
  mostraCarro();
  mostraPlacar();
  movimentaAtor();
  movimentaCarro();
  verificaColisao();
  verificaPonto();
}
