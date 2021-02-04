let divisao = (dividendo, divisor) => {
    return `Resultado: ${Math.trunc(dividendo/divisor)} \nResto: ${dividendo%divisor}`
}

console.log(divisao(11, 2))