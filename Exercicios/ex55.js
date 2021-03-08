const retornaNumerosEIndexPares = (vetor) => {
    
    const comparaPares = (valor, index) => {
        valorPar = valor%2 === 0
        indexPar = index%2 === 0
        return valorPar && indexPar
    }

    return vetor.filter((valor, index) => comparaPares(valor, index))
    
}

console.log(retornaNumerosEIndexPares([2, 4, 6, 9]))