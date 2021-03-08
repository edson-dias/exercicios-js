function somaDespesas (vetorDespesas) {
    let soma = 0
    for (let objetos of vetorDespesas){
        soma += objetos.preco
    }
    return soma
}

const despesasTotais = (itens) => itens.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0)
    
