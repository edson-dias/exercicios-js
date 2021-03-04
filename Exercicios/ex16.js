function Calculadora(valor1, operacao, valor2){
    switch(operacao){
        case '+': return valor1 + valor2
            break
        case '-': return valor1 - valor2
            break
        case '*': return valor1 * valor2
            break
        case '/': return valor1 / valor2
            break
        default: return 'Valor inválido!'
    }
}
