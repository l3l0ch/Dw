class Pessoa {
    // Definição das propriedades da classe
    nome;
    peso;
    idade;
    altura;
    
    // Construtor da classe para inicializar as propriedades
    constructor(nome, peso, idade, altura) {
        this.nome = nome;
        this.peso = peso;
        this.idade = idade;
        this.altura = altura;
    }

    // Método para descrever a pessoa com seu nome, idade, altura e peso
    descrever() {
        return (`Meu nome é ${this.nome} e minha idade é ${this.idade} anos e minha altura é ${this.altura} e peso ${this.peso} kg`);
    }

    // Método para calcular o IMC da pessoa
    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    // Método para classificar o IMC da pessoa em categorias de peso
    classificaImc() {
        // formatar o IMC
        // const imc = parseFloat(this.calcularImc().split(':')[1].trim());
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return 'Abaixo do peso';
        } else if (imc >= 18.5 && imc < 25) {
            return 'Peso normal';
        } else if (imc >= 25 && imc < 30) {
            return 'Sobrepeso';
        } else if (imc >= 30 && imc < 40) {
            return 'Obesidade';
        } else {
            return 'Obesidade Grave';
        }
}
}
// Instanciando um objeto da classe Pessoa com os valores específicos
const mateus = new Pessoa('Mateus', 70, 24, 1.67);

// Exibindo as informações da pessoa, seu IMC e a classificação de peso
console.log(mateus.descrever());
console.log(mateus.calcularImc());
console.log(mateus.classificaImc());
