const contaCaracter = (caracter, frase) => {
    return [...frase].filter(caractere => caractere === caracter).length}

console.log(contaCaracter('a', 'amor ama ana'))
