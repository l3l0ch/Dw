// const funcoes = require('./funcoes-auxiliares');
const { gets, print } = require('./funcoes-auxiliares');

// console.log(funcoes)
// console.log(funcoes.gets())

const pessoa = {
    nome: 'mateus'
}

print(pessoa)
// 10
print(gets())

// OBJECT DESTRUCTURING
// codigos equivalentes
const { nome } = pessoa;
console.log(nome)
// const nome = pessoa.nome;
// console.log(nome)