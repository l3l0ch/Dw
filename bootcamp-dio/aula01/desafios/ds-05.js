const preco_normal = 1000
const debitoAvista = (10 / 100)
const dinheiroPix = (15 / 100)
const tipoPagamento = 5

function menu(){
    console.log("1 - Debito")
    console.log("2 - Pix")
    console.log("3 - Dinheiro")
    console.log("4 - Parcelado até (2vezes)")
    console.log("5 - Acima de 3 parcelas")
 
}
menu()
if (tipoPagamento === 1){
    console.log("Desconto: ", preco_normal * debitoAvista)
    console.log("valor a pagar: ", (preco_normal * debitoAvista) - preco_normal)

}
else if (tipoPagamento === 2){
    console.log("Desconto: ", preco_normal * dinheiroPix)
    console.log("valor a pagar: ", (preco_normal * dinheiroPix) - preco_normal)

}
else if (tipoPagamento === 3){
    console.log("Desconto: ", preco_normal * dinheiroPix)
    console.log("valor a pagar: ", preco_normal * dinheiroPix)

}
else if (tipoPagamento === 4){
    console.log("Valor normal: ", preco_normal)
  

}
else if (tipoPagamento === 5) {
    console.log("Pagamento com juros: ", (preco_normal * (10/100) + preco_normal))
    console.log("juros: ", (preco_normal * (10/100)))

}