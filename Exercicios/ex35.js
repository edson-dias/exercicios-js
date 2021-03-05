const vetorAdiciona = [6, 7, 8, 9, 10]
let vetorPilha = [1, 2, 3, 4, 5]

for (itens in vetorAdiciona){
    vetorPilha.push(vetorAdiciona[itens])
}

console.log(vetorPilha)
