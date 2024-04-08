let num = [1,2,3]


num.length // informa a quantidade de eleentos no array ( tamanho )
console.log(num);

console.log(num.length);
num.sort()

num[3] = 6 //adiciona valor no array na posição informada
num.push(9) //adiciona valor também no array
num.sort() // ordena os elementos dentro do vetor em ordem crescente

console.log(num);
console.log('')
for (let i = 0; i <= num.length; i++){
    console.log(num[i]);
 
}
console.log('')

for ( let i in num ){

    console.log(num[i]);

}

let pos = num.indexOf(9) // busca um valor na posição informada dentro de um vetor. retornando a posição
if (pos == -1){
    console.log(`O valor não foi encontrado.`)
}
else{
    console.log(`O valor está na posição ${pos}.`)
}