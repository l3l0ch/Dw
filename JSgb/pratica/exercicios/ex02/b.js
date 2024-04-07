function tabuada(){

    let fnum = document.getElementById('txtnum');
    let resu = document.getElementById('seltab');
    
    if (fnum.value.length == 0){
        alert('Insira um número!')
    }
    let num = parseInt(fnum.value);

    // limpa os resultados da tabuada gerada
    resu.innerHTML = ''
    for (let i = 0; i <= 10; i++){
        
        let item = document.createElement('option')
        item.text = `${num} x ${i} = ${num * i}`
        item.value = `item${i}`// adiciona uma identificação para cada item
        resu.appendChild(item); 
    }

}