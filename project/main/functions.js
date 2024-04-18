const cadastros = [{nome: "admin", email: "admin@sistema.com", senha: "admin"}];

function entrar(){
    alert('entrou!')

    // for (let i = 0; i < (cadastros.length); i++) {

        
    //     console.log(cadastros[i].email)
    // }

}
function cadastrar(){
    let nome = document.querySelector('input#nome').value;
    let email = document.querySelector('input#mail').value;
    let senha = document.querySelector("input#password").value;
    let confirm_senha = document.querySelector("input#conf-password").value;
    
    new_user = {
        nome: nome,
        email: email,
        senha: senha,
    }
    if (nome.length == 0 || email.length == 0 || senha.length == 0 ||confirm_senha.length == 0) {
        alert('Preencha todos os campos!')
        return;
    }
    if (senha.value == confirm_senha.value) {
        for (let i = 0; i < cadastros.length; i++){
            if (cadastros[i].email == new_user.email) {
                alert('Email já cadastrado!')
                return;
            }
        }
    }
    else{
        alert('As senhas não conferem!')
        return;
    }
    cadastros.push(new_user)
    console.log(cadastros)
}
