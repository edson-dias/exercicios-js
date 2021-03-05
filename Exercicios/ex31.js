const vetor = [1, -5, 1, 3, -8, -12]
let negativos = 0

for (values in vetor){
    if (vetor[values] < 0){
        negativos += 1
    }
}
console.log(negativos)