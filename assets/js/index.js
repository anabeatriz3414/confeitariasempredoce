// Criar a lista de imagem 
let imagens = [
    'assets/img/imagem_bolo1.jpg',
    'assets/img/imagem_bolo2.webp',
    'assets/img/imagem_bolo3.avif'
]

let indiceAtualListaImagens = 0

function exibirImagem() {
    let imagemCarrosel = document.getElementById('img-carrosel')
    imagemCarrosel.src = imagens[indiceAtualListaImagens]
}

// lógica para exibir as imagens a cada 4 segundos
setInterval(function() {
    exibirImagem()
    indiceAtualListaImagens++

    if ( indiceAtualListaImagens > 2) {
        indiceAtualListaImagens = 0
    }

}, 4000);

exibirImagem()
indiceAtualListaImagens++