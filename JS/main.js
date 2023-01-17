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




const controle = document.querySelectorAll("[data-controle]")

controle.forEach( (elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        manipulaDados(evento.target.dataset.controle,evento.target.parentNode)
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
