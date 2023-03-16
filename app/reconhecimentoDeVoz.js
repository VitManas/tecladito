//Inicialização da API de reconhecimento de voz

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

//Atribuindo e recebendo dados do usuário

recognition.addEventListener('result', onSpeak)

//Execução da função de validação de fala

function onSpeak(e) {
    fala = e.results[0][0].transcript
    console.log(fala)
    verificaSeAFalaPossuiUmValorValido(fala)
}

