function AumentoFuncionario(plano, salario){
    switch(plano){
        case 'A': aumento = 1.1
        break
        case 'B': aumento = 1.15
        break
        case 'C': aumento = 1.2
        break
        default: console.log('Plano inválido!')
    }

    if (aumento){
        console.log(`Novo salário: ${salario * aumento}`)
    }
}


a = AumentoFuncionario('C', 1000)
