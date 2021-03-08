const mediaVetor = (vetor) => {
    const totalAcumulado = vetor.reduce((somatorio, valorAtual) => somatorio += valorAtual)
    return totalAcumulado / vetor.length
}


console.log(mediaVetor([1, 1, 2, 2]))