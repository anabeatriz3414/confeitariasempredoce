function adicionarCompromisso() {
    const compromisso = document.getElementById('compromisso')
    const data_inicio = document.getElementById('data_inicio')
    const data_fim = document.getElementById('data_fim')
    const horario_inicio = document.getElementById('horario_inicio')
    const horario_fim = document.getElementById('horario_fim')

    const start = `${data_inicio.value}T${horario_inicio.value}:00`
    const end = `${data_fim.value}T${horario_fim.value}:00`

    const compromissoCalendario = {
        title: compromisso.value,
        start: start,
        end: end
    }
    let compromissoLS = window.localStorage.getItem('compromisso')
    if (compromissoLS == undefined) {
        //Lista não existe
        compromissoLS = []
    } else {
        //Lista existe
        compromissoLS = JSON.parse(compromissoLS)
    }

    // Salv o compromisso no LS
    compromissoLS.push(compromissoCalendario)
    window.localStorage.setItem (
        "compromissos", JSON.stringify(compromissoLS)
    )
    alert('Compromissos cadastrado com sucesso')
}