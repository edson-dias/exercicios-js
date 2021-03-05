let leituraVetor = (vetor) => {
    let pares = 0
    let impares = 0

    for (values in vetor){
        if (vetor[values]%2 == 0){
            pares += 1        
        }
        else{
            impares += 1
        }
    }
    return `Pares: ${pares},  Ímpares ${impares}`
}

const vetor = [2, 3, 4, 5, 6, 7, 8]
console.log(leituraVetor(vetor))