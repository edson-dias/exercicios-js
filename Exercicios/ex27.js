let alturaCrianca = (dictDadosCriancas) => {
    alturaPrimeira = dictDadosCriancas.primeiraCrianca.altura
    alturaSegunda = dictDadosCriancas.segundaCrianca.altura
    taxaPrimeira = dictDadosCriancas.primeiraCrianca.taxa
    taxaSegunda = dictDadosCriancas.segundaCrianca.taxa
    

    if (alturaPrimeira < alturaSegunda){
        console.log('A segunda criança é maior!')
        console.log(CalculoCrescimento(alturaPrimeira, alturaSegunda, taxaPrimeira, taxaSegunda))
    }
    else if(alturaPrimeira > alturaSegunda){
        console.log('A primeira criança é maior!')
        console.log(CalculoCrescimento(alturaSegunda, alturaPrimeira, taxaSegunda, taxaPrimeira))
    }
    else {
        console.log('As crianças possuem tamanhos iguais!')
    }    
}

function CalculoCrescimento(tamanhoMenorCrianca, tamanhoMaiorCrianca, taxaMenorCrianca, taxaMaiorCrianca){
    if (taxaMenorCrianca < taxaMaiorCrianca){return 'A criança maior vai continuar maior!'}
    else {
        let calculoAnos = (tamanhoMaiorCrianca - tamanhoMenorCrianca) / (taxaMenorCrianca - taxaMaiorCrianca)
        return `A criança menor irá passar a maior em: ${calculoAnos} anos`
    }
}

let dictCriancas = {
    'primeiraCrianca': {'altura': 126,
                        'taxa': 10 },
    'segundaCrianca': {'altura': 138,
                        'taxa': 5}
}

alturaCrianca(dictCriancas)
