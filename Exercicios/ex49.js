const repeteValores = (varRepetida, repeticoes) => {
    const vetor = []
    for (i=0; i < repeticoes; i++){
        vetor.push(varRepetida)
    }
    return vetor
}

console.log(repeteValores('teste', 3))