const password = document.getElementById('password')
   const confirmaPassword = document.getElementById('confirma-password')

function cadastrarUsuario(){
   const nome = document.getElementById('nome')
   const email = document.getElementById('email')
  

   if (password.value == confirmaPassword.value){
    //Cadastrar mo local storage

    // verifica a lista existe no local storege
    let lista = window.localStorage.getItem('usuarios')

    if (lista == undefined){
        // não existe a lista, então cria e adiciona o usuário
        lista = []

        // adicionar o ususario na lista
        let usuarios = {
            'nome': nome.value,
            'email': email.value,
            'password': password.value 
        }
        lista.push(usuarios) 

        // salvar no local storage a lista
        window.localStorage.setItem('usuarios', JSON.stringify(lista))
        alert('usuário cadastrado')
    } else {
        // adiconar novos usuários
        // primeiro buscar a lista no local storage 
        let listaE = window.localStorage.getItem('usuarios')
        listaE = JSON.parse(listaE)

        let usuarioA = {
            'nome': nome.value,
            'email':  email.value,
            'password': password.value
        }

        // adiciona na lista
        listaE.push(usuarioA)

        // salvar no local storage
        console.log(listaE)
        window.localStorage.setItem('usuarios', JSON.stringify(listaE))
        alert('usuário cadastrado')

        //limpar os dados dos formularios
        nome.value = ''
        email.value = ''
        password.value = ''
        confirmaPassword.value = ''
    }

   } else{
    alert ('Senha incorreta, verifique seus dados')
    password.value = ''
    confirmaPassword.value = ''
   }
}

function toggleSenha () {
    const exibirSenha = document.getElementById('exibir-senha')

    if (exibirSenha.checked == true) {
        // Mostrar as senhas
        password.type = 'text'
        confirmaPassword.type = 'text'
    } else {
        // Esconder as senhas
         password.type = 'password'
        confirmaPassword.type = 'password'
    }
}