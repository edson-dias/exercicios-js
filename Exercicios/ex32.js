const vetor = [2, 3, 8, 15, 2]
let soma = 0

for (values in vetor){
    soma = soma + vetor[values]
}

media = soma / vetor.length
console.log(media)