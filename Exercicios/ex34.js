let testeStrings = (str1, str2) => {
    for (letras in str1){
        if (str2.toLowerCase().indexOf(str1[letras].toLowerCase()) > -1){
            continue
        }
        else{
            return false
        }   
    }
    return true
}


console.log(testeStrings('teste1', 'teste2'))