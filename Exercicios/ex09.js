function ProximoMultiploDeCinco(valor){
    while(true){
        if(valor%5 == 0){
            break
        }
        else{
            valor+=1
        }
    }
    return valor
}

function NotasEscola(notaAluno){
    notaMultiplaDeCinco = ProximoMultiploDeCinco(notaAluno)    
    
    if (37 < notaAluno){
        if((notaMultiplaDeCinco-notaAluno) < 3){
            notaAluno = notaMultiplaDeCinco
        }
        return `${notaAluno}: Aprovado`
    }
    else{
        return `${notaAluno}: Reprovado!`
    }
}


a = NotasEscola(37)
console.log(a)