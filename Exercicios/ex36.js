let multiplicacaoArray = (vetorNumerico, multiplicador) => {
    let vetorResposta = []

    for (i in vetorNumerico){
        vetorResposta.push(vetorNumerico[i] * multiplicador)
    }
    return vetorResposta
}

console.log(multiplicacaoArray([1,2,3,4], 2))
