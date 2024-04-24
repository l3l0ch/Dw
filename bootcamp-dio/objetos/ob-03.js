class Pessoa {
    // criando atributos de classe
    nome;
    idade;
    anoDeNascismento;
    // obriga que toda vez quando a classe for instanciada, seja necessário colocar nome e idade
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascismento = 2024 - idade;
    }


    // método de classe
    descrever(){
        return (`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`)
    }
}
// instanciando a classe
const vitor = new Pessoa('vitor', 25);

// console.log(vitor.descrever())

const mateus = new Pessoa('mateus', 24);
// console.log(mateus);

// console.log(mateus.descrever())


// recebendo objetos
function comparandoPessoas(p1, p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}` )
    } else if (p1.idade < p2.idade){
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}` )
    }else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

comparandoPessoas(vitor, mateus)