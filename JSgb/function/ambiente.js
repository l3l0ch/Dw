function par_impar(n){
    if (n % 2 == 0){
        return 'par!'
    }
    else{
        return 'Ímpar!'
    }
}
console.log(par_impar(3))


// parametro pré definidos, se n1 ou n2 não for passado valor
// assume o valor padrão 0 (Zero).
function soma(n1=0,n2=0){
    return n1 + n2
}

console.log(soma(2));

// lambda
let v = function(x){
    return x*2
}
console.log(v(5));

// fatorial --> 5! = 5 * 4 * 3 * 2 * 1
function fatorial(n){
    let fat = 1
    for (let c = n; c > 1; c--){
        fat = fat * c;
    }
    return fat
}

console.log(fatorial(5));

// recursividade

function fato(n){

    if (n == 1){
        return 1
    }
    else {
        return n * fatorial( n-1 )
    }
}
console.log(fato(5))