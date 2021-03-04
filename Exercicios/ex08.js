function comparaJogos(v_pontuacao){
    
    let record = v_pontuacao[0]
    let menor = v_pontuacao[0]
    let count_record = 0
    let count_pos = 0

    for (value in v_pontuacao){
        if (v_pontuacao[value] > record){
            record = v_pontuacao[value]
            count_record += 1    
        }
        
        if (menor > v_pontuacao[value]){
            menor = v_pontuacao[value]
            count_pos = value 
        }
    
    }

    count_pos = Number(count_pos) + 1  
    return [count_record, count_pos]
}

console.log(comparaJogos([15, 23, 16, 29, 3, 35, 1, 56]))