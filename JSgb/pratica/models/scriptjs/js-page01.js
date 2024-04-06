function carregar(){
    var data = new Date();
    let hora = data.getHours();
    let img = window.document.getElementById('imagem');
    let msg = window.document.querySelector("div#msg");
    //var hora = 23;
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12){
        // bom dia   
        img.src = './imgs/manha.jpg'
        window.document.body.style.background = '#F0E68C';
    }else if (hora >= 12 && hora < 18) {
        // boa tarde
        img.src = './imgs/tarde.jpg'
        window.document.body.style.background = '#FFA500';

    }else {
        img.src = './imgs/noite.jpg'
        window.document.body.style.background = 'black';
        // boa noite
    }
}

