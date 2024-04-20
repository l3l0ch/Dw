const cadastros = [{nome: "admin", email: "admin@sistema.com", senha: "admin"}];

// fetch('http://localhost:3000/users', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json'
//   },
//   body: JSON.stringify({ id: 3, name: 'Bob' })
// })
// .then(response => {
//   if (response.ok) {
//     console.log('Novo usuário adicionado com sucesso!');
//     return response.json();
//   } else {
//     throw new Error('Falha ao adicionar novo usuário.');
//   }
// })

let email = document.getElementById('mail');
/* Pegando elementos de um banco de dados e imprimindo em uma div html*/
fetch("http://localhost:3000/users").then((response) => {
    /* Convverte os dados recebidos em json*/
    response.json().then((users) => {
        /* visualiza o banco de dados no console web */
        console.log(users)

        /* funciona como se fosse um for percorrendo o bando de dados */
        // users.map((user) => {
        //     email.innerHTML += `<ul><li>${user.nome} - ${user.email}</li>`;
        // })
        
        for (i in users) {
            email.innerHTML += `<ul><li>${users[i].nome} - ${users[i].email}</li>`
        }
    })
})


function entrar(){
    
    let email = document.querySelector('input#mail').value;
    let senha = document.querySelector("input#password").value;

    if (email.length > 0 && senha.length > 0){
        fetch('http://localhost:3000/users').then((response) => {
            response.json().then((users) => {
                for (i in users) {
                    if (users[i].email == email && users[i].senha == senha) {
                        window.location.href = "../index/index.html";
                    }
                }
            })
        })

        
    }
    else{
        alert('Preencha todos os campos!')
        return;
    }

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
    /* verifica se todos os campos do cadastro foi preenchido*/
    if (nome.length == 0 || email.length == 0 || senha.length == 0 ||confirm_senha.length == 0) {
        alert('Preencha todos os campos!')
        return;
    }
    /* verifica se a senha e a confirmação da senha são iguais*/
    if (senha.value == confirm_senha.value) {
        /* verifica se o email já está cadastrado no banco de dados*/
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
    /* adiciona o novo usuário no array cadastros*/
    cadastros.push(new_user)
    console.log(cadastros)
}
