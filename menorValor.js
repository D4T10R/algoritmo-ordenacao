const livros = require('./listaLivros')

function menorValor(array, posicaoInicial) {
    
    let maisBarato = posicaoInicial;

    for (let livro = posicaoInicial; livro < array.length; livro++) {
        if(array[livro].preco < array[maisBarato].preco) {
            maisBarato = livro
        }
    }

    return maisBarato
    
}

module.exports = menorValor
