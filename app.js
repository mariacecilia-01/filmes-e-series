'use strict'

let idFoto

const input = document.getElementById('input')
const botaoTrocarFoto = document.getElementById('trocar-img')
const body = document.querySelector('body')
const digitarTexto = document.getElementById('imagem')

// function trocarImg(){
//     const img = document.getElementById('imagem').value
//     document.documentElement.style.setProperty('--bg-img', img)
// }

function trocarImagem(){
    let nomeImg = document.getElementById('input').value.trim()

    while(nomeImg.includes(' ')){
        nomeImg = nomeImg.replace(' ', '_')

        console.log(nomeImg)
    }

    nomeImg = nomeImg.toLowerCase()

    const caminhoImg = `url(./img/${nomeImg}.jpeg)`

    document.documentElement.style.setProperty('--bg-img', caminhoImg)
}

function slideImagens(){
    
}

botaoTrocarFoto.addEventListener('click', trocarImagem)



// input.addEventListener('change', function(evento){
//     idFoto = (evento.target.value)
//     console.log(idFoto)
// })

// botaoTrocarFoto.addEventListener('click',function(evento){
//     body.setAttribute.background = "url(`./img${idFoto}`)"

//     console.log(botaoTrocarFoto)
// })

