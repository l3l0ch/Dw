const precoEtanol = 3.99
const precoGasolina = 5.39
const distancia = 100
const kmPorLitro = 32

let option = "Gasolina"

if ( option == 'Gasolina')
{
    console.log(`O valor da gasolina é ${((precoGasolina * distancia) / kmPorLitro.toFixed(2))}`)
}
else if ( option == 'Etanol'){
    console.log(`O valor do etanol é ${((precoEtanol * distancia) / kmPorLitro).toFixed(2)}`)
}
else{
    console.log('option inválida!')
}


function menu(){
    console.log('')
}