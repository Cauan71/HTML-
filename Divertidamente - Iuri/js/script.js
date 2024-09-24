//DOM

const silhueta = document.querySelector('#silhueta')
const btraiva = document.querySelector('#raiva')
const btalegria = document.querySelector('#alegria')
const btnojo = document.querySelector('#nojo')
const tptristeza = document.querySelector('#tristeza')

//EVENTOS
btraiva.addEventListener('click' ,rv)
btalegria.addEventListener('click',al)
btnojo.addEventListener('click',nj)
tptristeza.addEventListener('click',tt)

//FUNÇÕES
function rv(){
    silhueta.src='imagens/01.png'
    
}

function al(){
    silhueta.src = 'imagens/02.png'
}

function nj(){
    silhueta.src = 'imagens/03.png'
}

function tt(){
    silhueta.src = 'imagens/04.png'
}

