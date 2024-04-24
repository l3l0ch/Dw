class Pessoa {
    // criando atributos de classe
    nome;
    idade;
    

    // método de classe
    descrever(){
        return (`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`)
    }
}
// instanciando a classe
const mateus = new Pessoa();
mateus.nome = 'Mateus'
mateus.idade = 24
console.log(mateus.descrever())

const renan = new Pessoa();
renan.nome = 'Renan'
renan.idade = 30
console.log(renan.descrever())