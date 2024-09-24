//DOM - informar os elementos que irão interagir//

const lampada = document.querySelector('#lamp')
const btigar = document.querySelector('#ligar')
const btdesligar = document.querySelector('#desligar')

//Evento - Como vai ser adicionado

btigar.addEventListener('click',acender)
btdesligar.addEventListener('click',apagar)

//Funções - O que irá acontecer

function acender(){
    lampada.src = 'images/acesa.gif' //clica na imagem e arrasta ate as '' segurando o SHIFT

}

function apagar(){
    lampada.src = 'images/apagada.gif'
}



