const n1 = 10;
const n2 = 8;
const n3 = 4;
const media = (n1 + n2 + n3) / 3;
console.log(media.toFixed(2));
if (media < 5){
    console.log("Reprovado")
}
else if (media => 5 && media <=7) {
    console.log("Recuperação")
}
else {
    console.log("Aprovado")
}