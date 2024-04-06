function verificar(){
    let data = new Date();
    let ano_atual = data.getFullYear();

    let ano_formulario = window.document.getElementById('ano');

    let res = document.getElementById('resultado');

    if (ano_formulario.value.length == 0 || ano_formulario.value > ano_atual){
        alert('[ERRO] Ano válido obrigatório!')
    }
    else{
        let formulario_sex = document.getElementsByName('radsex');
        let idade =  ano_atual - Number(ano_formulario.value);

        var genero = ''
        
        // adicionando um elemento no html
        // basicamente estou escrevendo <img id='foto'> na linha 20, 21
        let imagem = document.createElement('img');
        imagem.setAttribute('id', 'foto')


        if (formulario_sex[0].checked){
            genero = 'Homem'

            if (idade < 10 && idade > 0){
                // criança
                imagem.setAttribute('src','./imgs/CJovem.png')
            }
            else if (idade < 30){
                // jovem
                imagem.setAttribute('src','./imgs/HJovem.png')

            }
            else if (idade < 65){
                // adulto
                imagem.setAttribute('src','./imgs/adulto.png')

            }
            else { // idoso 
                imagem.setAttribute('src','./imgs/idoso.png')

            }

        }
        
        else if (formulario_sex[1].checked){
            genero = 'Mulher'
        

            if (idade > 10 && idade > 0){
                // criança
                imagem.setAttribute('src','./imgs/cfjovem.png')
            }
            else if (idade < 30){
                // jovem
                imagem.setAttribute('src','./imgs/Mjovem.png')
            }
            else if (idade < 65){
                // adulto
                imagem.setAttribute('src','./imgs/adulta.png')

            }
            else { // idoso 
                imagem.setAttribute('src','./imgs/idosa.png')

            }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(imagem)

}
}