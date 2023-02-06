// Declaração de variáveis

let caminhoAudioColidiu = "./audio/colidiu.mp3";
let caminhoAudioPontos = "./audio/pontos.wav";
let caminhoAudioTrilha = "./audio/trilha.mp3";
let audioColidiu;
let audioPontos;
let audioTrilha;

// Funções

function carregaAudio() {
  audioColidiu = loadSound(caminhoAudioColidiu);
  audioPontos = loadSound(caminhoAudioPontos);
  audioTrilha = loadSound(caminhoAudioTrilha);
}

function configuraTrilhaSonora() {
  audioTrilha.loop();
}
