// Atribuindo objeto a uma variavel 
const usuario = {
    nome: "Mateus",
    email: "Mateusemail.com",
    idade: 24,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`)
    }
};
console.log(usuario.nome);
console.log(usuario);
console.log(usuario.idade);

//substituindo nome
usuario.nome = "lucas"
// adicionando elemento
usuario.altura = 1.67;
console.log(usuario);

usuario.descrever()

usuario.descrever = function() {
    console.log(`\n${this.nome} Mudou a funcção descrever!`)
}
usuario.descrever()

// apaga um elemento da lista
delete usuario;
console.log(usuario);

// acessando dinamicamente os valores do objeto (dicionario)
const atributo = 'idade';
console.log(usuario[atributo])
usuario[atributo] = 'teste'
console.log(usuario)
