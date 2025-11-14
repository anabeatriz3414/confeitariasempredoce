const reserva_calendario = document.getElementById('reservas')

const opcoes = {
    initialView: 'dayGridMonth',
    locale: 'pt-br',
    width: 500,
    height: 500,
    headerToolbar: {
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
        center: 'title',
        left: ''
    }
}

const reservaJS = new FullCalendar.Calendar(reserva_calendario, opcoes)

// buscando os compromissos no LS 
let reservaLS = window.localStorage.getItem('reservas')
reservaLS = JSON.parse(reservaLS)

// muitos compromissos, é uma lista 
// entao vamos precisar de for

for (let i=0; i < reservaLS.length; i++) {
    const compromisso = reservaLS[i]

    //adiciona o evento nocalendario 

    reservaJS.addEvent({
        title: compromisso ['title'],
        start: compromisso['start'],
        end: compromisso['end']
    })

}

reservaJS.render()