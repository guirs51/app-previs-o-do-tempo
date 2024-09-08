
const key ="e4326b658300b7f6d36eb5d305889bbf"

function colocarDadosNaTela(dados) {
    
    document.querySelector(".cidade").innerHTML = dados.name
    

}

 async function BuscarCidade(cidade){
    
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=$${cidade}&appid=${key}&lang=pt_br`).then( Response => Response.json())
    
    console.log(dados)
}


function buttonBuscar() {
    const cidade = document.querySelector(".input-cidade").value

  BuscarCidade(input)
}