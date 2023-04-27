const listaLivros = require('./array')

function margeSort(array) {
    if(array.length > 1) {
        const meio = Math.floor(array.length / 2)
        const parte1 = margeSort(array.slice(0, meio))
        const parte2 = margeSort(array.slice(meio, array.length))
        array = ordena(parte1, parte2)
    }
    return array
}

function ordena(parte1, parte2) {
    let posicaoAtaulParte1 = 0
    let posicaoAtaulParte2 = 0
    const resultado = []

    while (posicaoAtaulParte1 < parte1.length && posicaoAtaulParte2 < parte2.length) {
        var produtoAtualParte1 = parte1[posicaoAtaulParte1]
        var produtoAtualParte2 = parte2[posicaoAtaulParte2]

        if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultado.push(produtoAtualParte1)
            posicaoAtaulParte1++
        } else {
            resultado.push(produtoAtualParte2)
            posicaoAtaulParte2++
        }
    }

    while (posicaoAtaulParte1 < parte1.length) {
        resultado.push(produtoAtualParte1)
        posicaoAtaulParte1++
    }

    return resultado.concat(posicaoAtaulParte1 < parte1.length 
        ? parte1.slice(posicaoAtaulParte1) 
        : parte2.slice(posicaoAtaulParte2))

}

console.log(margeSort(listaLivros))