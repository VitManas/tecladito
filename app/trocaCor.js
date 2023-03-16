let black = "black";
let blue = "blue";
let green = "green";
let red = "red";

function trocaBlack(){
    let troc = document.getElementById('ultopp');
    troc.classList.remove(`keyboard${blue}`);
    troc.classList.remove(`keyboard${green}`);
    troc.classList.remove(`keyboard${red}`);
    troc.classList.add('keyboardblack')
}

function trocaBlue(){
    let troc = document.getElementById('ultopp');
    troc.classList.remove(`keyboard${black}`);
    troc.classList.remove(`keyboard${green}`);
    troc.classList.remove(`keyboard${red}`);
    troc.classList.add('keyboardblue')
}

function trocaGreen(){
    let troc = document.getElementById('ultopp');
    troc.classList.remove(`keyboard${blue}`);
    troc.classList.remove(`keyboard${black}`);
    troc.classList.remove(`keyboard${red}`);
    troc.classList.add('keyboardgreen')
}

function trocaRed(){
    let troc = document.getElementById('ultopp');
    troc.classList.remove(`keyboard${blue}`);
    troc.classList.remove(`keyboard${green}`);
    troc.classList.remove(`keyboard${black}`);
    troc.classList.add('keyboardred')
}