//criação de constantes que servirão de base para a confirmação do comando de voz

const nomeSecreto = "começar"

//Criação de Função que ira reproduzir o audio

function tocaSom(idElementoAudio) {
    let audio = document.querySelector(idElementoAudio);
    audio.currentTime = 0;
    audio.play();
}

//Alocando os elementos das teclas dentro de um constante que servira para as validações de toque e click

const listaDeTeclas = document.querySelectorAll('.tecla');

//Captação de click em uma nota e execução da mesma

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const nota = tecla.classList[2];

    const idAudio = `#som_${nota}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
    }
}

//Captação de Keydown em uma nota e execução da mesma

document.onkeydown = function (e) {
    let x = e.keyCode;
    let y = String.fromCharCode(x);

    const idAudio = `#som_${y.toLowerCase()}`;

    if (y) {
        tocaSom(idAudio);
    }
}










