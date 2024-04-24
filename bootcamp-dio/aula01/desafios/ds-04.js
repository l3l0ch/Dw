const altura = 1.63;
const peso = 67;
const imc = peso / (altura * altura);
console.log('IMC: ' , imc.toFixed(2))
if (imc < 18.5){
    console.log("Abaixo do peso")
}
else if (imc >= 18.5 && imc <= 25){
    console.log("Peso normal")
}
else if (imc > 25 && imc <= 30){
    console.log("Sobrepeso")
}
else if (imc > 30 && imc < 40){
    console.log("Obeso")
}
else{
    console.log("Obesidade Grave")
}
