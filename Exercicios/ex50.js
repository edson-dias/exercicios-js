const simboloOperadorMais = (quantidade) => {
    let retorno = ''
    for (i=0; i<quantidade; i++){
        retorno += '+'
    }
    return retorno
}

console.log(simboloOperadorMais(3))