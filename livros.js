const livros = require('./listaLivros')

console.log(livros)

let maisBarato = 0;

for (let livro = 0; livro < livros.length; livro++) {
    if(livros[livro].preco < livros[maisBarato].preco) {
        maisBarato = livro
    }
}

console.log(`O mais barato é ${livros[maisBarato].titulo}, que custa R$${livros[maisBarato].preco}`)