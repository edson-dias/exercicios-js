function CalculaJuros(mesAnuidade, valorAnuidade){
    const mesesAtrasados = mesAnuidade - 1
    jurosCompostos = valorAnuidade * Math.pow((1.05), mesesAtrasados)     
    return jurosCompostos
}

console.log(CalculaJuros(5, 1000))
