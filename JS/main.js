/*
função nomeada.
function nomeDaFunção (){
    função.....
}

função sem nome.
function (){
    função.....
}

arrow function(função de setas)
()=>{
    função......
}
*/

/*============codigo original=================*/
const controle = document.querySelectorAll("[data-controle]");
const estatistica = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        manipulaDados(evento.target.dataset.controle,evento.target.parentNode)
        atualizaEstatisticas(evento.target.dataset.controle, evento.target.dataset.peca)
        console.log(elemento)
    })
})
//Toda vez que for um input pegar o "value".
//Toda vez que for um texto usar o "textContent" para pegar o texto.

function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1

    } else {
        peca.value = parseInt(peca.value) + 1
    }
}
/* Codigo abaixo é o original
function atualizaEstatisticas(peca){
    estatistica.forEach( (elemento)=>{
    
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]

    })
}*/

function atualizaEstatisticas(operacao, peca){
    estatistica.forEach( (elemento)=>{
        if(operacao === "+"){
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        }else {
            elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica] 
        }
    })
}

currenteImageIndex = 0;
const botaoCor = document.querySelector(".botaoCor");
var robotron = document.querySelectorAll("#robotron");
max = robotron.length;

function trocar(){
    robotron[currenteImageIndex]
    .classList.remove("selecionado")

    currenteImageIndex++

    if(currenteImageIndex >= max)
        currenteImageIndex = 0


    robotron[currenteImageIndex]
        .classList.add("selecionado")
}

botaoCor.addEventListener("click", trocar)