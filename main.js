function tocaSom (idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador]
    const nota = tecla.classList[2];
    
    const idAudio = `#som_${nota}`;

    tecla.onclick = function () {
        tocaSom(idAudio);
        console.log(tecla);
    }
}

document.onkeydown = function(e) {
    let x = e.keyCode;
    let y = String.fromCharCode(x);

    if(y){
        const idAudio = `#som_${y}`;
        tocaSom(idAudio);
        console.log(tecla);
    }
}
