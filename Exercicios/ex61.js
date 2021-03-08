const retornaMenorValor = (vetor) => vetor.reduce((anterior, atual) => anterior < atual ? anterior:atual)

console.log(retornaMenorValor([4, 3, 2, 6]))