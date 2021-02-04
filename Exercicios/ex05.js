converteSoma = (v1=0, v2=0) => {
    let soma = v1 + v2
    
    return `R$${soma.toFixed(2).replace('.', ',')}` 
}

console.log(converteSoma(0.1, 0.2))
