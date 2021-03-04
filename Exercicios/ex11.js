function CalcAnoBissextos(ano){
    if (ano%4 == 0){
        if (ano%100 == 0){
            if(ano%400 == 0){
                console.log('Ano Bissexto!')
                return true
            }
        }
        else{
            console.log('Ano Bissexto!')
            return true 
        }
    }
    return false
}


a = CalcAnoBissextos(1900)