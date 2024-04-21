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
/* Função que Verifica se existe o email informado no banco de dados */
function verifica_existencia(email) {
    // let verificado = false;
    // fetch('http://localhost:3000/users').then((response) => {
    //     response.json().then((users) => {
    //         for (i in users) {
    //             if (users[i].email == email) {
    //                 verificado = true;
    //                 return;
    //             }
    //         }
    //     })
    // })
    // return verificado;
    
    return new Promise((resolve, reject) => {
        fetch('http://localhost:3000/users').then((response) => {
            response.json().then((users) => {
                for (i in users) {
                    if (users[i].email == email) {
                        resolve(true);
                        return;
                    }
                }
                resolve(false);
                return;
            })
        })
    })

}

function entrar(){
    
    let email = document.querySelector('input#mail').value;
    let senha = document.querySelector("input#password").value;
    let verifica = false;


    if (email.length > 0 && senha.length > 0){
        fetch('http://localhost:3000/users').then((response) => {
            response.json().then((users) => {
                for (i in users) {
                    if (users[i].email == email && users[i].senha == senha) {
                        verifica = true;
                        window.location.href = "../index/index.html";
                        break;
                    }
                }
                if (verifica == false) {
                    window.alert('Usuário ou senha inválidos!')
                    return;
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
    const new_user = {
        nome: nome,
        email: email,
        senha: senha,
    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(new_user)
    }

     /* verifica se todos os campos do cadastro foi preenchido*/
    if (nome.length == 0 || email.length == 0 || senha.length == 0 ||confirm_senha.length == 0) {
        alert('Preencha todos os campos!')
        return;
    }
    if (senha.value != confirm_senha.value){
        alert('Senhas não conferem!')
        return;
    }

    verifica_existencia(email).then((emailExiste) => {
        if (emailExiste == true) {
            alert(`Email Já Está Cadastrado! ${emailExiste}`);
            return;
        } else {
            // Se o email não existe, realiza o cadastro
            fetch('http://localhost:3000/users', options)
                .then((response) => {
                    if (!response.ok) {
                        /* isso interrompe a execução normal do código e causa a saída imediata da função atual. */
                        throw new Error('Erro ao enviar os dados para o servidor');
                    }
                    return response.json(); /* Converte em json a resposta */
                })
                .then((data) => {
                    console.log('Novo usuário cadastrado com sucesso:', data);
                })
                .catch((error) => {
                    console.error("Erro: ", error);
                });
        }
    }).catch((error) => {
        console.error("Erro ao verificar existência de email:", error);
    });




        // fetch('http://localhost:3000/users', options).then((response) => {
        //     if (verifica_existencia(email) == true){
        //         alert(`Email Já Está Cadastrado! ${verifica_existencia(email)}`);
        //         return;
        //     }
        //     if (!response.ok) {
        //         /* isso interrompe a execução normal do código e causa a saída imediata da função atual. */
        //         throw new Error('Erro ao enviar os dados para o servidor');
        //     }
        //     return response.json(); /* Converte em json a resposta */
        // })
        // .then(data => { 
        //     console.log(data)
        // })
        // .catch(error => {
        //     console.log("Erro: ", error)
        // })

    



    // /* verifica se todos os campos do cadastro foi preenchido*/
    // if (nome.length == 0 || email.length == 0 || senha.length == 0 ||confirm_senha.length == 0) {
    //     alert('Preencha todos os campos!')
    //     return;
    // }
    // /* verifica se a senha e a confirmação da senha são iguais*/
    // if (senha.value == confirm_senha.value) {
    //     /* verifica se o email já está cadastrado no banco de dados*/
    //     for (let i = 0; i < cadastros.length; i++){
    //         if (cadastros[i].email == new_user.email) {
    //             alert('Email já cadastrado!')
    //             return;
    //         }
    //     }
    // }
    // else{
    //     alert('As senhas não conferem!')
    //     return;
    // }
    // /* adiciona o novo usuário no array cadastros*/
    // cadastros.push(new_user)
    // console.log(cadastros)
}
