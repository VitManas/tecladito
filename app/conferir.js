//Função que verifica a fala do usuario

function verificaSeAFalaPossuiUmValorValido(chute) {
    const fala = chute;

    if (fala === nomeSecreto) {
        ocultarDois();
        document.getElementsById('dvConteudoDois').classList.remove("inicio");
    }
}