function carregarUsuarios(){

    const usuariosLS = window.localStorage.getItem('usuarios')
    const usuarios = JSON.parse(usuariosLS)
    const tbodyUsuarios = document.getElementById('tbody-usuarios')

    for (let i=0; i < usuarios.length; i++){
        const usuario = usuarios[i]
        const nome = usuario.nome
        const email = usuario.email

        const linha = document.createElement('tr')
    // criar colunas
    const coluna1 = document.createElement('td')
    const coluna2 = document.createElement('td')
    
    coluna1.textContent = nome
    coluna2.textContent = email

    // add as colunas na linha
    linha.appendChild(coluna1)
    linha.appendChild(coluna2)

    //add a linha no tbody
    tbodyUsuarios.appendChild(linha)

       
    }

    //criar a linha
    
}

carregarUsuarios()