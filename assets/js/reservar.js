function adicionarInformacoes() {
    const nome = document.getElementById('nome')
    const produto = document.getElementById('produto')
    const quantidade = document.getElementById('quantidade')
    const data = document.getElementById('data')
    const telefone = document.getElementById('telefone')
    const comentario = document.getElementById('mensagem')

    const reservaDados = {
        nome: nome.value,
        produto: produto.value,
        quantidade: quantidade.value,
        data: data.value,
        telefone: telefone.value,
        comentario: comentario.value
    }

    let reservasLS = window.localStorage.getItem('reservas')
    
    if (reservasLS == undefined) {
        reservasLS = []
    } else {
        reservasLS = JSON.parse(reservasLS)
    }

    reservasLS.push(reservaDados)
    window.localStorage.setItem('reservas', JSON.stringify(reservasLS))

    alert('Reserva feita com sucesso!😁')
}