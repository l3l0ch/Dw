function entrar(){
    
    admin = {
    "email":'admin@gmail.com',
    "senha":'1234'
    }

    let acess_email = document.getElementById('mail');
    let acess_senha = document.getElementById('password');

    var date = new Date()

    if (acess_email.value == admin.email && acess_senha.value == admin.senha){
        alert(`Usuário correto, você logou no sistema às ${date.getHours()} horas!`)
    }
    else{
        alert('Usuário ou Senha Incorretos')
    }
}