let menorMaiorValor = (vetor) => {
    let menor = 0
    let maior = 0

    for (i in vetor){
        if (i == 0){
            menor = vetor[i]
            maior = vetor[i]
        }
        if (vetor[i] > maior){
            maior = vetor[i]
        }
        if (vetor[i] < menor){
            menor = vetor[i]
        }
    }
    return `Menor: ${menor} / Maior: ${maior}`
}

console.log(menorMaiorValor([12, 8, 4, 16, 2]))
