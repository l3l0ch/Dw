const preco_combustivel = 5.79;
const kmPorLitros = 12;
const distancia = 2000;

console.log(`Valor gasto na viajem = R$ ${ ((distancia / kmPorLitros)  * preco_combustivel).toFixed(2)}`);

