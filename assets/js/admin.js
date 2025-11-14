function validarLogin() {
    const email = document.getElementById('email')
    const password = document.getElementById('password')

    let lista = window.localStorage.getItem('usuarios')
    //fazer o parse da lista
    lista = JSON.parse(lista)

    //verificar se o numero esta na lista
    //e tabem se a senha confere
    for (let i=0; i < lista.length; i++){
        //estamos pasando pelos itens da lista
        const usuario = lista[i]
        const emailLista = usuario.email
        const passwordLista = usuario.password

        if (emailLista == email.value) {
            //comparar as senhas
            if (passwordLista == password.value) {
                alert('Sucesso, você está logado')
                logado = true
                break
               
               
            } else {
                logado = false
            }
        }else {
           logado = false
        }
    }

    //mostra a mensagem de não logado
    if (logado == false) {
        alert('login inválido')
    } else {
         // vai para pagina home do admin
                window.location.href = '../../pages/home-admin.html'
    }

}