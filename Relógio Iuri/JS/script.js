//DOM
const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')

const dia = document.querySelector('#dia')
const meses = document.querySelector('#meses')
const ano = document.querySelector('#ano')

const saudacao = document.querySelector('#saudacao')

const alvo = document.querySelector('#alvo')
//EVENTOS

setInterval(relogio,1000)

//FUNÇÕES

function relogio(){
    let hoje = new Date()
    let h = hoje.getHours()
    let m = hoje.getMinutes()
    let s = hoje.getSeconds()
    let dy = hoje.getDate()
    let ms = hoje.getMonth()+1
    let an = hoje.getFullYear()

    if (h < 10) {
        h = "0"+h
    }

    if (m < 10){
         m = "0"+m
    }

    if (s < 10){
        s = "0"+s
    }

    if (dy < 10){
        dy = "0"+dy
    }

    if (ms <10){
        ms = "0" + ms
    }
   
    if (h >=5 && h < 12){
        saudacao.textContent = 'Bom Dia !!'
        alvo.src = 'Image/dai2.png' 
    }else if( h >=12  && h <18){
        saudacao.textContent = 'Boa Tarde !!'
        alvo.src = 'Image/tarde.webp'
    }else{
        saudacao.textContent = 'Boa Noite !!'
        alvo.src = 'Image/lua4.png'
        
    }

    
    


    horas.textContent = h
    minutos.textContent = m
    segundos.textContent = s

    dia.textContent = dy
    meses.textContent = ms
    ano.textContent = an


}