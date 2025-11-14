function salvarReserva() {
    const nome = document.getElementById('nome')
    const produto = document.getElementById('produto')
    const quantidade = document.getElementById('quantidade')
    const data = document.getElementById('data')
    const telefone = document.getElementById('telefone')
    const mensagem = document.getElementById('mensagem')

    const start = `${data.value}`

    const dadosReserva = {
        nome: nome.value,
        produto: produto.value,
        quantidade: quantidade.value,
        start: start,
        telefone: telefone.value,
        mensagem: mensagem.value

    }

    let reservaLS = window.localStorage.getItem('reservas')

    if (reservaLS == undefined) {
        //Não eixiste lista no LS
        reservaLS = []
    } else {
        //Existe a lista no LS
        reservaLS = JSON.parse(reservaLS)
    }

    //Salva o compromisso no LS 
    reservaLS.push(dadosReserva)
    window.localStorage.setItem(
        'reservas', JSON.stringify(reservaLS)
    )

    alert('Reserva agendada com sucesso!')
}

