function jurosSimples(capInicial, taxa, tempo = 0){
    return capInicial + (capInicial * (taxa/100) * tempo)    
}

function jurosCompostos(capInicial, taxa, tempo = 0){
    return capInicial * Math.pow((1 + (taxa/100)), tempo)
}

const calculoJuros = {
    jurosSimples,
    jurosCompostos,
}


console.log(calculoJuros.jurosSimples(1000, 20, 10))
console.log(calculoJuros.jurosCompostos(1000, 20, 10))