const listaLivros = require('./arrayOrdenado.js')
const livros = require ('./arrayOrdenado.js')

function busca(array, de, ate, valorBuscado) {
    const meio = Math.floor((de + ate) / 2)
    const atual = array[meio]

    if (de > ate) {
        return -1
    }

    if (atual.preco === valorBuscado) {
        return meio
    } else if (atual.preco > valorBuscado) {
        return busca(array, de, meio - 1, valorBuscado)
    } else if (atual.preco < valorBuscado) {
        return busca(array, meio + 1, ate, valorBuscado)
    }


}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 40))