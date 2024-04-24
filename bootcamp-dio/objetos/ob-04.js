class Carro{
    marca;
    cor;
    gastoMedioCombustivel;
    constructor(marca, cor, gastoMedioCombustivel){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivel = gastoMedioCombustivel;
        
    }
    CalculoGastoDePercurso(precoCombustivel, distancia){
        return `Gasto de Combustível:  R$ ${precoCombustivel * distancia / this.gastoMedioCombustivel}`;

    }
}

const carro1 = new Carro('ford', 'preto', 10);
console.log(carro1.CalculoGastoDePercurso(5.70, 99));