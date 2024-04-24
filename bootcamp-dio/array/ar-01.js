const alunos = ['Marcelo', 'Marcos', 'Ramon']
alunos.push('Maria');
console.log(alunos);

// apaga o ultimo item da lista
alunos.pop();

// apaga o primeiro item da lista
alunos.shift();
console.log(alunos)

const notas = []
notas.push(10);
notas.push(8);
notas.push(2);
alunos.push('Mailos')
alunos.push('joao')
console.log(notas)
console.log('Quantidade de elementos: ', notas.length)

// for (let i = 0; i < alunos.length; i++) {
//     for (let i = 0; i < notas.length; i++) {
//         console.log('aluno: ',alunos[i])
//         console.log('Nota: ',notas[i])
//     }
// }
let soma = 0
for (let i = 0; i < notas.length; i++){
    
    soma += notas[i]
}
console.log(soma/notas.length)