function executar(){

    let formInicio = document.getElementById('inicio'); 
    let formFim = document.getElementById('fim');
    var formPassos = document.getElementById('passo');
    var resuForm = document.getElementById('resultado');

    
    let passos = parseFloat(formPassos.value);
    let inicio = parseFloat(formInicio.value);
    let fim = parseFloat(formFim.value);

    // verifica se está faltando algum dado no formulário
    // length vai pegar a quantidade de caracteres.
    if (formInicio.value.length == 0 || formFim.value.length == 0 || formPassos.value == 0){
        alert('Está faltando dados no formulário!')
    }

    else{

        if (inicio < fim){

            for (let i = inicio; i <= fim; i += passos){

                resuForm.innerHTML += `passo ${i} &#128513; --> `;
            
            }
            resuForm.innerHTML += `🏁`
            }
    
        else if (inicio > fim) {
                for (let i = inicio; i >= fim; i -= passos){

                    resuForm.innerHTML += `passo ${i} &#128513; --> `;
                
                }
                resuForm.innerHTML += `🏁`
            }
}
}

// function executar() {
//     let formInicio = document.getElementById('inicio');
//     let formFim = document.getElementById('fim');
//     let formPasso = document.getElementById('passo');
//     let resuForm = document.getElementById('resultado');

//     let passo = parseFloat(formPasso.value);
//     let inicio = parseFloat(formInicio.value);
//     let fim = parseFloat(formFim.value);

//     for (let i = inicio; i <= fim; i += passo) {
//         resuForm.textContent += i + ' ';
//     }
// }
