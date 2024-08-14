function action_but(){

    let icon = document.getElementById('add_icon');
    let arquivos = document.getElementById('arquivos');
    let arquivo = document.getElementById('upload');

    let item = document.createElement('option'); // cria uma tag option
    item.text = [arquivo.value]
    arquivos.appendChild(item);

    


}