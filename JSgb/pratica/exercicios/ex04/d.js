var lista = [];
let resu = document.querySelector('div#resultado');

//função para verificar se já existe o valor que está sendo adicionar na lista
function inLista(n,l){
    // retorna -1 se não existir o número na lista
    if(l.indexOf(Number(n)) != -1){
        return true
    }else {
        return false
    }
}
function adicionar(){

    // numero para adicionar
    let num_form = document.getElementById('txtnum');
    let numero = parseInt(num_form.value);


    // verificar se o numero é maior que 100 ou menor que 1 ou é um NaN (not-a-number)
    if (numero > 100 || numero < 1 || isNaN(numero) || inLista(numero,lista) === true){
        alert('Valor inválido ou já existente!!')
     }
  
    else{


        // tabela html (select)
        let tab = document.getElementById('tabela_numeros')
        
        // adicionando o número informado no input a lista
        lista.push(numero);

        // criado um elemento "option" para o section.
        let item = document.createElement('option'); // cria uma tag option
        item.text = `Adicionado o número ${numero} na lista!`;
        tab.appendChild(item);

        resu.innerHTML = '' // limpa a caixa, quando adicionar após adicionar um número
        // só vai limpar dps que tiver clicado em finalizar e for adicionar numeros 


    }
    //apaga o valor após executar o adcionar()
    num_form.value = ''
    // deixa a caixa de entrada de dados selecionada
    num_form.focus();
}

function finalizar(){
    let soma = 0;
    let menor = 99999999999999999999;
    let maior = 0;
    
    resu.innerHTML = `Ao todo, temos ${lista.length} cadastrados <br><br>`

    if (lista.length == 0){
        alert('Necessário ter número na lista!')
    }else{


        for (item in lista){

            soma += lista[item]

            if (lista[item] > maior){
                maior = lista[item]

        }
            
            if (lista[item] < menor){
                menor = lista[item]

        }
            
    }

        resu.innerHTML += `Menor valor da lista cadastrado: ${menor} <br><br>`

        resu.innerHTML += `Maior valor da lista cadastrado: ${maior} <br><br>`

        resu.innerHTML += `Soma total dos valores da lista: ${soma} <br><br>`
        
        resu.innerHTML += `A média dos valores digitados é ${soma / lista.length}`

    }
}
