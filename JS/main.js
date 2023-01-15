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

//document.querySelector("#robotron").addEventListener("click", oi)

document.querySelector("#robotron").addEventListener("click", () =>{

    console.log("full stack")
    console.log("oi, bem vindo!")
    
})

function oi (nome){
    console.log("oi " + nome)
    console.log(", bem vindo!")
}

oi()