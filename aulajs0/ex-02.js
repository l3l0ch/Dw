// whithout declaration keyword
//variable = 10;
//console.log(variable);
// const -> deve usar o const para declarar variavel
//const number = 10;
//console.log(number);
// not mutable
// quando colocar o const não é possível reatribuir outro valor na variavel.
//number = 100;
//console.log(number)

//cannot redeclare block-scoped variable 'number'
//SyntaxeError: Identifier 'number' has already been declared
//const number = 100;


// só é possível mudar o valor do number dentro de uma função.
// pois, ao criar uma função você seperar oque está acontecendo "dentro" da função
// com o que acontece do lado de "fora"
//function doSomething(){
//    const number = 100;
//    console.log(number);
//}
//console.log(number);


// let -> tipagem dinâmica
let value = 10;

//reassingment
value = 100;
console.log(value);


//dynamic types
value = 'hello';
console.log(value);

//var =  let
//var x = 10;
//var x = 100;
//var x = 'hello';

//console.log(x);

//case sensitive
//const number = 10;

//weak type
const x = 10;
const y = true;
console.log(x + y);
// resultado = 11

// weak type
const name = 'variable';
console.log(name[1] + '1');
console.log(name + true);


console.log(2*-+3);

//arithmetic operatiors
// + - ** * / % 

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

//ieee 754
console.log(0.3 - 0.2);
//result 0.099999999999998

//concat operator 
console.log(2 + '2'); // => 22
console.log(2 + Number('2')); //=> 4

// increment and decrement operators
let n = 10;

console.log(n++); // => 10
console.log(++n); // => 12

// result bool
console.log(1 > 2);
console.log(2 > 1);

//equality operators 

console.log(1 == 1); // true - compara apenas o valor
console.log(1 === 1);// true - Compara valor com o tipo do valor
console.log(1 == '1');//true
console.log(1 === '1');//false - valores são iguais mas os tipos não são.

console.log("")
//binary logical operators 
// ||, &&, !
console.log(true && true); //false
console.log(true || false);// true
console.log(!true); // false
console.log(!!true); //true
console.log(!!10); // converte em um valor bool- true boolean(10)
console.log(!!0); // false


let a; // underfine
// se não tiver valor definido, assuma o valor padrão 0
console.log(a || '0'); // => 0

a = 10;
console.log(a || 0); //= 10

// nulish coalescing operator(??)
let b; //underfine
console.log(b ?? 0); //=> 0

b =5;
console.log(b ?? 0); //=> 5

console.log('')
//binary bitwise operators
// &, |, ^, ~, <<, >?, >>>

//   00000001 1
// & 00000001 1
// = 00000001 1
console.log(1 & 1);

//   00000010 2
// & 00000001 1
// = 00000000 0
console.log(3 & 1);

//   00000011 3
// & 00000001 1
// = 00000000 0
console.log(4 & 1);

//x & 1 = impar

/*

// Operadores
let idade = 17;

// a variavel maior_idade vai ser receber a string maior ou menor,
// caso o valor da variavel idade for maior que 18, assume o valor 'maior'
// se não for maior assume o valor 'menor'
maior_idade = idade >= 18 ? 'MAIOR' : 'MENOR'
console.log(maior_idade);

*/