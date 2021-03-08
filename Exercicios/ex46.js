const inverteValores = (valor1) => {
    const tipoValor1 = typeof valor1
    if (tipoValor1 == 'boolean') return !valor1
    else if (tipoValor1 == 'number') return -valor1
    else {
        return `booleano ou número esperados, mas o parâmetro é do tipo ${tipoValor1}`
    }
}

