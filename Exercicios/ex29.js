let intervalo = (vetor) => {
    let dentro = 0
    let fora = 0

    for (i in vetor){
        if (10 <= vetor[i] && vetor[i] <= 20){
            dentro += 1
        }
        else {
            fora += 1
        }
    }
    return `${dentro}, ${fora}`
}

console.log(intervalo([11, 12, 13, 1, 2, 3, 4]))

