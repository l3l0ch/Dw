/* Função será executada apenas uma vez */
// Função imediata
(main = function(){
    console.log('nome')
})(); 


const nome = "Mateus"
const idade = 24
function meuNome(nome){
    return (`${nome}`)
}

meuNome(nome)

function maiorIdade(nome,idade){
    if (idade >= 18){
        console.log(`${meuNome('Mateus')} é maior de idade`)
    }
    else{
        console.log(`${nome} é menor de idade`)
    }
}
maiorIdade(nome,idade) 