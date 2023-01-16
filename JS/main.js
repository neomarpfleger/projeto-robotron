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

const subtrair = document.querySelector("#subtrair")
const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")

somar.addEventListener("click", () =>{
    braco.value = parseInt(braco.value) + 1
})

subtrair.addEventListener("click", () =>{
    braco.value = parseInt(braco.value) - 1
})
