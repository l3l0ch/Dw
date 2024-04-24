const { gets, print } = require('./funcoes-auxiliares')

/* Programa para receber 5 numeros e mostar qual o maior */
let maior = 0;
const lista = [];
// enquanto for tipo number na chamada do gets() 
while (typeof gets() === 'number') {
    let num = gets();

    if (num > maior) {
        maior = num;
    }
    
}
console.log('Maior número: ', maior)
console.log('lista: ', lista)